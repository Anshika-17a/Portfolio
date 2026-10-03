import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Geist, JetBrains_Mono } from "next/font/google";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: ["400"],
  subsets: ["latin"],
  display: "optional",
});

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "optional",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "optional",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF9F7" },
    { media: "(prefers-color-scheme: dark)", color: "#151413" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://anshika-portfolio-gules-ten.vercel.app"),
  title: {
    default: "Anshika — AI/ML Engineer & Project Lead",
    template: "%s | Anshika",
  },
  description:
    "Portfolio of Anshika, final-year AI & ML engineering student at SMVITM Udupi. Bridging rigorous nonlinear estimation and ML pipelines with funded product delivery and team leadership.",
  keywords: [
    "Anshika",
    "AI/ML Engineer",
    "Project Lead",
    "Machine Learning",
    "Kalman Filter",
    "CSTR",
    "FastAPI",
    "Product Management",
    "SMVITM",
  ],
  authors: [{ name: "Anshika", url: "https://github.com/Anshika-17a" }],
  creator: "Anshika",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anshika-portfolio-gules-ten.vercel.app",
    title: "Anshika — AI/ML Engineer & Project Lead",
    description:
      "Bridging rigorous machine learning pipelines with funded engineering delivery and team leadership.",
    siteName: "Anshika Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anshika — AI/ML Engineer & Project Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshika — AI/ML Engineer & Project Lead",
    description:
      "Bridging rigorous machine learning pipelines with funded engineering delivery and team leadership.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anshika",
    jobTitle: "AI/ML Engineer & Project Lead",
    url: "https://anshika-portfolio-gules-ten.vercel.app",
    sameAs: [
      "https://github.com/Anshika-17a",
      "https://linkedin.com/in/anshika-suruchi",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Shri Madhwa Vadiraja Institute of Technology and Management, Udupi",
    },
    knowsAbout: [
      "Machine Learning",
      "Nonlinear State Estimation",
      "Kalman Filtering",
      "FastAPI",
      "Python",
      "Requirements Engineering",
      "Agile Sprint Planning",
    ],
    description:
      "Final-year B.E. student in Artificial Intelligence & Machine Learning at SMVITM Udupi. Lead of ₹5L government-funded hardware project and co-author on nonlinear CSTR parameter identification.",
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col selection:bg-[var(--accent)] selection:text-white antialiased">
        <ScrollProgress />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--bg-card)] focus:text-[var(--text-ink)] focus:border focus:border-[var(--border-hairline)]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
