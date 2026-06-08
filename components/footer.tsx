import Link from "next/link"
import { Activity } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" strokeWidth={2.5} />
              <span className="font-bold tracking-tight">Diabetic Athletics</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Inspiring stories of athletes with Type 1 diabetes proving that anything is possible.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">Quick Links</p>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link href="/athletes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Athletes</Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            </nav>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">Our Mission</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Created by a parent of a child with T1D to inspire young athletes and show that diabetes doesn't define your limits.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Diabetic Athletics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
