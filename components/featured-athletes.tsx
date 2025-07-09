import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { athletes } from "@/data/athletes"

export function FeaturedAthletes() {
  // Get featured athletes
  const featuredAthletes = athletes.filter((athlete) => athlete.featured).slice(0, 3)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {featuredAthletes.map((athlete) => (
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
  )
}
