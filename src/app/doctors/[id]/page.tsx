"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Star,
  Heart,
  Share2,
  CheckCircle,
  Clock,
  Users,
  Hash,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaFacebookF } from "react-icons/fa";

export default function DoctorDetailsPage() {
  const doctor = {
    name: "অধ্যাপক ডাঃ এস. এম. আব্দুল ওয়াহাব",
    photo: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg",
    specialist: "হৃদরোগ ও মেডিসিন বিশেষজ্ঞ",
    experience: 25,
    institutions: "খুলনা সিটি মেডিকেল কলেজ",
    rating: 4.9,
    totalReviews: 145,
    isVerified: true,
    availability: true,
    fee: "১০০০ টাকা",
    about:
      "এমবিবিএস, এফআরসিপি, এমডি (কার্ডিওলজি)। হার্ট ব্লক ও উচ্চ রক্তচাপ চিকিৎসায় খুলনার সবচেয়ে সিনিয়র বিশেষজ্ঞ।",
    experienceDetails: [
      "২৫ বছর হৃদরোগ চিকিৎসা অভিজ্ঞতা",
      "১০ বছর কার্ডিয়াক সার্জারি ট্রেনিং",
    ],
    degrees: [
      "MBBS - ঢাকা মেডিকেল কলেজ",
      "MD (Cardiology) - বঙ্গবন্ধু মেডিকেল",
    ],
    reviews: [
      { name: "রাহিম", comment: "খুব ভালো ডাক্তার", rating: 5 },
      { name: "করিম", comment: "চিকিৎসা খুবই সন্তোষজনক", rating: 4 },
    ],
    schedule: [
      {
        day: "শনি-বৃহস্পতি",
        from: "১০:০০",
        to: "১৪:০০",
        location: "সিটি মেডিকেল",
      },
    ],
    platformId: "DOC-10234",
    avgTime: "১৫ মিনিট",
    totalPatients: 540,
  };

  const [activeTab, setActiveTab] = useState("about");
  const [reviewText, setReviewText] = useState("");
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(20);

  const handleLikeToggle = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const shareToFacebook = () => {
    const url = window.location.href;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank"
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return doctor.experienceDetails?.length ? (
          doctor.experienceDetails.map((item, i) => (
            <Card key={i} className="mb-3 rounded-xl">
              <CardContent className="p-4">
                {i + 1}. {item}
              </CardContent>
            </Card>
          ))
        ) : (
          <p>তথ্য পাওয়া যায়নি</p>
        );

      case "reviews":
        return (
          <>
            {doctor.reviews?.length ? (
              doctor.reviews.map((r, i) => (
                <Card key={i} className="mb-3 rounded-xl">
                  <CardContent className="p-4">
                    <p className="font-semibold">{r.name}</p>
                    <p>{r.comment}</p>
                    <p className="text-yellow-500">⭐ {r.rating}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p>তথ্য পাওয়া যায়নি</p>
            )}

            <div className="mt-4">
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full border p-3 rounded-lg"
                placeholder="আপনার মতামত লিখুন..."
              />
              <Button className="mt-2">রিভিউ দিন</Button>
            </div>
          </>
        );

      case "degree":
        return doctor.degrees?.length ? (
          doctor.degrees.map((d, i) => (
            <Card key={i} className="mb-3 rounded-xl">
              <CardContent className="p-4">
                {i + 1}. {d}
              </CardContent>
            </Card>
          ))
        ) : (
          <p>তথ্য পাওয়া যায়নি</p>
        );

      default:
        return doctor.about ? (
          <Card className="rounded-xl">
            <CardContent className="p-4">{doctor.about}</CardContent>
          </Card>
        ) : (
          <p>তথ্য পাওয়া যায়নি</p>
        );
    }
  };

  return (
    <section className="max-w-full mx-auto px-[7%] py-10">
      {/* ================= HERO SECTION ================= */}
  <Card className="rounded-3xl shadow-sm p-6 mb-10 border-0 bg-white relative">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative ">
    
    {/* 1️⃣ IMAGE SECTION */}
    <div className="relative w-full h-70 lg:h-75 rounded-3xl overflow-hidden shadow-lg border-white border-6">
      <Image
        src={doctor.photo}
        alt={doctor.name}
        fill
        className="object-cover hover:scale-105 transition duration-500"
      />

      {/* Top-right buttons */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        {/* Like Button */}
        <button
          onClick={handleLikeToggle}
          className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow hover:bg-gray-100 transition"
        >
          <Heart
            className={`w-5 h-5 transition ${
              liked ? "text-red-500 fill-red-500" : "text-gray-400"
            }`}
          />
          <span className="text-sm font-medium">{likes}</span>
        </button>

        {/* Facebook Button */}
        <button
          onClick={shareToFacebook}
          className="bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          <FaFacebookF size={14} />
        </button>

        {/* Share Button */}
        <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
          <Share2 size={16} />
        </button>
      </div>
    </div>

    {/* 2️⃣ Info SECTION */}
    <div className="space-y-4 ">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
          {doctor.name}
          {doctor.isVerified && (
            <CheckCircle className="text-green-500 w-5 h-5" />
          )}
        </h1>

        <p className="text-blue-600 font-medium mt-1">{doctor.specialist}</p>
      </div>

      <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
        <span>🎓 {doctor.institutions}</span>
        <span>🕒 {doctor.experience} বছরের অভিজ্ঞতা</span>
      </div>

      <div className="flex items-center gap-2">
        <Star className="text-yellow-500 w-4 h-4 fill-yellow-400" />
        <span className="font-semibold">{doctor.rating}</span>
        <span className="text-gray-500">
          ({doctor.totalReviews} রিভিউ)
        </span>
      </div>

      {doctor.availability ? (
        <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
          বর্তমানে অনলাইন
        </span>
      ) : (
        <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs">
          বর্তমানে অফলাইন
        </span>
      )}
    </div>

    {/* 3️⃣ FEE + CTA SECTION */}
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-lg space-y-5 text-center">
      <div>
        <p className="text-gray-600 text-sm">পরামর্শ ফি</p>
        <p className="text-4xl font-bold text-blue-600">{doctor.fee}</p>
      </div>

      <Button className="!w-full my-btn">এখনই অ্যাপয়েন্টমেন্ট নিন</Button>
    </div>
  </div>
</Card>


      {/* ================= TABS SECTION ================= */}
      <div className="flex gap-5 mb-6 flex-wrap">
        {["about", "experience", "reviews", "degree"].map((tab) => (
          <Button
            key={tab}
            variant="outline"
            onClick={() => setActiveTab(tab)}
            className={`transition-all duration-200 rounded-xl px-4 text-[1rem]
              ${activeTab === tab ? "my-btn" : ""}`}
          >
            {tab}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">{renderContent()}</div>

        {/* RIGHT STATS CARD */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Appointment / Schedule Card */}
          <Card className="rounded-3xl shadow-lg p-6 bg-white hover:shadow-xl transition flex justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Clock className="text-blue-500 w-6 h-6" />
              ডাক্তার সময়সূচি
            </h3>

            <div className="w-full flex justify-between items-center gap-4 p-4">
              <div className="flex flex-col gap-3 items-center justify-center border p-4 rounded-xl flex-1">
                <h1 className="font-bold">অফলাইন</h1>
                {doctor.schedule.map((s, i) => (
                  <div key={i} className="mb-3">
                    <p className="text-gray-700 font-medium">
                      {s.day} ({s.from} - {s.to})
                    </p>
                    <p className="text-sm flex justify-center">{s.location}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 items-center border p-4 rounded-xl flex-1">
                <h1 className="font-bold">অনলাইন</h1>
                {doctor.schedule.map((s, i) => (
                  <div key={i} className="mb-3">
                    <p className="text-gray-700 font-medium flex justify-center">
                      শনি-বৃহস্পতি
                    </p>
                    <p className="text-gray-700 font-medium">
                      সকাল ১০টা - রাত ১০টা
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Stats / Info Card */}
          <Card className="rounded-3xl shadow-lg p-6 bg-white hover:shadow-xl transition">
            <div className="flex flex-col gap-5">
              <div className="flex justify-around">
                <div className="flex items-center gap-3 p-4 flex-1">
                  <Users className="text-green-500 w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      {doctor.totalPatients || 540}
                    </h3>
                    <p className="text-gray-500 text-sm">মোট রোগী</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <Star className="text-yellow-400 w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-semibold">{doctor.rating}</h3>
                    <p className="text-gray-500 text-sm">গড় রেটিং</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-around">
                <div className="flex items-center gap-3 flex-1 p-4">
                  <Hash className="text-purple-500 w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      {doctor.platformId || "DOC-10234"}
                    </h3>
                    <p className="text-gray-500 text-sm">ডক্টর আইডি</p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="text-blue-500 w-5 h-5" />
                    <h3 className="text-xl font-semibold">{doctor.totalReviews}</h3>
                  </div>
                  <p className="text-gray-500 text-sm">রিভিউ দিয়েছেন</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
