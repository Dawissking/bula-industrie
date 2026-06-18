import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bula Industrie - Excellence Industrielle | Mali",
    template: "%s | Bula Industrie",
  },
  description:
    "Bula Industrie, leader multi-sectoriel au Mali. Import-Export, Hydrocarbures, Lubrifiants, Logistique, Agro-Business et Industrie. L'excellence industrielle au service d'un avenir éco-responsable.",
  keywords: [
    "Bula Industrie",
    "industrie Mali",
    "hydrocarbures Mali",
    "lubrifiants",
    "import export Mali",
    "logistique Mali",
    "agro-business Mali",
    "énergie Mali",
    "Bamako industrie",
  ],
  authors: [{ name: "Bula Industrie" }],
  creator: "Bula Industrie",
  publisher: "Bula Industrie",
  metadataBase: new URL("https://www.bulaindustrie.com"),
  openGraph: {
    type: "website",
    locale: "fr_ML",
    url: "https://www.bulaindustrie.com",
    siteName: "Bula Industrie",
    title: "Bula Industrie - Excellence Industrielle",
    description:
      "L'excellence industrielle au service d'un avenir éco-responsable. Solutions industrielles innovantes en Afrique de l'Ouest.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bula Industrie - Excellence Industrielle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bula Industrie - Excellence Industrielle",
    description:
      "L'excellence industrielle au service d'un avenir éco-responsable.",
    images: ["/og-image.jpg"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-[0px] sm:pt-[32px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
