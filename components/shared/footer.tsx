import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background z-10 relative border-t border-border/50 p-4 lg:px-16">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="font-heading font-bold text-2xl">
                <span className="gradient-text">Oblique</span>
                <span>path</span>
              </div>
            </Link>
            <p className="mt-4 text-foreground/70">
              Modern AI automation solutions for local businesses.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ai-automation"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  AI Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/custom-web-solutions"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Custom Web Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/process-optimization"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Process Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/tech-support"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Tech Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Obliquepath. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
