"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="relative mt-24 md:mt-10 font-inter min-h-screen starry-bg flex flex-col items-center justify-center p-4 bg-cover bg-center  w-full "
      style={{ backgroundImage: "url('/star.png')" }}
    >
      <div
        className="absolute inset-0 bg-black/50 z-0"
      />
      <div className="flex justify-center items-center absolute">
        <div className="w-[400px] md:w-[800px] h-[400px] md:h-[700px] rounded-full bg-[#8C45FF]/30 blur-[150px] " />
      </div>

      <div className="relative z-10 w-full max-w-3xl text-center mb-8">
        <h1 className="text-6xl font-medium font-inter text-white mb-4">Contact us.</h1>
        <p className="text-gray-300 text-lg">
          Integrates effortlessly with all major content management systems with
          no technical setup required.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-3xl bg-black/30 backdrop-blur-sm rounded-lg p-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 font-inter"
        >
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-gray-300">
              First name
            </Label>
            <Input
              id="firstName"
              placeholder="Jane"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-gray-300">
              Last name
            </Label>
            <Input
              id="lastName"
              placeholder="Smith"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="jane@framer.com"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-gray-300">
              Company name
            </Label>
            <Input
              id="company"
              placeholder="Framer"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="message" className="text-gray-300">
              How can we help?
            </Label>
            <Textarea
              id="message"
              placeholder="Describe your problem"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-[150px]"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <Button
              type="submit"
              className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-base font-medium"
            >
              Send message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
