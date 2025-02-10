"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
    };

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // Handle login logic
    }
  };

  return (
    <div
      className="relative min-h-screen font-inter flex flex-col items-center justify-center p-4 bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/star.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="flex justify-center items-center absolute">
        <div className="w-[400px] md:w-[800px] h-[400px] md:h-[700px] rounded-full bg-[#8C45FF]/30 blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-md text-center mb-8">
        <h1 className="text-6xl font-medium text-white mb-4">Welcome back</h1>
        <p className="text-gray-300 text-lg">
          Enter your credentials to access your account
        </p>
      </div>

      <div className="relative z-10 w-full max-w-md bg-black/30 backdrop-blur-sm rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 pl-10"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 pl-10 pr-10"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-gray-100 px-8 py-6 text-base font-medium"
          >
            Sign in
          </Button>

          <p className="text-center text-gray-300">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-white hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

