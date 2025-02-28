import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function TrendingTerms() {
  const trendingTerms = [
    {
      term: "Rizz",
      definition:
        "The ability to attract or charm someone, especially through style, charisma, or conversation skills.",
      popularity: "Very High",
      origin: "Internet culture, popularized on TikTok",
    },
    {
      term: "Bussin",
      definition: "Something that is extremely good, typically used to describe food.",
      popularity: "High",
      origin: "AAVE (African American Vernacular English)",
    },
    {
      term: "Yeet",
      definition: "To throw something with force or to express excitement.",
      popularity: "Medium",
      origin: "Vine videos in the mid-2010s",
    },
    {
      term: "Simp",
      definition: "Someone who is overly attentive or submissive to someone they're attracted to.",
      popularity: "High",
      origin: "Internet culture",
    },
    {
      term: "Cheugy",
      definition: "Something that is outdated or trying too hard to be cool.",
      popularity: "Medium",
      origin: "TikTok",
    },
    {
      term: "Sus",
      definition: "Suspicious or questionable.",
      popularity: "Very High",
      origin: "Among Us game, but existed in slang before",
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {trendingTerms.map((term, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>{term.term}</CardTitle>
              <Badge
                variant={
                  term.popularity === "Very High" ? "destructive" : term.popularity === "High" ? "default" : "secondary"
                }
              >
                {term.popularity}
              </Badge>
            </div>
            <CardDescription>Origin: {term.origin}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{term.definition}</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="ml-auto" asChild>
              <Link href="#">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

