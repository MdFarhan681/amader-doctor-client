"use client";

import Consultation from "@/components/landing/Consultation";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import OnlineDoctors from "@/components/landing/OnlineDoctors";
import Slider from "@/components/landing/Slider";
import Up from "@/components/up";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // TEMP user (replace with auth store later)
  const user = { type: "patient" }; //

  useEffect(() => {
    if (user?.type === "doctor") {
      router.replace("/doctor/dashboard");
    }
  }, [user?.type]);

  if (user?.type === "doctor") {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
   
   
      <main className="w-full flex flex-col gap-12 md:gap-20 lg:gap-28 px-[7%]  ">
       
        <Slider />
         <OnlineDoctors />
        <Consultation />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
