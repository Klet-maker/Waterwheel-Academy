import Link from 'next/link';
import { Github, Twitter, Dribbble } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Waterwheel Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <div className="flex gap-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Dribbble">
                <Dribbble className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
