import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { currentSpotlight } from "@/data/spotlight"

export function AthleteSpotlight() {
  const s = currentSpotlight

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Photo */}
        <div className="relative h-64 md:h-auto min-h-[320px]">
          <Image
            src={s.image}
            alt={s.name}
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />
          <p className="absolute bottom-2 right-2 text-[10px] text-white/50 select-none">©Jean-Charles Caslot / FFT</p>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              {s.badgeText}
            </span>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
            <span>{s.sport}</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span>{s.date}</span>
          </div>

          {/* Headline */}
          <h3 className="text-2xl font-bold tracking-tight leading-snug sm:text-3xl">
            {s.headline}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {s.description}
          </p>

          {/* CTA */}
          <div>
            <Button asChild>
              <Link href={`/athletes/${s.athleteId}`}>
                View Profile <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
