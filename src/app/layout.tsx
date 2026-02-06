import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "animate.css";
import Header from "@/components/landing/Header";
import Up from "@/components/up";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AmaderDoctor | দেশের সেরা ডাক্তার, এখন আপনার ঘরে",
  description:
    "AmaderDoctor একটি আধুনিক টেলিমেডিসিন প্ল্যাটফর্ম যেখানে দেশের সেরা ডাক্তারদের সাথে অনলাইনে পরামর্শ, ভিডিও কল, চ্যাট ও ই-প্রেসক্রিপশন সুবিধা পাওয়া যায়।",
  keywords: [
    "AmaderDoctor",
    "Telemedicine Bangladesh",
    "Online Doctor BD",
    "Healthcare Bangladesh",
    "Doctor Consultation Online",
    "Digital Health BD",
  ],
  authors: [{ name:"Department of BME, Khulna University of Engineering and Technology" }],
};

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
        <Up />
        <Header showDashboardNav={true} />
      <main>
        {children}
      </main>

      </body>
    </html>
  );
}
