"use client"
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default  function Page() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirmPassword: "",
    });
  
    const [errors, setErrors] = useState({
      email: "",
      password: "",
      confirmPassword: "",
    });
  
    const validateForm = () => {
      let isValid = true;
      const newErrors = {
        email: "",
        password: "",
        confirmPassword: "",
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
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
        isValid = false;
      }
  
      if (!formData.confirmPassword.trim()) {
        newErrors.confirmPassword = "Please confirm your password";
        isValid = false;
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
        isValid = false;
      }
  
      setErrors(newErrors);
      return isValid;
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
        console.log(formData);
        // Handle signup logic
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
          <h1 className="text-6xl font-medium text-white mb-4">Create account</h1>
          <p className="text-gray-300 text-lg">
            Join us today and start your journey
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
                  placeholder="Create a password"
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
  
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-300">
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 pl-10 pr-10"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, confirmPassword: e.target.value })
                  }
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
  
            <Button
              onClick={()=>window.location.href=("/")}
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-100 px-8 py-6 text-base font-medium"
            >
              Create account
            </Button>
  
            <p className="text-center text-gray-300">
              Already have an account?{" "}
              <a href="/login" className="text-white hover:underline">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    );
  };
  