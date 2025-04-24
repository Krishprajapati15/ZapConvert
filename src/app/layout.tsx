import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NextUiProvider from "@/providers/NextUiProvider";
import NextNavbar from "@/components/nextui-navbar";
import { SiteFooter } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZapConvert - Free Unlimited File Converter",
  description: `Transform your files effortlessly with ZapConvert – the ultimate online tool for unlimited and free multimedia conversion. From images to audio to videos, we make file conversion seamless. Start converting today!`,
  creator: "Krish Prajapati",
  keywords:
    "file converter, image converter, video converter, audio converter, free file conversion, unlimited file converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUiProvider>
          <NextNavbar />
          <Toaster />
          <div className="pt-24 min-h-screen lg:pt-24 2xl:pt-32 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
            {children}
          </div>
          <SiteFooter />
        </NextUiProvider>
      </body>
    </html>
  );
}
