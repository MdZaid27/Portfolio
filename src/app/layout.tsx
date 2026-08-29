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
  title: "Technical Business Analyst Portfolio | Nada Al Rabee B2B & Data Architecture",
  description: "Portfolio of a Senior Technical Business Analyst specializing in B2B Digital Platforms (Nada Al Rabee), PostgreSQL to ClickHouse Data Migrations, OpenAPI specs, BPMN 2.0 process modeling, and SQL analytics.",
  keywords: [
    "Technical Business Analyst",
    "B2B Digital Platform",
    "Nada Al Rabee",
    "PostgreSQL to ClickHouse Migration",
    "BRD Specification",
    "BPMN 2.0",
    "OpenAPI Swagger Specs",
    "Agile Product Owner"
  ],
  authors: [{ name: "Mohammed Zaid" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100">
        {children}
      </body>
    </html>
  );
}
