import { allPosts } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import { ChevronLeftIcon, GhostIcon } from "lucide-react"
import { useMDXComponent } from "next-contentlayer/hooks"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.url === params.slug)
  if (!post) return
  return { title: `Blog | ${post.title}` }
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.url === params.slug)
  if (!post) notFound()
  const MDXContent = useMDXComponent(post.body.code)

  const minRead = Math.floor(post.body.raw.length / 200)

  return (
    <>
      <article className="prose max-w-3xl mx-auto">
        <Link
          className="inline-flex items-center gap-x-1.5 text-sm"
          href="/blog"
        >
          <ChevronLeftIcon className="h-4 w-4" />
          Back to Blog
        </Link>
        <div className="h-10"></div>
        <h1 className="text-5xl font-bold">{post.title}</h1>
        <ul className="text-gray-500">
          <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </li>
          <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
            {minRead} min read
          </li>
        </ul>
        <MDXContent
          components={{
            Image: (props) => (
              <Image
                alt={props.alt}
                className="rounded-lg"
                {...props}
              />
            ),
          }}
        />
        <div className="sticky bottom-6 inset-x-0 text-center">
          <div className="inline-block bg-zinc-50 shadow-md rounded-full py-3 px-4 dark:bg-zinc-800">
            <div className="flex items-center gap-x-1.5">
              <div className="hs-tooltip inline-block">
                <button
                  type="button"
                  className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <GhostIcon className="h-4 w-4" />
                  875
                </button>
              </div>

              <div className="block h-3 border-e border-gray-300 mx-3 dark:border-gray-600"></div>

              <div className="hs-tooltip inline-block">
                <button
                  type="button"
                  className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <GhostIcon className="h-4 w-4" />
                  16
                </button>
              </div>

              <div className="block h-3 border-e border-gray-300 mx-3 dark:border-gray-600"></div>

              <div className="hs-dropdown relative inline-flex">
                <button
                  type="button"
                  id="blog-article-share-dropdown"
                  className="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
