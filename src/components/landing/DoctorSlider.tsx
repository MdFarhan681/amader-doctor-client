"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // import modules from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import DoctorCard from "../doctorCard";

interface Doctor {
  name: string;
  photo: string;
  specialist: string;
  experience: number;
  rating: number;
  totalReviews: number;
  fee: string;
  description: string;
  institutions: string;
  isVerified: boolean;
  availability: boolean;
  gender: string;
}

export default function DoctorSlider({ doctors }: { doctors: Doctor[] }) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]} // ✅ register modules here
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation // enables prev/next arrows
      pagination={{ clickable: true }} // clickable dots
    >
      {doctors.map((doctor) => (
        <SwiperSlide key={doctor.name} className="flex justify-center">
          <DoctorCard doctor={doctor} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
