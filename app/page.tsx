import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import TrendingTerms from "@/components/trending-terms"
import HeroSection from "@/components/hero-section"
import SlangExample from "@/components/slang-example"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SlangSavvy
            </span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Trending
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Learn
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Decode Any Slang Term</h2>
            <p className="text-muted-foreground md:text-xl">
              Enter any slang term to get AI-powered explanations, examples, and context.
            </p>
            <div className="flex w-full max-w-lg mx-auto items-center space-x-2">
              <Input type="text" placeholder="Type a slang term..." className="text-lg py-6" />
              <Button type="submit" size="icon" className="h-12 w-12">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <SlangExample
              term="Rizz"
              definition="The ability to attract or charm someone, especially through style, charisma, or conversation skills."
              examples={[
                "He's got mad rizz, he can talk to anyone.",
                "Her rizz is unmatched, everyone wants to be her friend.",
              ]}
            />
            <SlangExample
              term="Bussin"
              definition="Something that is extremely good, typically used to describe food."
              examples={["This pizza is bussin!", "The new restaurant's menu is absolutely bussin."]}
            />
          </div>
        </section>

        <section className="container py-12 md:py-16 bg-slate-50 dark:bg-slate-900 rounded-lg">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Trending Slang Terms</h2>
            <TrendingTerms />
          </div>
        </section>

        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Learn With AI</h2>
            <p className="text-muted-foreground md:text-xl">
              Our AI can generate conversations using slang terms to help you understand how they're used in context.
            </p>
            <Button size="lg" className="mt-4">
              Try AI Conversations
            </Button>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2024 SlangSavvy. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

