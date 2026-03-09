export function TrainingTypesSection() {
  const streams = [
    {
      title: "Stream 1 — Occupational Training for Registration or Licensing",
      content:
        "This stream is for individuals who want to improve skills in their current occupation or area of work. The training must be directly relevant to the applicant's existing role or professional background. It must also be unavailable, or of a higher standard, in the applicant's home country.",
      example:
        "For example, if a mechanical engineer from Pakistan wishes to undergo advanced workplace training at an Australian manufacturing facility that is not available in Pakistan at the same standard, they may qualify under Stream 1.",
    },
    {
      title: "Stream 2 — Structured Training to Enhance Skills",
      content:
        "This stream is for individuals whose training is specifically required or requested by an Australian government agency — federal, state, or territory. The agency itself, or an organisation acting on its behalf, must be the approved sponsor.",
      example:
        "A common example includes training related to technical skills or infrastructure projects endorsed by a government body. The agency involvement gives this stream a more regulated and formal character.",
    },
    {
      title: "Stream 3 — Government Supported & Professional Development",
      content:
        "Stream 3 covers structured professional development programs, including seminars, workshops, industry meetings, or short training courses. The duration under this stream is shorter and the training is less hands-on compared to Streams 1 and 2.",
      example:
        "This stream is popular among mid-to-senior level professionals attending industry conferences, executive leadership programs, or structured development courses hosted by multinational organisations in Australia.",
    },
  ];

  return (
    <section id="training-types" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012269] mb-6">
            Australia Training Visa Streams — Which One Applies to You?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Subclass 407 visa is divided into three streams. Each stream caters to a different training objective. Identifying the right stream before applying is essential because each stream has its own eligibility criteria, sponsor obligations, and supporting documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {streams.map((stream, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              
              <h3 className="text-xl font-bold text-[#012269] mb-4 z-10">
                {stream.title}
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed flex-grow z-10">
                {stream.content}
              </p>
              
              <div className="bg-blue-50/80 p-5 rounded-2xl border border-blue-100 mt-auto z-10">
                <p className="text-sm text-[#012269] font-medium leading-relaxed italic">
                  {stream.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
