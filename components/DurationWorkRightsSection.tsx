export function DurationWorkRightsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#012269] mb-12 text-center">
          Training Visa Australia — Duration and Work Rights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 shadow-sm">
            <h3 className="text-2xl font-bold text-[#012269] mb-4">Duration of Stay</h3>
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              The Subclass 407 visa is granted for the period necessary to complete the approved training, which is generally up to two years. The exact duration is determined by the training plan submitted at the time of nomination.
            </p>
          </div>
          
          <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100 shadow-sm">
            <h3 className="text-2xl font-bold text-[#012269] mb-4">Work Rights</h3>
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              As a Training Visa holder, your work rights are limited to the approved training activities outlined in your nomination. You are not permitted to take up secondary employment outside your training program, and you cannot use this visa to engage in general work activities unrelated to your training.
            </p>
          </div>

          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              There is no direct pathway from the Subclass 407 to permanent residency. However, the skills, credentials, and experience gained during training may support future applications through <a href="https://migrationrepublic.com.au/migration/" target="_blank" rel="noopener noreferrer" className="text-[#E40229] underline hover:text-[#012269] font-bold transition-colors">skilled migration pathways</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
