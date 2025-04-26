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

export default function CleanContrastNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy-policy" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-gradient-to-r from-[#e0f2ff] to-[#f3e8ff] text-gray-800 shadow-md border-b h-20"
      isBordered
    >
      <NavbarContent className="gap-4">
        <NavbarMenuToggle className="sm:hidden text-gray-700" />
        <NavbarBrand>
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            ZapConvert
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center" className="hidden sm:flex gap-6">
        {links.map((link) => (
          <NavbarItem key={link.href}>
            <Link
              href={link.href}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                pathname === link.href
                  ? "bg-indigo-400/80 text-indigo-700 shadow-sm"
                  : "hover:bg-indigo-200 text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="https://github.com/krishprajapati15" target="_blank">
            <Button
              startContent={<FiGithub />}
              className="bg-gradient-to-tr rounded-lg from-indigo-500 to-purple-500 text-white hover:shadow-xl transition-all"
              size="sm"
            >
              GitHub
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-white/90 text-gray-800 mt-4 rounded-xl px-6 py-4 shadow-lg">
        {links.map((link) => (
          <NavbarMenuItem key={link.href}>
            <Link
              href={link.href}
              className={`text-md font-medium ${
                pathname === link.href
                  ? "text-indigo-600"
                  : "hover:text-purple-600"
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
