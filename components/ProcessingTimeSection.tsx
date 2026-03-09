import { CalendarClock, AlertCircle } from "lucide-react";

export function ProcessingTimeSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#012269] mb-12 text-center">
          Australia Training Visa Processing Time 2026
        </h2>
        
        <div className="bg-blue-50/50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-sm relative overflow-hidden">
          {/* Decorative Icon Background */}
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <CalendarClock className="w-64 h-64 text-[#012269]" />
          </div>

          <div className="relative z-10 space-y-6">
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              Processing times for the Subclass 407 Training Visa range from 6 to 13 months. Around 50% of applications are processed within 6 months, while 90% receive a decision within 13 months. Complex cases involving additional health checks or police clearances from multiple countries may take longer.
            </p>

            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              Stream 2 applications, which involve government agencies, are sometimes processed more quickly due to the formal backing behind them. Stream 1 applications with complex training plans or applicants from countries with longer police clearance times may take longer.
            </p>

            <div className="mt-8 bg-white p-6 rounded-2xl border-l-4 border-[#E40229] shadow-sm flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-[#E40229] flex-shrink-0" />
              <p className="text-[#012269] font-bold text-lg italic">
                It is strongly advisable to apply well in advance of your intended start date. Do not book flights or make accommodation commitments until the visa is granted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
