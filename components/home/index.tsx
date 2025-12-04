"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HeroSearchSection() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <section className="w-full py-16 text-center">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#0C2A4D] mb-4">
        چیزی که میخوای در یک قدمی شماست
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 mb-10">
        بیش از <span className="font-bold">1000</span> کسب و کار محلی در خدمت
        شما هستند
      </p>

      {/* Search Container */}
      <div className="max-w-5xl mx-auto" dir="ltr">
        <div className="bg-white border border-[#C6E3F0] shadow-md rounded-full p-3 flex items-center gap-3">
          {/* Search Button */}
          <button className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-3 rounded-full flex items-center gap-2">
            جستجو <Search size={18} />
          </button>

          {/* Search Input */}
          <Input
            type="text"
            dir="rtl"
            placeholder="جستجوی کسب و کار، خدمات، محصولات..."
            className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-700"
          />

          {/* React Select: States */}
          <div className="w-48">
            <Select onValueChange={setState} dir="rtl">
              <SelectTrigger className="border-gray-300 w-full text-right">
                <SelectValue placeholder="همه استان ها" />
              </SelectTrigger>

              <SelectContent className="text-right">
                <SelectItem value="all">همه استان ها</SelectItem>
                <SelectItem value="tehran">تهران</SelectItem>
                <SelectItem value="isfahan">اصفهان</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Select: Cities */}
          <div className="w-48">
            <Select onValueChange={setCity} dir="rtl">
              <SelectTrigger className="border-gray-300 w-full text-right">
                <SelectValue placeholder="همه شهر ها" />
              </SelectTrigger>

              <SelectContent className="text-right">
                <SelectItem value="all">همه شهر ها</SelectItem>
                <SelectItem value="tehran">تهران</SelectItem>
                <SelectItem value="karaj">کرج</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
}
