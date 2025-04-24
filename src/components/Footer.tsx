import Link from "next/link";
import { FaInstagram, FaGithub, FaHeart } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with{" "}
            <FaHeart className="mx-1 inline-block h-4 w-4 animate-pulse text-red-500" />{" "}
            by{" "}
            <Link
              href="https://www.krishprajapati.tech/"
              target="_blank"
              className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
            >
              Krish Prajapati
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center space-x-6">
          <Link
            href="https://github.com/Krishprajapati15"
            target="_blank"
            className="rounded-full p-2 transition-all hover:bg-accent hover:scale-110"
          >
            <FaGithub className="h-5 w-5 text-foreground/60 hover:text-foreground" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.instagram.com/krish._prajapati"
            target="_blank"
            className="rounded-full p-2 transition-all hover:bg-accent hover:scale-110"
          >
            <FaInstagram className="h-5 w-5 text-foreground/60 hover:text-pink-500" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
