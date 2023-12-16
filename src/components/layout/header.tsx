import { GhostIcon } from "lucide-react"
import CommandMenu from "../command-menu"
import NavigationMenuDemo from "../navigation-menu"
import { Icons } from "../shared/icons"
import { ModeSelect } from "../shared/mode"

export function Header() {
  return (
    <>
      <header className="fixed w-full z-20 top-0 start-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <div className="flex items-center justify-start">
            <a
              href="/"
              className="flex items-center justify-center"
            >
              <GhostIcon className="mr-2" />
              <span className="text-2xl font-bold mr-2">NOP</span>
            </a>
            <NavigationMenuDemo />
          </div>
          <div className="flex items-center justify-around">
            <div className="mr-2">
              <CommandMenu />
            </div>
            <div className="mr-2">
              <ModeSelect />
            </div>
            <a
              href="https://github.com/nopnapatn"
              className="h-5 w-5"
            >
              <Icons.gitHub />
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
