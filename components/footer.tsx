import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <Link href="/" className="font-semibold">
            Diabetic Athletics
          </Link>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Diabetic Athletics. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
