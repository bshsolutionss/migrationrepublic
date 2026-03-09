import { CheckCircle2, Clock, DollarSign, Globe2, Briefcase, FileCheck, Users, Search } from "lucide-react";

export function QuickFactsSection() {
  const facts = [
    { label: "Visa Name", value: "Training Visa", icon: <Briefcase className="w-5 h-5" /> },
    { label: "Subclass", value: "407", icon: <FileCheck className="w-5 h-5" /> },
    { label: "Visa Type", value: "Temporary", icon: <Clock className="w-5 h-5" /> },
    { label: "Maximum Stay", value: "Up to 2 years (activity dependent)", icon: <Globe2 className="w-5 h-5" /> },
    { label: "Application Fee (2026)", value: "AUD 430 (primary applicant)", icon: <DollarSign className="w-5 h-5" /> },
    { label: "Processing Time", value: "6 to 13 months (50% within 6 months)", icon: <Search className="w-5 h-5" /> },
    { label: "Sponsorship Required", value: "Yes — approved Australian sponsor", icon: <CheckCircle2 className="w-5 h-5" /> },
    { label: "Work Rights", value: "Limited to approved training activities", icon: <Briefcase className="w-5 h-5" /> },
    { label: "English Requirement", value: "Functional English (minimum)", icon: <Globe2 className="w-5 h-5" /> },
    { label: "Family Inclusion", value: "Yes — secondary applicants permitted", icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h3 className="text-3xl md:text-4xl font-bold text-[#012269] mb-12 text-center">
          Australia Training Visa — Quick Facts at a Glance
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {facts.map((fact, index) => (
            <div key={index} className="flex items-start p-6 bg-blue-50/50 rounded-2xl border border-blue-100 hover:shadow-md transition-all">
              <div className="flex-shrink-0 mr-4 text-[#E40229] bg-white p-2 rounded-xl shadow-sm">
                {fact.icon}
              </div>
              <div>
                <p className="font-bold text-[#012269] text-sm mb-1 uppercase tracking-wider">{fact.label}</p>
                <p className="text-gray-800 font-medium text-lg">{fact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
