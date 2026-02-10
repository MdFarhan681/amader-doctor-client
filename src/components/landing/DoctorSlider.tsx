"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import DoctorCard from "../doctorCard";
import type { Doctor } from "../../types"; // Adjust the path to your types file

export default function DoctorSlider({ doctors }: { doctors: Doctor[] }) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]} // ✅ FIX HERE
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      breakpoints={{
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
  );
}
