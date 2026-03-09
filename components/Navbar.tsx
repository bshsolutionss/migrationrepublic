"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Plane } from "lucide-react";
import { Button } from "./Button";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "eligibility",
        "training-types",
        "cost-fees",
        "how-to-apply",
        "faq",
      ];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Eligibility", href: "#eligibility", id: "eligibility" },
    { name: "Training Types", href: "#training-types", id: "training-types" },
    { name: "Cost & Fees", href: "#cost-fees", id: "cost-fees" },
    { name: "How to Apply", href: "#how-to-apply", id: "how-to-apply" },
    { name: "FAQ", href: "#faq", id: "faq" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.jpg"
              alt="Migration Republic MARA Registered Migration Agents"
              width={80}
              height={80}
              className="border-2 rounded-full"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${
                    activeSection === link.id
                      ? "text-[#E40229] font-bold"
                      : "text-gray-600 font-medium"
                  } hover:text-[#E40229] transition-colors text-sm lg:text-base`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="tel:+61435321219"
                className="text-[#012269] font-bold hover:text-[#E40229] transition-colors"
              >
                +61 435 321 219
              </a>
              <Button
                href="https://migrationrepublic.com.au/book-a-consultation/"
                variant="accent"
                className="px-5 py-2"
              >
                Book a Consultation
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#012269] hover:text-[#E40229] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 absolute w-full pb-6 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`${
                  activeSection === link.id
                    ? "text-[#E40229] bg-red-50"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#E40229]"
                } block px-3 py-3 text-base font-medium rounded-md transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3 flex flex-col gap-4">
              <a
                href="tel:+61435321219"
                className="block text-center text-[#012269] font-bold text-lg"
              >
                +61 435 321 219
              </a>
              <Button
                href="https://migrationrepublic.com.au/book-a-consultation/"
                variant="accent"
                className="w-full"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
