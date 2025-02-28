import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface SlangExampleProps {
  term: string
  definition: string
  examples: string[]
}

export default function SlangExample({ term, definition, examples }: SlangExampleProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardTitle className="text-2xl">{term}</CardTitle>
        <CardDescription className="text-white/90">Gen Z Slang Term</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Definition</h3>
            <p>{definition}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Examples</h3>
            <ul className="list-disc pl-5 space-y-1">
              {examples.map((example, index) => (
                <li key={index}>{example}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">AI Context</h3>
            <p className="text-muted-foreground">
              This term is commonly used in casual conversations among friends, especially on social media platforms
              like TikTok and Instagram. It gained popularity around 2021-2022 and continues to be widely used.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

