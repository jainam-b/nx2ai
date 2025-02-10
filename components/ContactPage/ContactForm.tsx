"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
    businessType: {
      individual: false,
      business: false,
      enterprise: false,
    },
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      message: "",
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
      isValid = false;
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Invalid phone number";
      isValid = false;
    }


    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const scriptURL = "https://script.google.com/macros/s/AKfycbySV6ZsCGBtSOjr5zgFskMOplpiBetNDfo0hUrWBQAgKma9ZuxpD8Ohc002u1t7usnG/exec";
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await fetch(scriptURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
          }),
        });

        // Since we're using no-cors, we can't check response.ok
        // Instead, we'll assume success if the fetch doesn't throw an error
        alert("Form submitted successfully!");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contactNumber: "",
          message: "",
          businessType: {
            individual: false,
            business: false,
            enterprise: false,
          },
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div
      className="relative mt-24 md:mt-10 font-inter min-h-screen starry-bg flex flex-col items-center justify-center p-4 bg-cover bg-center  w-full "
      style={{ backgroundImage: "url('/star.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="flex justify-center items-center absolute">
        <div className="w-[400px] md:w-[800px] h-[400px] md:h-[700px] rounded-full bg-[#8C45FF]/30 blur-[150px] " />
      </div>

      <div className="relative z-10 w-full max-w-3xl text-center mb-8">
        <h1 className="text-6xl font-medium font-inter text-white mb-4">
          Contact us.
        </h1>
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
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
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
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
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
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactNumber" className="text-gray-300">
              Contact Number
            </Label>
            <Input
              id="contactNumber"
              type="tel"
              placeholder="+1 234 567 890"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              value={formData.contactNumber}
              onChange={(e) =>
                setFormData({ ...formData, contactNumber: e.target.value })
              }
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm">{errors.contactNumber}</p>
            )}
          </div>
          
          {/* Business Type Checkboxes */}
          <div className="space-y-4 md:col-span-2">
            <Label className="text-gray-300">Business Type</Label>
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="individual"
                  checked={formData.businessType.individual}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      businessType: {
                        individual: checked as boolean,
                        business: false,
                        enterprise: false,
                      },
                    })
                  }
                  className="border-white/10 data-[state=checked]:bg-white data-[state=checked]:text-black"
                />
                <Label htmlFor="individual" className="text-white cursor-pointer">
                  Individual
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="business"
                  checked={formData.businessType.business}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      businessType: {
                        individual: false,
                        business: checked as boolean,
                        enterprise: false,
                      },
                    })
                  }
                  className="border-white/10 data-[state=checked]:bg-white data-[state=checked]:text-black"
                />
                <Label htmlFor="business" className="text-white cursor-pointer">
                  Business
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="enterprise"
                  checked={formData.businessType.enterprise}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      businessType: {
                        individual: false,
                        business: false,
                        enterprise: checked as boolean,
                      },
                    })
                  }
                  className="border-white/10 data-[state=checked]:bg-white data-[state=checked]:text-black"
                />
                <Label htmlFor="enterprise" className="text-white cursor-pointer">
                  Enterprise
                </Label>
              </div>
            </div>
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
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <div className="md:col-span-2 flex justify-center">
            <Button
              type="submit"
              className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-base font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
