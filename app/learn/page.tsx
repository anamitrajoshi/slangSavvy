import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LearnPage() {
  return (
    <div className="container max-w-4xl py-8">
      <Link href="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <h1 className="text-3xl font-bold mb-6">Learn With AI</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Our AI can generate conversations and scenarios using slang terms to help you understand how they're used in
        context.
      </p>

      <Tabs defaultValue="conversations">
        <TabsList className="mb-8">
          <TabsTrigger value="conversations">AI Conversations</TabsTrigger>
          <TabsTrigger value="scenarios">Real-life Scenarios</TabsTrigger>
          <TabsTrigger value="quizzes">Slang Quizzes</TabsTrigger>
        </TabsList>

        <TabsContent value="conversations" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Conversation at a Party</CardTitle>
              <CardDescription>Learn how Gen Z uses slang in social settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold">Alex:</p>
                <p>Yo, this party is bussin! The vibes are immaculate.</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="font-semibold">Jordan:</p>
                <p>Fr fr, the DJ is slaying right now. No cap, best party this semester.</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold">Alex:</p>
                <p>Did you see Taylor? They're giving main character energy tonight.</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="font-semibold">Jordan:</p>
                <p>Ong! Their fit is fire. I'm lowkey jealous of their rizz.</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold">Alex:</p>
                <p>It's the confidence for me. Anyway, I'm gonna grab a drink. You want anything?</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="font-semibold">Jordan:</p>
                <p>I'm good. Just don't get caught in 4K doing something embarrassing!</p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="space-y-2 w-full">
                <h3 className="font-semibold">Slang Terms Used:</h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    bussin
                  </Button>
                  <Button variant="outline" size="sm">
                    vibes are immaculate
                  </Button>
                  <Button variant="outline" size="sm">
                    fr fr
                  </Button>
                  <Button variant="outline" size="sm">
                    slaying
                  </Button>
                  <Button variant="outline" size="sm">
                    no cap
                  </Button>
                  <Button variant="outline" size="sm">
                    main character energy
                  </Button>
                  <Button variant="outline" size="sm">
                    ong
                  </Button>
                  <Button variant="outline" size="sm">
                    fit is fire
                  </Button>
                  <Button variant="outline" size="sm">
                    lowkey
                  </Button>
                  <Button variant="outline" size="sm">
                    rizz
                  </Button>
                  <Button variant="outline" size="sm">
                    it's the ... for me
                  </Button>
                  <Button variant="outline" size="sm">
                    caught in 4K
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>

          <Button size="lg" className="w-full">
            Generate New Conversation
          </Button>
        </TabsContent>

        <TabsContent value="scenarios" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Comments</CardTitle>
              <CardDescription>Learn how Gen Z uses slang on social platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                  <p className="font-semibold">@user_123</p>
                </div>
                <p className="mb-2">Just dropped my new art project! Been working on this for months.</p>
                <div className="h-40 bg-muted rounded-md mb-2 flex items-center justify-center text-muted-foreground">
                  [Image placeholder]
                </div>
                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20"></div>
                    <p className="font-semibold">@artlover:</p>
                    <p>This is straight fire! You ate and left no crumbs.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20"></div>
                    <p className="font-semibold">@creative_vibes:</p>
                    <p>The talent is unreal, I'm obsessed! Main character behavior fr.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20"></div>
                    <p className="font-semibold">@design_guru:</p>
                    <p>This slaps so hard. Living for this aesthetic, no cap.</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="space-y-2 w-full">
                <h3 className="font-semibold">Slang Terms Used:</h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    straight fire
                  </Button>
                  <Button variant="outline" size="sm">
                    ate and left no crumbs
                  </Button>
                  <Button variant="outline" size="sm">
                    obsessed
                  </Button>
                  <Button variant="outline" size="sm">
                    main character behavior
                  </Button>
                  <Button variant="outline" size="sm">
                    fr
                  </Button>
                  <Button variant="outline" size="sm">
                    slaps
                  </Button>
                  <Button variant="outline" size="sm">
                    living for
                  </Button>
                  <Button variant="outline" size="sm">
                    no cap
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>

          <Button size="lg" className="w-full">
            Generate New Scenario
          </Button>
        </TabsContent>

        <TabsContent value="quizzes" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Test Your Slang Knowledge</CardTitle>
              <CardDescription>See how well you understand modern Gen Z slang</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold">1. What does "no cap" mean?</h3>
                <div className="grid grid-cols-1 gap-2">
                  <Button variant="outline" className="justify-start">
                    A. I'm not wearing a hat
                  </Button>
                  <Button variant="outline" className="justify-start">
                    B. I'm not lying or exaggerating
                  </Button>
                  <Button variant="outline" className="justify-start">
                    C. I don't have a limit
                  </Button>
                  <Button variant="outline" className="justify-start">
                    D. I don't understand
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">2. If someone says something is "bussin," they mean it's:</h3>
                <div className="grid grid-cols-1 gap-2">
                  <Button variant="outline" className="justify-start">
                    A. Broken or damaged
                  </Button>
                  <Button variant="outline" className="justify-start">
                    B. Extremely good or delicious
                  </Button>
                  <Button variant="outline" className="justify-start">
                    C. Crowded or busy
                  </Button>
                  <Button variant="outline" className="justify-start">
                    D. Boring or uninteresting
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">3. What does having "rizz" refer to?</h3>
                <div className="grid grid-cols-1 gap-2">
                  <Button variant="outline" className="justify-start">
                    A. Being rich or wealthy
                  </Button>
                  <Button variant="outline" className="justify-start">
                    B. Having style or fashion sense
                  </Button>
                  <Button variant="outline" className="justify-start">
                    C. Having charm or charisma, especially in romantic situations
                  </Button>
                  <Button variant="outline" className="justify-start">
                    D. Being athletic or physically fit
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full">
                Check Answers
              </Button>
            </CardFooter>
          </Card>

          <Button size="lg" className="w-full">
            Generate New Quiz
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}

