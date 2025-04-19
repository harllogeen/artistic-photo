import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-purple-600 italic">Artistic</h3>
            <p className="text-sm text-muted-foreground">
              Capturing moments that tell your story. Professional photography services for all occasions.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-purple-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-purple-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-purple-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-purple-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/portrait" className="text-sm text-muted-foreground hover:text-purple-600">
                  Portrait Photography
                </Link>
              </li>
              <li>
                <Link href="/services/wedding" className="text-sm text-muted-foreground hover:text-purple-600">
                  Wedding Photography
                </Link>
              </li>
              <li>
                <Link href="/services/event" className="text-sm text-muted-foreground hover:text-purple-600">
                  Event Photography
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="text-sm text-muted-foreground hover:text-purple-600">
                  Commercial Photography
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-purple-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-purple-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-purple-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">Email: oluwaseyialugbin@gmail.com</p>
            <p className="text-sm text-muted-foreground">Phone: +234 (907) 807-3945</p>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Artistic Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
