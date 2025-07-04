import * as React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Business Succès Online | Formation & Coaching",
  description: "Développe ton business en ligne avec la formation Business Succès Online et un coaching personnalisé. Offre professionnelle, moderne et adaptée à tous les entrepreneurs.",
  keywords: [
    "business en ligne",
    "formation",
    "coaching",
    "entrepreneuriat",
    "succès",
    "accompagnement",
    "startup",
    "digital"
  ],
  openGraph: {
    title: "Business Succès Online | Formation & Coaching",
    description: "Développe ton business en ligne avec la formation Business Succès Online et un coaching personnalisé.",
    locale: "fr_FR",
    type: "website"
  },
  metadataBase: new URL("https://business-succes-online.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
} 