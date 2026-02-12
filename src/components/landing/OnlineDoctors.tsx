import { doctors } from "../../../data/doctors";
import DoctorCard from "../doctorCard";
import { Button } from "../ui/button";
import DoctorSlider from "./DoctorSlider";

export default function OnlineDoctors() {

  
  return (
    <section className="w-full mx-auto "> 
      
      {/* Section Title */}
      <div className="mb-12 text-center">
         <p className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-2">
         অনলাইন ডাক্তারগণ
        </p>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
         এই মুহূর্তে আপনাদের সেবায় উপলব্ধ 
        </h1>
        <p className="text-gray-600 text-base lg:text-lg">
          ঘরে বসে অনলাইনে বিশেষজ্ঞ ডাক্তারের পরামর্শ নিন
        </p>
      </div>
<div className="md:pr-15 "> <DoctorSlider doctors={doctors} /></div>
      


<div className=" flex justify-end w-full "> <Button className="my-btn !mr-0 mt-4 ">
          আরও ডাক্তার দেখুন -&gt;

 </Button></div>

    </section>
  );
}
