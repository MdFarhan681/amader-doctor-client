import { doctors } from "../../../data/doctors";
import DoctorCard from "../doctorCard";
import DoctorSlider from "./DoctorSlider";

export default function OnlineDoctors() {

  
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      
      {/* Section Title */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          আমাদের অভিজ্ঞ ডাক্তারগণ
        </h1>
        <p className="text-gray-600 mt-2">
          ঘরে বসে অনলাইনে বিশেষজ্ঞ ডাক্তারের পরামর্শ নিন
        </p>
      </div>

      {/* Doctor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       
       <DoctorSlider doctors={doctors} />
      </div>
    </section>
  );
}
