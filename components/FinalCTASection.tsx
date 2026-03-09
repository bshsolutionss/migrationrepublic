import { Button } from "./Button";
import { ShieldCheck, MessageSquare, Briefcase } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#012269] to-[#011440] overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 translate-x-1/3 -translate-y-1/3 text-white"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E40229] rounded-full mix-blend-screen filter blur-3xl opacity-10 -translate-x-1/3 translate-y-1/3 text-white"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
          Ready to Apply for the Australia Training Visa?
        </h2>

        <div className="text-blue-50 space-y-6 text-lg leading-relaxed mb-12">
          <p className="font-medium">
            Navigating the Training Visa application process alone can be overwhelming — and a single mistake can cost you months of delay or an outright refusal. That is where Migration Republic comes in.
          </p>

          <p>
            At MigrationRepublic.com.au, our team of registered Australian migration professionals specialises in Training Visa (Subclass 407) applications. We work with both applicants and sponsors to prepare complete, compelling applications — from structuring your training plan and drafting your GTE statement to coordinating health checks and lodging everything correctly through ImmiAccount.
          </p>

          <p>
            Whether you are a Pakistani professional looking to upgrade your skills in Australia, an employer wanting to bring a specialist trainee from overseas, or a business seeking sponsorship approval — we handle it all. We know what the Department of Home Affairs looks for and we make sure your application reflects that.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl mb-12">
          <p className="text-3xl font-bold text-white mb-8">
            Do not leave your visa application to chance.
          </p>

          <p className="text-xl text-blue-100 mb-10 leading-relaxed font-medium">
            Visit <a href="https://migrationrepublic.com.au" className="text-white underline hover:text-blue-200 transition-colors">www.migrationrepublic.com.au</a> today for a confidential consultation and let us guide you every step of the way toward your Australian training opportunity.
          </p>

          <div className="flex flex-col items-center gap-6 justify-center">
            <Button
              href="https://migrationrepublic.com.au/book-a-consultation/"
              variant="accent"
              className="group text-lg px-10 py-5 w-full sm:w-auto shadow-2xl hover:shadow-[#E40229]/50 transition-all font-bold"
            >
              Book a Consultation Now
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Button>
            <p className="text-white text-lg">
              <a href="https://migrationrepublic.com.au/book-a-consultation/" target="_blank" rel="noopener noreferrer" className="text-[#E40229] font-bold hover:underline transition-all">Book a free consultation</a> today, or <a href="https://migrationrepublic.com.au/blog/" target="_blank" rel="noopener noreferrer" className="text-[#E40229] font-bold hover:underline transition-all">read our migration blog</a> for more Australian visa guides.
            </p>
          </div>
        </div>

        <p className="text-xs text-blue-200/50 mt-16 max-w-3xl mx-auto italic leading-relaxed">
          Disclaimer: Visa fees and processing times listed in this guide are indicative as of 2026 and are subject to change by the Department of Home Affairs. Always verify current figures at immi.homeaffairs.gov.au before lodging your application.
        </p>
      </div>
    </section>
  );
}
