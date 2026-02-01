import Image from "next/image"

const Consultation = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left: Real Image */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/consultataion.jpg"
            alt="Online doctor consultation video call"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Content */}
      <div>
  <p className="text-blue-600 font-semibold mb-2">
    অ্যাপয়েন্টমেন্ট
  </p>

  <h2 className="text-4xl font-bold mb-6 leading-snug">
    কিভাবে শুরু করবেন <br /> আমাদের অ্যাপ ব্যবহার করে
  </h2>

  <p className="text-gray-600 mb-8">
    Amader Doctor স্বাস্থ্যসেবা সহজ করে তোলে, রোগীদের যোগ্য ডাক্তারদের সাথে
    নিরাপদ অনলাইন ভিডিও কনসালটেশনের মাধ্যমে সংযুক্ত করে।
  </p>

  <div className="space-y-6">

    <Step
      title="আপনার অ্যাকাউন্ট তৈরি করুন"
      desc="সহজেই সাইন আপ করুন এবং শুরু করার জন্য আপনার প্রাথমিক প্রোফাইল পূরণ করুন।"
    />

    <Step
      title="ডাক্তার নির্বাচন করুন"
      desc="নিশ্চিত ডাক্তারদের ব্রাউজ করুন এবং আপনার জন্য সঠিক বিশেষজ্ঞ নির্বাচন করুন।"
    />

    <Step
      title="অ্যাপয়েন্টমেন্ট বুক করুন"
      desc="সুবিধাজনক সময় বেছে নিন এবং অনলাইনে আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত করুন।"
    />

    <Step
      title="ভিডিও কনসালটেশন শুরু করুন"
      desc="নিরাপদ ভিডিও কল যোগ করুন এবং আপনার ডাক্তারকে পরামর্শ করুন।"
    />

  </div>
</div>

      </div>
    </section>
  )
}

type StepProps = {
  title: string;
  desc: string;
};

const Step = ({ title, desc }: StepProps) => (
  <div className="flex gap-4">
    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
      ✓
    </div>
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  </div>
)

export default Consultation
