"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { PiEyeClosed } from "react-icons/pi";
import { BsEyeglasses } from "react-icons/bs";
// import { updateProfile } from "firebase/auth";
// import axios from "axios";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// import { AuthContext } from "@/context/AuthContext";

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"student" | "tutor">("student");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    // const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const phone = form.phone.value;
    const password = form.password.value;

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      toast.error("Password must include uppercase, lowercase & 6+ chars");
      setLoading(false);
      return;
    }

    try {
    
      toast.success("Signup successful");
      router.push("/");
    } catch (err: any) {
      toast.error("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Register Your Account
          </CardTitle>
        </CardHeader>

        <CardContent>
          {/* Role selector */}
         {/* Role selector */}
<div className="flex gap-2 mb-6">
  <Button
    type="button"
    variant={role === "student" ? "default" : "outline"}
    className={`flex-1 ${
      role === "student"
        ? "bg-blue-600 hover:bg-blue-700 text-white"
        : "text-muted-foreground"
    }`}
    onClick={() => setRole("student")}
  >
     I’m a Patient
  </Button>

  <Button
    type="button"
    variant={role === "tutor" ? "default" : "outline"}
    className={`flex-1 ${
      role === "tutor"
        ?  "bg-blue-600 hover:bg-blue-700 text-white"
        : "text-muted-foreground"
    }`}
    onClick={() => setRole("tutor")}
  >
    I’m a Doctor
  </Button>
</div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="pb-2">Name</Label>
              <Input id="name" placeholder="Enter your full name"
 name="name" required />
            </div>

            <div>
              <Label htmlFor="email" className="pb-2">Email<span className=" text-gray-600 text-[.8rem]">(optional)</span></Label>
              <Input id="email" placeholder="farhan@gmail.com" name="email" type="email"  />
            </div>

           

            <div>
              <Label htmlFor="phone"className="pb-2">Phone</Label>
              <Input id="phone"  placeholder="+880 1XXX-XXXXXX" name="phone" required />
            </div>

            <div className="relative">
              <Label htmlFor="password" className="pb-2">Password</Label>
              <Input
                id="password"
                name="password" placeholder="Enter a strong password"
                type={showPassword ? "text" : "password"}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-7 text-muted-foreground "
              >
                {showPassword ? (
                  <PiEyeClosed size={20} />
                ) : (
                  <BsEyeglasses size={20} />
                )}
              </button>
            </div>

            <Button className="!w-full my-btn" disabled={loading}>
              {loading ? "Creating account..." : "Register"}
            </Button>

            <p className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-red-500 font-medium hover:underline">
                Login
              </Link>
            </p>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => toast("Google signup")}
            >
              Signup with Google
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
