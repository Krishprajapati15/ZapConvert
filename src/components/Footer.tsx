import Link from "next/link";
import { FaInstagram, FaGithub, FaHeart } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-r from-[#e0f2ff] to-[#f3e8ff] text-gray-800 border-t shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-4 md:px-8 gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium">
            Made with{" "}
            <FaHeart className="inline-block text-red-500 animate-pulse mx-1" />{" "}
            by{" "}
            <Link
              href="https://www.krishprajapati.tech/"
              target="_blank"
              className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent font-semibold hover:underline"
            >
              Krish Prajapati
            </Link>
          </p>
        </div>

        <div className="flex gap-6">
          <Link
            href="https://github.com/Krishprajapati15"
            target="_blank"
            className="p-3 rounded-full bg-white shadow-md hover:shadow-xl hover:scale-110 transition-all group"
          >
            <FaGithub className="h-6 w-6 text-gray-700 group-hover:text-black" />
          </Link>
          <Link
            href="https://www.instagram.com/krish._prajapati"
            target="_blank"
            className="p-3 rounded-full bg-white shadow-md hover:shadow-xl hover:scale-110 transition-all group"
          >
            <FaInstagram className="h-6 w-6 text-pink-500 group-hover:text-pink-600" />
          </Link>
        </div>
      </div>

      <div className="text-center text-xs py-2 bg-white/80 text-gray-600 border-t mt-2">
        © {new Date().getFullYear()} Crafted by Krish Prajapati ✨
      </div>
    </footer>
  );
}
