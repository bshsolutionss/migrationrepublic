import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Australia Training Visa (Subclass 407) — Eligibility, Cost & How to Apply 2026",
  description: "Apply for Australia Training Visa Subclass 407 with MARA registered agents. Check eligibility, fees from AUD $430 & step-by-step process. Free consultation.",
  keywords: "australia training visa, subclass 407, training visa australia, 407 visa eligibility, training visa cost 2026",
  alternates: {
    canonical: "https://australiatrainingvisa.com.au/",
  },
  openGraph: {
    title: "Australia Training Visa (Subclass 407) | Migration Republic",
    description: "Expert help with your Subclass 407 Training Visa application. Free consultation available.",
    url: "https://australiatrainingvisa.com.au/",
    siteName: "Australia Training Visa",
    locale: "en_AU",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon_io/site.webmanifest',
};

const schemaLegal = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Migration Republic",
  "description": "MARA registered migration agents specialising in Australia Training Visa Subclass 407",
  "url": "https://australiatrainingvisa.com.au",
  "telephone": "+61435321219",
  "areaServed": "Australia",
  "serviceType": "Immigration and Visa Services",
  "sameAs": "https://migrationrepublic.com.au"
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Australia Training Visa Subclass 407?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Australia Training Visa (Subclass 407) is a temporary visa issued by the Australian Government that allows overseas professionals to undertake structured workplace training with an approved Australian sponsor."
      }
    },
    {
      "@type": "Question",
      "name": "How much does the Australia Training Visa cost in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The government fee is AUD 430 for the primary applicant. Total costs including health checks, insurance and agent fees range from AUD 2,500 to AUD 6,000."
      }
    },
    {
      "@type": "Question",
      "name": "How long does 407 visa processing take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Processing takes 6 to 13 months. Around 50% of applications are processed within 6 months and 90% within 13 months."
      }
    },
    {
      "@type": "Question",
      "name": "Can I extend my Australia Training Visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, extensions are possible but not automatic. Your sponsor must lodge a new nomination and you must apply for a further visa before expiry."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* GSC Verification */}
        <meta
          name="google-site-verification"
          content="mftol86q7hauVyXwfTJDkzh6lEIO_NfdlDqR24A6y_4"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLegal) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased relative`}
      >
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
