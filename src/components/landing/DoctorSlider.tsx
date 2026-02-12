"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Doctor } from "@/types/doctor";
import "swiper/css";
import DoctorCard from "../doctorCard";

export default function DoctorSlider({ doctors }: { doctors: Doctor[] }) {
  const shouldLoop = doctors.length > 4;

  return shouldLoop ? (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      loop={shouldLoop}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      {doctors.map((doctor) => (
        <SwiperSlide key={doctor.id}>
          <DoctorCard doctor={doctor} />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}
