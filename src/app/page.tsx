'use client'

import Header from "@/components/landing/Header";
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
      <Header showDashboardNav={true} />
      <main className="pt-16">
        {/* page content */}
      </main>
    </div>
  );
}
