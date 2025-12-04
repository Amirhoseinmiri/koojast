"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const HeroSection = () => {
  const sliderImages = [
    "/images/certificate.png",
    "/images/cafe-shop-interior.webp",
    "/images/test.jpg",
  ];

  return (
    <div>
      {/* please create an slider with full width and use an package*/}
      <div className="w-full mx-auto">
        <Swiper
          slidesPerView={1}
          loop
          className="h-[300px] w-[360px] mx-auto relative xl:w-[1200px] lg:w-[1000px] md:w-[700px] sm:w-[500px] z-10"
        >
          {sliderImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <Image
                // width={500}
                // height={500}
                src={src}
                fill
                className="w-full h-full"
                alt={`slide-${idx}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex gap-4 flex-col md:flex-row md:items-center p-4 px-6 w-full bg-white text-gray-800 relative">
        {/* Logo */}
        <div className="mt-[-60px] shrink-0 z-20">
          <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center text-white font-extrabold text-2xl border-4 border-white shadow-md overflow-hidden">
            {/* اگر لوگو دارید از img استفاده کنید */}
            {/* <img src="/logo.png" alt="logo" /> */}
            CA
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          {/* Title + badge */}
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h1 className="text-2xl font-bold">کافه آفتاب</h1>
            <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-800 border border-green-200 whitespace-nowrap">
              صاحب این کسب‌وکار هستید؟
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <div className="text-lg text-amber-500">★★★★★</div>
            <span className="font-bold">۴٫۶</span>
            <span className="text-sm text-gray-500">· ۱۲۸ نظر</span>

            <span className="w-[3px] h-[3px] rounded-full bg-gray-400 inline-block mx-1 -translate-y-0.5"></span>

            <span className="text-sm text-gray-500">کافه، قهوه‌خانه مدرن</span>
          </div>

          {/* Categories */}
          <div className="text-sm text-gray-500 flex flex-wrap gap-1 mt-1">
            <span>محله ونک، تهران</span>
            <span className="w-[3px] h-[3px] rounded-full bg-gray-400 inline-block mx-1 -translate-y-0.5"></span>

            <span>قیمت: متوسط (‎$$‎)</span>
            <span className="w-[3px] h-[3px] rounded-full bg-gray-400 inline-block mx-1 -translate-y-0.5"></span>

            <span>مناسب کار، مطالعه و دورهمی دوستانه</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2 text-[11px]">
            {[
              "قهوه تخصصی",
              "اینترنت پرسرعت",
              "پریز برق کنار میزها",
              "موسیقی ملایم",
              "امکان رزرو میز",
            ].map((tag) => (
              <span
                key={tag}
                className="px-2 py-[3px] rounded-full border border-gray-300 bg-gray-50 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2 items-end text-sm">
          <div className="flex gap-2 flex-wrap justify-end">
            <button className="rounded-full px-4 py-2 text-sm bg-blue-600 text-white border border-blue-600 font-semibold">
              نوشتن نظر
            </button>

            <button className="rounded-full px-4 py-2 text-sm bg-white border border-gray-300 text-gray-700">
              افزودن عکس
            </button>

            <button className="rounded-full px-4 py-2 text-sm bg-white border border-gray-300 text-gray-700">
              اشتراک‌گذاری
            </button>

            <button className="rounded-full px-4 py-2 text-sm bg-white border border-gray-300 text-gray-700">
              ذخیره
            </button>
          </div>

          <div className="text-[11px] text-gray-500 mt-1">
            گزارش مشکل · ویرایش اطلاعات
          </div>
        </div>
      </div>
      <div className="flex flex-wrap rounded-b-2xl gap-2 p-2.5 px-6 bg-white border-t border-gray-200 text-[12px] text-gray-600">
        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white border border-gray-300">
          ★ ۴٫۶ از ۵ · بر اساس ۱۲۸ نظر
        </div>

        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white border border-gray-300">
          قهوه تخصصی · محیط آرام · مناسب لپ‌تاپ
        </div>

        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white border border-gray-300">
          ‎$$‎ · میانگین هزینه هر نفر: ۲۵۰–۳۸۰ هزار تومان
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
