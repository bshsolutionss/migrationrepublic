import { Building2, FileText, Briefcase, Plane, AlertTriangle, ShieldCheck } from "lucide-react";

export function SponsorshipRequirementsSection() {
  const sponsors = [
    "An Australian business that is lawfully operating and in good standing",
    "An Australian government agency (federal, state, or territory)",
    "A foreign government body (in limited circumstances for Stream 2)",
    "An organisation that is not a labour-hire company using the trainee to fill a labour shortage",
  ];

  const obligations = [
    "Ensuring the training program is genuine and structured with defined outcomes",
    "Paying the visa holder at least the market salary rate for activities undertaken",
    "Not using the trainee to replace an Australian worker or to fill a regular position",
    "Covering return travel costs if required",
    "Maintaining accurate records and cooperating with any government audit or inspection",
    "Notifying the Department of Home Affairs of any changes to the trainee's situation",
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012269] mb-6">
            Australia Training Visa Sponsorship Requirements
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Unlike many other Australian visas where you apply independently, the Training Visa requires a sponsoring organisation. This means before you can lodge your own visa application, your sponsor must be approved by the Department of Home Affairs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Who Can Be a Sponsor */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-50 p-3 rounded-2xl text-[#012269]">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#012269]">Who Can Be a Sponsor?</h3>
            </div>
            <ul className="space-y-6">
              {sponsors.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-[#E40229] flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Obligations */}
          <div className="bg-[#012269] rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <ShieldCheck className="w-64 h-64 -mt-16 -mr-16" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-white/10 p-3 rounded-2xl text-white backdrop-blur-sm">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">What Are the Sponsor's Obligations?</h3>
              </div>
              <p className="text-blue-100 mb-8 font-medium">
                Once approved, the sponsor carries significant legal and administrative obligations. These include:
              </p>
              <ul className="space-y-6">
                {obligations.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 mt-2.5 rounded-full bg-blue-300 flex-shrink-0" />
                    <span className="text-blue-50 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-red-50 p-6 md:p-8 rounded-2xl border border-red-100 flex items-start md:items-center gap-6">
          <AlertTriangle className="text-[#E40229] w-10 h-10 flex-shrink-0 hidden md:block" />
          <p className="text-gray-800 text-lg font-medium leading-relaxed">
            Sponsors who fail to meet their obligations risk being sanctioned, losing their approval status, and potentially being barred from sponsoring in the future. The Australian Government takes sponsor compliance very seriously. If your employer prefers a longer-term arrangement, explore <a href="https://migrationrepublic.com.au/subclass-482-visa-australia/" target="_blank" rel="noopener noreferrer" className="text-[#E40229] underline hover:text-[#012269] font-bold transition-colors">employer sponsored visa options</a> such as the Subclass 482.
          </p>
        </div>
      </div>
    </section>
  );
}
