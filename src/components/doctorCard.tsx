import Image from "next/image";
import { Star, CheckCircle } from "lucide-react";

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

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  const defaultImage =
    doctor.gender === "female" ? "/female-doctor.webp" : "/male-doctor.webp";

  const imageSrc = doctor.photo?.trim() ? doctor.photo : defaultImage;

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-md transition w-full max-w-xs mx-auto">
      {/* Image Section */}
      <div className="relative w-full h-44 rounded-t-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={doctor.name}
          fill
          className="object-cover"
        />

        {/* Online / Offline Badge */}
        <span
          className={`absolute top-2 left-2 px-2 py-1 text-[10px] font-semibold rounded-full text-white
            ${doctor.availability ? "bg-green-600" : "bg-gray-500"}
          `}
        >
          {doctor.availability ? "● অনলাইন" : "● অফলাইন"}
        </span>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col gap-1">

        {/* Name & Verified */}
        <div className="flex items-center gap-1 mb-1">
          <h3 className="text-sm font-bold text-gray-900 line-clamp-1">
            {doctor.name}
          </h3>
          {doctor.isVerified && (
            <CheckCircle className="w-4 h-4 text-blue-600" />
          )}
        </div>

        {/* Specialist */}
        <p className="text-[13px] text-blue-600 font-medium line-clamp-1">
          {doctor.specialist}
        </p>

        {/* Institution */}
        <p className="text-[12px] text-gray-500 line-clamp-1">
          {doctor.institutions}
        </p>

        {/* Rating & Experience */}
        <div className="flex items-center justify-between text-[12px] mb-1">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-3 h-3 fill-yellow-500" />
            <span className="font-semibold text-gray-800">{doctor.rating}</span>
            <span className="text-gray-500">({doctor.totalReviews})</span>
          </div>
          <span className="text-gray-600">{doctor.experience}+ বছর</span>
        </div>

        {/* Description (max 1 lines if needed) */}
        <p className="text-[10px] text-gray-600 mb-2 line-clamp-1">
          {doctor.description}
        </p>

        {/* Fee & Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm font-bold text-green-600"> <span className="text-[1.5rem] font-bold">৳</span> {doctor.fee}</p>

          <button
            className= "my-btn !text-[12px]"
             
          >
            অ্যাপয়েন্টমেন্ট নিন
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
