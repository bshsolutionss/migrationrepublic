"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";
import { Plane } from "lucide-react";

export function HeroSection() {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowCTA(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute top-40 left-0 -ml-32 w-[400px] h-[400px] bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center gap-12 max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#012269] font-medium text-sm mb-6 shadow-sm">
          <Plane size={16} className="text-[#E40229]" />
          <span>Subclass 407</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#012269] leading-tight mb-8">
          Australia Training Visa (Subclass 407) —<br />
          <span className="text-[#E40229]">Eligibility, Cost & How to Apply 2026</span>
        </h1>
        
        <p className="text-lg text-gray-700 mb-6 max-w-3xl leading-relaxed">
          If you are a skilled professional looking to expand your expertise through structured workplace training in Australia, the Australia Training Visa — officially known as Subclass 407 — could be the right pathway for you. This visa is purpose-built to allow overseas nationals to participate in occupational training activities in Australia, either to improve their skills relevant to their current occupation or for professional development purposes.
        </p>

        <p className="text-lg text-gray-700 mb-6 max-w-3xl leading-relaxed">
          Unlike a work visa, the Training Visa is not designed for permanent employment. It is specifically meant for genuine training and development. Understanding the distinction is critical because the Department of Home Affairs assesses applications carefully to confirm the primary purpose is training — not filling a labour gap.
        </p>

        <p className="text-lg text-gray-700 mb-8 max-w-3xl leading-relaxed">
          In this guide, we break down everything you need to know about the Australia Training Visa in 2026 — from eligibility and streams to documents, costs, processing times, and common refusal reasons. Whether you are applying from Pakistan or any other country, this is the most comprehensive resource you will find.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="https://migrationrepublic.com.au/book-a-consultation/"
            variant="accent"
            className="group text-lg px-8 py-4 w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all"
          >
            Book a Consultation
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Button>
        </div>
      </div>

      {/* Floating CTA */}
      {showCTA && (
        <a
          href="https://wa.me/61435321219"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8 fill-current">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </a>
      )}
    </section>
  );
}
