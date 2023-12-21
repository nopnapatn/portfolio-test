import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import ThemeProvider from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "nopnapatn",
  description: "Generated by nopnapatn",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="pt-20 min-h-screen">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
