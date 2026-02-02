import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Saher - Graphic & UI/UX Designer",
  description: "Professional portfolio of Mohamed Saher, a senior graphic designer and UI/UX specialist with 7 years of freelance experience in digital products, branding, and design systems.",
  keywords: ["UI/UX Design", "Graphic Design", "Branding", "Design Systems", "Mohamed Saher"],
  authors: [{ name: "Mohamed Saher" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Mohamed Saher - Graphic & UI/UX Designer",
    description: "Professional portfolio showcasing 7 years of design expertise",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Saher - Graphic & UI/UX Designer",
    description: "Professional portfolio showcasing 7 years of design expertise",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
