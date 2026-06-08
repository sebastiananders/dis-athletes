import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Award, Calendar, MapPin, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { athletes } from "@/data/athletes"

interface AthletePageProps {
  params: Promise<{
    id: string
  }>
}

export default async function AthletePage({ params }: AthletePageProps) {
  const { id } = await params
  const athlete = athletes.find((a) => a.id === id)

  if (!athlete) {
    notFound()
  }

  return (
    <main className="flex-1 py-12">
      <div className="container px-4 md:px-6">
        <Button variant="ghost" asChild className="mb-8 -ml-3 text-muted-foreground hover:text-foreground">
          <Link href="/athletes" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            All Athletes
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Photo */}
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <Image
                  src={athlete.image || "/placeholder.svg"}
                  alt={athlete.name}
                  width={500}
                  height={600}
                  className="object-cover w-full"
                />
              </div>

              {/* Meta card */}
              <div className="rounded-xl border border-border/60 bg-muted/30 divide-y divide-border/60">
                <div className="flex items-center gap-3 px-4 py-3">
                  <Trophy className="h-4 w-4 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Sport</p>
                    <p className="text-sm font-medium mt-0.5">{athlete.sport}</p>
                  </div>
                </div>

                {athlete.location && (
                  <div className="flex items-center gap-3 px-4 py-3">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</p>
                      <p className="text-sm font-medium mt-0.5">{athlete.location}</p>
                    </div>
                  </div>
                )}

                {athlete.diagnosisAge && (
                  <div className="flex items-center gap-3 px-4 py-3">
                    <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Diagnosed at Age</p>
                      <p className="text-sm font-medium mt-0.5">{athlete.diagnosisAge}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Achievements */}
              {athlete.achievements && athlete.achievements.length > 0 && (
                <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-4 w-4 text-primary" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key Achievements</p>
                  </div>
                  <ul className="space-y-2.5">
                    {athlete.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Social links */}
              {athlete.socialLinks && Object.keys(athlete.socialLinks).length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">
                    Follow {athlete.name.split(" ")[0]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(athlete.socialLinks).map(
                      ([platform, url]) =>
                        url !== "N/A" && (
                          <Button key={platform} variant="outline" size="sm" asChild className="text-xs">
                            <Link href={url} target="_blank" rel="noopener noreferrer">
                              {platform.charAt(0).toUpperCase() + platform.slice(1)}
                            </Link>
                          </Button>
                        ),
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center px-2.5 py-1 mb-4 text-xs font-semibold rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
              {athlete.sport}
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8">{athlete.name}</h1>

            <div className="prose prose-lg max-w-none">
              {athlete.story.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {athlete.quote && (
              <div className="my-10 p-6 bg-card rounded-xl border border-border shadow-sm">
                <svg className="h-7 w-7 text-primary/25 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-lg italic leading-relaxed text-foreground/90">"{athlete.quote}"</blockquote>
              </div>
            )}

            {athlete.diabetesManagement && (
              <div className="mt-10 pt-10 border-t border-border">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Management</p>
                <h2 className="text-2xl font-bold tracking-tight mb-5">Diabetes Management Approach</h2>
                <div className="prose prose-lg max-w-none">
                  {athlete.diabetesManagement.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {athlete.advice && (
              <div className="mt-10 pt-10 border-t border-border">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Advice</p>
                <h2 className="text-2xl font-bold tracking-tight mb-5">Advice for Fellow Diabetic Athletes</h2>
                <div className="prose prose-lg max-w-none">
                  {athlete.advice.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
