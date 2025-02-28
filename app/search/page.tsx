"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [hasResults, setHasResults] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      setIsSearching(true)
      // Simulate API call
      setTimeout(() => {
        setIsSearching(false)
        setHasResults(true)
      }, 1500)
    }
  }

  return (
    <div className="container max-w-4xl py-8">
      <Link href="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <h1 className="text-3xl font-bold mb-6">Search Slang Terms</h1>

      <form onSubmit={handleSearch} className="flex w-full items-center space-x-2 mb-8">
        <Input
          type="text"
          placeholder="Type a slang term..."
          className="text-lg py-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit" size="icon" className="h-12 w-12" disabled={isSearching}>
          {isSearching ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
          ) : (
            <Search className="h-5 w-5" />
          )}
          <span className="sr-only">Search</span>
        </Button>
      </form>

      {hasResults && (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Rizz</CardTitle>
              <CardDescription>Popularity: Very High • Origin: Internet culture, popularized on TikTok</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="definition">
                <TabsList className="mb-4">
                  <TabsTrigger value="definition">Definition</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                  <TabsTrigger value="ai-context">AI Context</TabsTrigger>
                </TabsList>
                <TabsContent value="definition" className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Primary Definition</h3>
                    <p>
                      The ability to attract or charm someone, especially through style, charisma, or conversation
                      skills.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Alternative Meanings</h3>
                    <p>1. Short for "charisma" - the quality of being able to attract and influence others.</p>
                    <p>2. Can be used as a verb: "to rizz up" meaning to charm or flirt with someone.</p>
                  </div>
                </TabsContent>
                <TabsContent value="examples" className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Example Sentences</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>"He's got mad rizz, he can talk to anyone."</li>
                      <li>"Her rizz is unmatched, everyone wants to be her friend."</li>
                      <li>"I need to work on my rizz before the party tonight."</li>
                      <li>"Did you see how he rizzed her up? Smooth!"</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="ai-context" className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Cultural Context</h3>
                    <p>
                      "Rizz" emerged around 2021-2022 and gained significant popularity through TikTok and streaming
                      platforms. It's believed to be derived from the word "charisma." The term was further popularized
                      when content creator Kai Cenat used it frequently in his streams.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Usage Patterns</h3>
                    <p>
                      Most commonly used by Gen Z (born 1997-2012) and younger Millennials. The term is often used in
                      casual conversations, social media, and when discussing dating or social interactions. It's
                      frequently paired with modifiers like "no rizz," "unspoken rizz," or "elite rizz" to indicate
                      different levels of charm or charisma.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-xl font-bold mb-4">Related Terms</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start">
                W (Win)
              </Button>
              <Button variant="outline" className="justify-start">
                Simp
              </Button>
              <Button variant="outline" className="justify-start">
                Vibe Check
              </Button>
              <Button variant="outline" className="justify-start">
                Based
              </Button>
              <Button variant="outline" className="justify-start">
                Drip
              </Button>
              <Button variant="outline" className="justify-start">
                Caught in 4K
              </Button>
            </div>
          </div>
        </div>
      )}

      {!hasResults && !isSearching && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Search for a slang term to see its definition, examples, and AI-powered context.
          </p>
        </div>
      )}
    </div>
  )
}

