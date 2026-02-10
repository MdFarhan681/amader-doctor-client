import { doctors } from "../../../data/doctors";
import DoctorCard from "../doctorCard";
import DoctorSlider from "./DoctorSlider";

export default function OnlineDoctors() {

  
  return (
    <section className="w-full mx-auto  py-10 ">
      
      {/* Section Title */}
      <div className="mb-8 text-center">
         <p className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-2">
         অনলাইন ডাক্তারগণ
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
         এই মুহূর্তে আপনাদের সেবায় উপলব্ধ 
        </h1>
        <p className="text-gray-600 mt-2">
          ঘরে বসে অনলাইনে বিশেষজ্ঞ ডাক্তারের পরামর্শ নিন
        </p>
      </div>

     
       
       <DoctorSlider doctors={doctors} />
 
    </section>
  );
}
