import { XCircle, ArrowRightCircle } from "lucide-react";

export function CommonRefusalsSection() {
  const reasons = [
    "Weak or unconvincing Genuine Temporary Entrant statement",
    "Training plan that does not demonstrate genuine structured outcomes",
    "Evidence that the training is available at the same level in the applicant's home country",
    "Inadequate English language proficiency evidence",
    "Incomplete documentation or missing sponsor nomination details",
    "Character concerns arising from police clearances",
    "Health requirements not met or medical evidence not submitted correctly",
    "Previous visa refusals or overstays not properly disclosed",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012269] mb-6">
            Common Reasons for Training Visa Refusal
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Understanding why applications get refused is as important as understanding what makes them succeed. The most frequently cited refusal reasons for the Subclass 407 include:
          </p>
        </div>

        <div className="bg-red-50/50 rounded-3xl p-8 border border-red-100 shadow-sm mb-12">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <li key={index} className="flex gap-4">
                <XCircle className="w-6 h-6 text-[#E40229] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium text-lg">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#012269] p-8 md:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8 justify-between">
          <p className="text-white text-xl font-medium leading-relaxed max-w-2xl">
            Each of these issues is manageable with proper preparation and professional guidance. A migration agent can review your complete application before lodgement to identify and address any potential red flags.
          </p>
          <ArrowRightCircle className="w-16 h-16 text-[#E40229] flex-shrink-0 opacity-80" />
        </div>
      </div>
    </section>
  );
}
