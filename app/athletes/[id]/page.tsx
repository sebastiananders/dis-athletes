import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Award, Calendar, MapPin, Trophy, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { athletes } from "@/data/athletes"

interface AthletePageProps {
  params: {
    id: string
  }
}

export default function AthletePage({ params }: AthletePageProps) {
  const athlete = athletes.find((a) => a.id === params.id)

  if (!athlete) {
    notFound()
  }

  return (
    <main className="flex-1 py-12">
      <div className="container px-4 md:px-6">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/athletes" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Athletes
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={athlete.image || "/placeholder.svg"}
                  alt={athlete.name}
                  width={500}
                  height={600}
                  className="object-cover w-full"
                />
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Sport</h3>
                    <p>{athlete.sport}</p>
                  </div>
                </div>

                {athlete.location && (
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p>{athlete.location}</p>
                    </div>
                  </div>
                )}

                {athlete.diagnosisAge && (
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Diagnosed at Age</h3>
                      <p>{athlete.diagnosisAge}</p>
                    </div>
                  </div>
                )}

                {athlete.achievements && athlete.achievements.length > 0 && (
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Key Achievements</h3>
                      <ul className="list-disc list-inside space-y-1 mt-1">
                        {athlete.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {athlete.socialLinks && Object.keys(athlete.socialLinks).length > 0 && (
                <div className="mt-6">
                  <h3 className="font-medium mb-2">Follow {athlete.name.split(" ")[0]}</h3>
                  <div className="flex gap-3">
                    {Object.entries(athlete.socialLinks).map(
                      ([platform, url]) =>
                        url !== "N/A" && (
                          <Button key={platform} variant="outline" size="sm" asChild>
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

          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{athlete.name}</h1>
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              {athlete.sport}
            </div>

            <div className="prose prose-lg max-w-none">
              {athlete.story.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {athlete.quote && (
              <div className="my-8 p-6 bg-muted rounded-lg relative">
                <Quote className="h-8 w-8 text-primary/20 absolute top-4 left-4" />
                <blockquote className="pl-8 italic text-lg">"{athlete.quote}"</blockquote>
              </div>
            )}

            {athlete.diabetesManagement && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Diabetes Management Approach</h2>
                <div className="prose prose-lg max-w-none">
                  {athlete.diabetesManagement.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {athlete.advice && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Advice for Fellow Diabetic Athletes</h2>
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
