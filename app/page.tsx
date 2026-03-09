import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhatIsSection } from "@/components/WhatIsSection";
import { QuickFactsSection } from "@/components/QuickFactsSection";
import { TrainingTypesSection } from "@/components/TrainingTypesSection";
import { EligibilitySection } from "@/components/EligibilitySection";
import { SponsorshipRequirementsSection } from "@/components/SponsorshipRequirementsSection";
import { DocumentsChecklistSection } from "@/components/DocumentsChecklistSection";
import { HowToApplySection } from "@/components/HowToApplySection";
import { ProcessingTimeSection } from "@/components/ProcessingTimeSection";
import { CostFeesSection } from "@/components/CostFeesSection";
import { DurationWorkRightsSection } from "@/components/DurationWorkRightsSection";
import { PakistaniApplicantsSection } from "@/components/PakistaniApplicantsSection";
import { CommonRefusalsSection } from "@/components/CommonRefusalsSection";
import { ExtensionSection } from "@/components/ExtensionSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-[#E40229]/20 selection:text-[#012269]">
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <QuickFactsSection />
        <TrainingTypesSection />
        <EligibilitySection />
        <SponsorshipRequirementsSection />
        <DocumentsChecklistSection />
        <HowToApplySection />
        <ProcessingTimeSection />
        <CostFeesSection />
        <DurationWorkRightsSection />
        <PakistaniApplicantsSection />
        <CommonRefusalsSection />
        <ExtensionSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
