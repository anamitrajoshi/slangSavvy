import { NextResponse } from "next/server"

// This would be replaced with a real database or API call
const slangDatabase = [
  {
    term: "Rizz",
    definition: "The ability to attract or charm someone, especially through style, charisma, or conversation skills.",
    examples: ["He's got mad rizz, he can talk to anyone.", "Her rizz is unmatched, everyone wants to be her friend."],
    popularity: "Very High",
    origin: "Internet culture, popularized on TikTok",
    alternativeDefinitions: [
      "Short for 'charisma' - the quality of being able to attract and influence others.",
      "Can be used as a verb: 'to rizz up' meaning to charm or flirt with someone.",
    ],
    relatedTerms: ["W", "Simp", "Vibe Check", "Based", "Drip", "Caught in 4K"],
  },
  {
    term: "Bussin",
    definition: "Something that is extremely good, typically used to describe food.",
    examples: ["This pizza is bussin!", "The new restaurant's menu is absolutely bussin."],
    popularity: "High",
    origin: "AAVE (African American Vernacular English)",
    alternativeDefinitions: [
      "Can be used to describe anything exceptionally good, not just food.",
      "Often emphasized as 'bussin bussin' for extra emphasis.",
    ],
    relatedTerms: ["Fire", "Slaps", "Hits Different", "Goated", "Valid"],
  },
  {
    term: "No cap",
    definition: "Not lying or exaggerating, telling the truth.",
    examples: ["This is the best pizza I've ever had, no cap.", "No cap, I finished all my homework already."],
    popularity: "Very High",
    origin: "Hip-hop culture, popularized on social media",
    alternativeDefinitions: [
      "Used to emphasize the truthfulness of a statement.",
      "The opposite of 'capping,' which means lying.",
    ],
    relatedTerms: ["Fr", "Ong", "Deadass", "Straight up", "Real talk"],
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const term = searchParams.get("term")

  if (term) {
    const result = slangDatabase.find((item) => item.term.toLowerCase() === term.toLowerCase())

    if (result) {
      return NextResponse.json(result)
    } else {
      return NextResponse.json({ message: "Term not found" }, { status: 404 })
    }
  }

  return NextResponse.json(slangDatabase)
}

