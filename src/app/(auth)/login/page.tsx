"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

import { PiEyeClosed } from "react-icons/pi";
import { BsEyeglasses } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    // try {
    //   await signIn(email, password);
    //   toast.success("Login successful");
    //   router.push(redirect);
    // } catch {
    //   toast.error("Invalid email or password");
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl">
            Login Your Account
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="space-y-1 relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-7 text-muted-foreground"
              >
                {showPassword ? <PiEyeClosed size={20} /> : <BsEyeglasses size={20} />}
              </button>
            </div>

            {/* Login button */}
            <Button type="submit" className="!w-full my-btn">
              Login
            </Button>

            {/* Register link */}
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?
              <Link
                href={`/register?redirect=${redirect}`}
                className="text-red-500 ml-1 font-medium hover:underline"
              >
                Register
              </Link>
            </p>

            {/* Google login */}
            <Button
              type="button"
              variant="outline"
              className="w-full"
              // onClick={googleSignIn}
            >
              Login with Google
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
