import { HelpCircle, ChevronDown } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      q: "What is the Australia Training Visa Subclass 407?",
      a: "The Australia Training Visa (Subclass 407) is a temporary visa issued by the Australian Government that allows overseas professionals to undertake structured workplace training with an approved Australian sponsor. It is designed for genuine training purposes — not general employment — and covers three streams including occupational training, skills enhancement, and government-supported professional development."
    },
    {
      q: "How much does the Australia Training Visa cost in 2026?",
      a: "The government application fee for the Subclass 407 Training Visa is AUD 430 for the primary applicant. Additional family members aged 18 and over are charged AUD 430 each, and dependants under 18 are charged AUD 110. Including health checks, police clearances, health insurance, and migration agent fees, total costs typically range from AUD 2,500 to AUD 6,000 or more."
    },
    {
      q: "How long can I stay in Australia on the Training Visa?",
      a: "The Subclass 407 Training Visa is granted for the period required to complete your approved training program, up to a maximum of two years. The exact duration is determined by the structured training plan submitted by your sponsor at the time of nomination."
    },
    {
      q: "Can I extend my Australia Training Visa?",
      a: "Yes, extensions are possible but are not automatic. If your training requires additional time beyond the original approval, your sponsor must lodge a new nomination and you must apply for a further Subclass 407 visa. Extensions are assessed against the same criteria as the original application. You cannot remain in Australia beyond your visa expiry date without a valid visa."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-[#012269]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#012269] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Got questions? We have laid out the quickest answers for the most common questions regarding the Training Visa (Subclass 407).
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 font-bold text-[#012269] text-xl outline-none hover:bg-blue-50/50 transition-colors">
                {faq.q}
                <ChevronDown className="w-6 h-6 text-[#E40229] transition-transform duration-300 group-open:-rotate-180 flex-shrink-0 ml-4" />
              </summary>
              <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-700 leading-relaxed text-lg border-t border-gray-100 bg-white">
                <p className="mt-4">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
