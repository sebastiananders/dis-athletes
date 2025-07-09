"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { athletes } from "@/data/athletes"

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function AthletesPage() {
  const [sportFilter, setSportFilter] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [shuffledAthletes, setShuffledAthletes] = useState<typeof athletes>([])

  useEffect(() => {
    setShuffledAthletes(shuffleArray(athletes))
  }, [])

  // Filter athletes based on sport discipline and search query
  const filteredAthletes = shuffledAthletes.filter((athlete) => {
    const matchesSport = sportFilter === "all" || athlete.sport === sportFilter
    const matchesSearch =
      athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      athlete.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
      athlete.shortBio.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSport && matchesSearch
  })

  // Get unique sport disciplines
  const sportDisciplines = ["all", ...new Set(shuffledAthletes.map((athlete) => athlete.sport))]

  return (
    <main className="flex-1 py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Athletes</h1>
            <p className="text-muted-foreground mt-2">
              Discover inspiring Type 1 diabetic athletes across various sports
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Input
                placeholder="Search athletes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-[250px]"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filter by Sport</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup value={sportFilter} onValueChange={setSportFilter}>
                  {sportDisciplines.map((sport) => (
                    <DropdownMenuRadioItem key={sport} value={sport}>
                      {sport === "all" ? "All Sports" : sport}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {filteredAthletes.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium">No athletes found</h2>
            <p className="text-muted-foreground mt-2">Try adjusting your filters or search query</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAthletes.map((athlete) => (
              <Link key={athlete.id} href={`/athletes/${athlete.id}`}>
                <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
                  <div className="aspect-[4/3] relative">
                    <Image src={athlete.image || "/placeholder.svg"} alt={athlete.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="inline-block px-2 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {athlete.sport}
                    </div>
                    <h3 className="text-xl font-bold">{athlete.name}</h3>
                    <p className="text-muted-foreground mt-2 line-clamp-3">{athlete.shortBio}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
