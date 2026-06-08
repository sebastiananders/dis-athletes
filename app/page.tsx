import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeaturedAthletes } from "@/components/featured-athletes"
import { AthleteSpotlight } from "@/components/athlete-spotlight"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20 z-10" />
          <div className="relative h-[85vh] overflow-hidden">
            <Image
              src="/hero-high-jump.jpg"
              alt="Female athlete performing high jump against blue sky"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container px-4 md:px-6">
              <div className="max-w-2xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Type 1 Diabetic Athletes
                </div>
                <h1 className="text-5xl font-bold text-white tracking-tight sm:text-6xl leading-[1.05]">
                  Breaking<br className="hidden sm:block" /> Every Barrier
                </h1>
                <p className="text-lg text-white/80 max-w-lg leading-relaxed">
                  Inspiring stories of Type 1 diabetic athletes who prove that diabetes doesn't define your limits.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                    <Link href="/athletes">
                      Explore Athletes <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:border-white/50"
                  >
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="bg-foreground text-background py-12">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-1">
                <p className="text-4xl font-bold tracking-tight">20+</p>
                <p className="text-sm font-medium text-background/60">Athletes Profiled</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-bold tracking-tight">10+</p>
                <p className="text-sm font-medium text-background/60">Sports &amp; Disciplines</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-bold tracking-tight">One</p>
                <p className="text-sm font-medium text-background/60">Message — Anything Is Possible</p>
              </div>
            </div>
          </div>
        </section>

        {/* Athlete Spotlight */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-3 text-center mb-10">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest">In the News</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Athlete Spotlight</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Celebrating the latest achievements of our diabetic athlete community.
              </p>
            </div>
            <AthleteSpotlight />
          </div>
        </section>

        {/* Featured Athletes Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-primary uppercase tracking-widest">Role Models</p>
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight">Featured Athletes</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-lg">
                  Meet these incredible Type 1 diabetic athletes who are changing the game and inspiring others.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <FeaturedAthletes />
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/athletes">
                  View All Athletes <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-primary uppercase tracking-widest">Community</p>
                <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">Inspiration in Action</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-lg">
                  Read what our community says about the impact of these inspiring stories.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex flex-col p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <svg className="h-7 w-7 text-primary/25 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="text-sm leading-relaxed mb-6 text-foreground/90 flex-1">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-foreground text-background overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
          <div className="relative container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-sm font-semibold text-primary uppercase tracking-widest">Get Involved</p>
                <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">Join Our Community</h2>
                <p className="text-lg text-background/70 leading-relaxed">
                  Connect with other Type 1 diabetic athletes, share your story, and be part of our growing community.
                </p>
                <Button variant="secondary" size="lg" asChild className="bg-background text-foreground hover:bg-background/90">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image src="/sunset-track-athletes.png" alt="Athletes at sunset" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const testimonials = [
  {
    quote: "Seeing these athletes excel despite having Type 1 diabetes gave me the confidence to pursue my own athletic goals.",
    name: "Sarah Johnson",
    title: "Marathon Runner",
  },
  {
    quote: "As a parent of a child with Type 1 diabetes, these stories have been incredibly inspiring and reassuring.",
    name: "Michael Chen",
    title: "Parent",
  },
  {
    quote: "This platform has connected me with other diabetic athletes who understand the unique challenges we face.",
    name: "David Rodriguez",
    title: "College Basketball Player",
  },
]
