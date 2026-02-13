import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  title: "VisitFlow | AI Property Tour Booking System",
  description:
    "VisitFlow converts website visitors into scheduled property tours using AI-driven qualification, OTP verification, and dynamic agent availability.",
  keywords: [
    "real estate AI",
    "property tour booking software",
    "AI chatbot for real estate",
    "tour scheduling automation",
    "real estate lead qualification",
    "VisitFlow",
  ],
  openGraph: {
    title: "VisitFlow | AI Property Tour Booking System",
    description:
      "Convert website visitors into scheduled property tours — 24/7.",
    url: "https://visitflow.pengence.com",
    siteName: "VisitFlow",
    images: [
      {
        url: "https://visitflow.pengence.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VisitFlow | AI Property Tour Booking System",
    description:
      "Convert website visitors into scheduled property tours — 24/7.",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
