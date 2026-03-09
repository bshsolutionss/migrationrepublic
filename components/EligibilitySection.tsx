import { CheckCircle2, AlertTriangle } from "lucide-react";

export function EligibilitySection() {
  const requirements = [
    "You must be outside Australia at the time of application (or inside, with no condition preventing this)",
    "You must have a genuine need for the training and the training must be relevant to your current occupation or field",
    "The training must not be available in your home country at the same standard or level",
    "You must have functional English language proficiency — demonstrated through IELTS, TOEFL, PTE, or equivalent",
    "You must meet health and character requirements, including police clearance certificates",
    "You must have adequate health insurance for your stay in Australia",
    "You must be genuinely intending to stay temporarily — not seeking a back-door to permanent residency",
  ];

  return (
    <section id="eligibility" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012269] mb-6">
            Australia Training Visa Eligibility Requirements 2026
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Meeting the eligibility criteria is the most important part of any Training Visa application. As confirmed by the <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/training-407" target="_blank" rel="noopener noreferrer" className="text-[#E40229] underline hover:text-[#012269] transition-colors">Department of Home Affairs</a>, the Subclass 407 is assessed under the genuine temporary entrant framework, meaning you must demonstrate that you intend to return home after your training is complete.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#012269] p-6">
            <h3 className="text-2xl font-bold text-white text-center">Applicant Eligibility Requirements</h3>
          </div>
          
          <div className="p-8 md:p-10">
            <ul className="space-y-6">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-lg text-gray-800 font-medium">
                    {req}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-red-50 p-8 rounded-3xl border border-red-100 relative">
          <div className="absolute -top-5 -right-5 md:-top-6 md:-right-6 bg-white p-3 rounded-full shadow-lg border border-gray-100 transform rotate-12">
            <AlertTriangle className="text-[#E40229] w-8 h-8" />
          </div>
          <p className="text-lg text-gray-800 leading-relaxed font-medium">
            The Genuine Temporary Entrant (GTE) requirement deserves special attention. The visa officer will assess your personal circumstances, including your ties to your home country, your employment situation, your immigration history, and whether your stated training objectives are credible. Weak GTE arguments are one of the most common reasons for refusal. Before proceeding, if you are unsure whether you meet the GTE requirement, <a href="https://migrationrepublic.com.au/contact/" className="text-[#012269] underline hover:text-[#E40229] font-bold transition-colors">speak with our registered migration agents</a> before lodging your application.
          </p>
        </div>
      </div>
    </section>
  );
}
