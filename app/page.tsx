import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeaturedAthletes } from "@/components/featured-athletes"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <div className="relative h-[70vh] overflow-hidden">
            <Image
              src="/hero-high-jump.jpg"
              alt="Female athlete performing high jump against blue sky"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container px-4 md:px-6">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-4xl font-bold text-white tracking-normal sm:text-4xl">
                  Diabetic Athletes Breaking Barriers
                </h1>
                <p className="text-xl text-white/90 md:text-xl">
                  Inspiring stories of Type 1 diabetic athletes who prove that diabetes doesn't define your limits.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/athletes">
                      Explore Athletes <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="bg-black/50 text-white border-white hover:bg-black/70"
                  >
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Athletes Section */}
        <section className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight">Featured Athletes</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
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
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">Inspiration in Action</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Read what our community says about the impact of these inspiring stories.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex flex-col p-6 bg-muted rounded-lg">
                  <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                  <div className="mt-auto flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">Join Our Community</h2>
                <p className="text-xl">
                  Connect with other Type 1 diabetic athletes, share your story, and be part of our growing community.
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image src="/diverse-athletes-huddle.png" alt="Athletes community" fill className="object-cover" />
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
    quote:
      "Seeing these athletes excel despite having Type 1 diabetes gave me the confidence to pursue my own athletic goals.",
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
