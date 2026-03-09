import { UserCheck, Building } from "lucide-react";

export function DocumentsChecklistSection() {
  const applicantDocs = [
    "Valid passport (with at least 6 months validity beyond intended stay)",
    "Completed visa application form via ImmiAccount",
    "Passport-size photographs meeting Australian visa specifications",
    "English language test results (IELTS, PTE, TOEFL, or equivalent)",
    "Academic and professional qualification certificates",
    "Current employment letter and detailed CV or resume",
    "Statement of purpose explaining the training objective and GTE",
    "Training program plan (provided or co-written with the sponsor)",
    "Health examination results from a panel physician",
    "Police clearance certificates from all countries lived in for 12+ months",
    "Evidence of health insurance or agreement to obtain it",
    "Financial evidence showing you can support yourself during the training",
  ];

  const sponsorDocs = [
    "Sponsorship approval letter from the Department of Home Affairs",
    "Nomination confirmation for the specific applicant",
    "Detailed structured training plan outlining activities, timelines, and outcomes",
    "Evidence that the training is not available at the same standard in the applicant's home country",
    "Proof the sponsor is a legitimately operating business (ABN, ASIC records, financials)",
    "Confirmation of market-rate remuneration for the training period",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012269] mb-6">
            Australia Training Visa Documents Required — Complete Checklist
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Submitting a complete, well-organised application is one of the most important steps in the process. All applications must be submitted through <a href="https://online.immi.homeaffairs.gov.au/lusc/login" target="_blank" rel="noopener noreferrer" className="text-[#E40229] underline hover:text-[#012269] transition-colors">ImmiAccount</a>, the official Australian Government portal. Missing documents or poorly explained circumstances are a common cause of delays and refusals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Applicant Documents */}
          <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <UserCheck className="w-8 h-8 text-[#E40229]" />
              </div>
              <h3 className="text-2xl font-bold text-[#012269]">
                Documents Required From the Applicant
              </h3>
            </div>
            <ul className="space-y-4">
              {applicantDocs.map((doc, index) => (
                <li key={index} className="flex gap-4">
                  <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center border border-blue-200 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#012269]"></div>
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sponsor Documents */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10"></div>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-50 p-3 rounded-xl shadow-sm border border-red-100">
                <Building className="w-8 h-8 text-[#E40229]" />
              </div>
              <h3 className="text-2xl font-bold text-[#012269]">
                Documents Required From the Sponsor
              </h3>
            </div>
            <ul className="space-y-4">
              {sponsorDocs.map((doc, index) => (
                <li key={index} className="flex gap-4">
                  <div className="bg-red-50 w-6 h-6 rounded-full flex items-center justify-center border border-red-200 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#E40229]"></div>
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
