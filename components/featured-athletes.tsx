import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { athletes } from "@/data/athletes"

export function FeaturedAthletes() {
  const featuredAthletes = athletes.filter((athlete) => athlete.featured).slice(0, 3)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {featuredAthletes.map((athlete) => (
        <Link key={athlete.id} href={`/athletes/${athlete.id}`} className="group">
          <Card className="overflow-hidden h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 border-border/60">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={athlete.image || "/placeholder.svg"}
                alt={athlete.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <div className="inline-flex items-center px-2.5 py-1 mb-3 text-xs font-semibold rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                {athlete.sport}
              </div>
              <h3 className="text-xl font-bold">{athlete.name}</h3>
              <p className="text-muted-foreground mt-2 line-clamp-3 text-sm leading-relaxed">{athlete.shortBio}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
