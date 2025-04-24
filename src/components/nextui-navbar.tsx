"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function NeoNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy-policy" },
  ];

  return (
    <Navbar
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white/10 backdrop-blur-lg border-b border-white/10 shadow-lg h-20 rounded-b-xl mx-auto mt-2"
      isBordered
    >
      <NavbarContent className="gap-4">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link
            href="/"
            className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          >
            Neo<span className="text-white">Convert</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent justify="center" className="hidden sm:flex gap-6">
        {links.map((link) => (
          <NavbarItem key={link.href} isActive={pathname === link.href}>
            <Link
              href={link.href}
              className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${
                pathname === link.href
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* GitHub CTA */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="https://github.com/krishprajapati15" target="_blank">
            <Button
              startContent={<FiGithub />}
              className="bg-gradient-to-tr from-purple-600 to-pink-500 text-white shadow-lg hover:scale-105 transition-all"
              radius="full"
              size="sm"
            >
              GitHub
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="mt-6 space-y-4 text-white bg-black/80 rounded-xl p-6">
        {links.map((link) => (
          <NavbarMenuItem key={link.href}>
            <Link
              href={link.href}
              className={`text-md font-medium ${
                pathname === link.href ? "text-pink-500" : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
