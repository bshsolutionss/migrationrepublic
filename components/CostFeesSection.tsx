import { Info, Check } from "lucide-react";
import { Button } from "./Button";

export function CostFeesSection() {
  return (
    <section id="cost-fees" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#012269] mb-12 text-center">
          Australia Training Visa Cost and Fees 2026 (Subclass 407)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-bold text-[#012269] mb-6 border-b border-gray-100 pb-4">Government Fee</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-5xl font-extrabold text-[#E40229]">AUD 430</span>
              <span className="text-gray-500 font-medium mb-1">for primary applicant</span>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              The visa application charge for the Subclass 407 as of 2026 is AUD 430 for the primary applicant. Additional secondary applicants (such as a spouse or dependent children) each attract a separate fee.
            </p>
          </div>
          
          <div className="bg-[#012269] p-8 rounded-3xl shadow-xl text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-bl-full opacity-20"></div>
            <p className="text-blue-50 text-xl font-medium leading-relaxed z-10">
              This is the government fee only. Total costs will be significantly higher when factoring in expenses such as health examination fees, police certificate charges, English language test fees (if not already taken), migration agent professional fees, and health insurance for the duration of stay.
            </p>
          </div>
        </div>

        <div className="bg-red-50 p-8 rounded-2xl border border-red-100 shadow-sm text-center">
          <p className="text-gray-800 text-xl font-bold">
            In total, applicants should budget between <span className="text-[#E40229]">AUD 2,500 to AUD 6,000 or more</span> depending on the complexity of the case and the number of family members included.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Button href="https://migrationrepublic.com.au/book-a-consultation/" variant="accent" className="px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all">
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
