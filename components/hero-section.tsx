import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                Decode the Language of Gen Z
              </h1>
              <p className="max-w-[600px] text-white md:text-xl">
                SlangSavvy uses AI to help you understand modern slang, stay relevant, and communicate effectively with
                the younger generation.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-xl bg-white/10 p-6 shadow-lg backdrop-blur">
              <div className="space-y-4">
                <div className="space-y-2 rounded-lg bg-white/80 p-4 dark:bg-gray-950/80">
                  <div className="font-bold">Slang Term: "No cap"</div>
                  <div className="text-sm">Definition: Not lying or exaggerating, telling the truth.</div>
                  <div className="text-xs text-muted-foreground">
                    Example: "This is the best pizza I've ever had, no cap."
                  </div>
                </div>
                <div className="space-y-2 rounded-lg bg-white/80 p-4 dark:bg-gray-950/80">
                  <div className="font-bold">Slang Term: "Slay"</div>
                  <div className="text-sm">Definition: To do something exceptionally well or impressively.</div>
                  <div className="text-xs text-muted-foreground">Example: "You really slayed that presentation!"</div>
                </div>
                <div className="space-y-2 rounded-lg bg-white/80 p-4 dark:bg-gray-950/80">
                  <div className="font-bold">Slang Term: "Main character energy"</div>
                  <div className="text-sm">
                    Definition: Acting like you're the protagonist of your own movie or story.
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Example: "She walked into the party with main character energy."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

