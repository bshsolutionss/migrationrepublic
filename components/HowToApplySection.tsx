import { ArrowRight, Building2, UserCircle2, Stethoscope, CheckCircle, Scale, FileText } from "lucide-react";

export function HowToApplySection() {
  const steps = [
    {
      title: "Step 1 — Sponsor Applies for Approval",
      desc: "The Australian organisation wishing to host a trainee must first apply to the Department of Home Affairs to become an approved sponsor. This is done through ImmiAccount. The application includes business details, financial records, and details of the intended training program.",
      icon: <Building2 className="w-8 h-8 text-white" />,
      color: "from-blue-600 to-[#012269]",
    },
    {
      title: "Step 2 — Sponsor Lodges a Nomination",
      desc: "Once approved, the sponsor nominates the specific individual they wish to train. The nomination must include the full training plan, evidence that training is not available in the nominee's home country, and confirmation of the remuneration package.",
      icon: <FileText className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-blue-700",
      useIconFromLucide: "FileText",
    },
    {
      title: "Step 3 — Applicant Lodges the Visa Application",
      desc: "After receiving the nomination, the applicant can submit their visa application online through ImmiAccount. All supporting documents must be attached at this stage. Incomplete applications significantly delay processing times.",
      icon: <UserCircle2 className="w-8 h-8 text-white" />,
      color: "from-[#E40229] to-red-700",
    },
    {
      title: "Step 4 — Health and Character Checks",
      desc: "The Department of Home Affairs will request a health examination through a panel physician and may request additional police clearances. These checks can be requested at any point during assessment.",
      icon: <Stethoscope className="w-8 h-8 text-white" />,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Step 5 — Decision",
      desc: "A visa officer will assess the complete application. They may request additional information (a Section 56 request) if something requires clarification. Once satisfied, they will grant or refuse the visa. Grant letters are sent to the email address on file.",
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      color: "from-green-500 to-green-700",
    },
  ];

  return (
    <section id="how-to-apply" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012269] mb-6">
            How to Apply for the Australia Training Visa — Step by Step
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The application process for the Subclass 407 involves both the sponsor and the applicant completing separate but linked steps. Here is a clear breakdown of the full process:
          </p>
        </div>

        <div className="relative">
          {/* Vertical line connecting steps on larger screens */}
          <div className="hidden md:block absolute left-12 top-10 bottom-10 w-1 bg-gradient-to-b from-[#012269] via-[#E40229] to-green-600 rounded-full opacity-20"></div>

          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-start group"
              >
                {/* Step Icon */}
                <div
                  className={`w-24 h-24 rounded-3xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${step.color} shadow-xl transform transition-transform group-hover:scale-105 group-hover:-rotate-3`}
                >
                  {index === 1 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-white"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                  ) : (
                    step.icon
                  )}
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md w-full hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-bold text-[#012269] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
