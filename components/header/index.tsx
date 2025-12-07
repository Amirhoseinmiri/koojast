"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { User } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-40">
      <div className="relative max-w-7xl mx-auto px-6 py-4">
        {/* left: profile icon (visual left because dir=rtl) */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          <Button size={"icon"} variant={"ghost"} asChild>
            <Link href={"/login"}>
              <User />
            </Link>
          </Button>
        </div>

        {/* right: logo */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <Image
            width={40}
            height={40}
            src={"/images/main.png"}
            alt="logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* center navigation */}
        <nav className="flex justify-center">
          <ul className="flex gap-10 items-center">
            <li>
              <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
                رستوران ها
              </button>
            </li>
            <li>
              <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
                فروشگاه ها
              </button>
            </li>
            <li>
              <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
                مشاغل
              </button>
            </li>
            <li>
              <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
                درباره ما
              </button>
            </li>
            <li>
              <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
                تماس با کجاست
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
