"use client";

import React, { useState } from "react";

export default function RestaurantBusinessPage() {
  const [active, setActive] = useState(true);
  const [days, setDays] = useState([
    { day: "شنبه", open: true },
    { day: "یکشنبه", open: true },
    { day: "دوشنبه", open: true },
    { day: "سه‌شنبه", open: true },
    { day: "چهارشنبه", open: true },
    { day: "پنجشنبه", open: true },
    { day: "جمعه", open: false },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      {/* Header */}
      <h1 className="text-2xl font-bold">مدیریت صفحه کسب‌وکار</h1>

      {/* Business Type */}
      <section className="space-y-4">
        <h2 className="font-semibold">انتخاب کسب‌وکار</h2>
        <input
          className="w-full border rounded-lg p-3"
          placeholder="جستجوی کسب‌وکار (مثلا رستوران)"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["فست فود", "ایرانی", "ایتالیایی", "دریایی"].map((item) => (
            <button
              key={item}
              className="border rounded-lg py-2 hover:bg-gray-100"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Basic Info */}
      <section className="grid md:grid-cols-2 gap-4">
        <input className="border p-3 rounded" placeholder="نام واحد صنفی" />
        <select className="border p-3 rounded">
          <option>سطح واحد صنفی</option>
          <option>لوکس</option>
          <option>اقتصادی</option>
        </select>
        <input className="border p-3 rounded" placeholder="آدرس" />
        <input className="border p-3 rounded" placeholder="شماره تماس" />
      </section>

      {/* Location */}
      <section className="space-y-2">
        <h2 className="font-semibold">لوکیشن</h2>
        <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-sm text-gray-500">
          نقشه (Leaflet)
        </div>
      </section>

      {/* Banner & Profile */}
      <section className="grid md:grid-cols-2 gap-4">
        <div className="border-dashed border-2 rounded p-4 text-center">
          تغییر عکس بنر
        </div>
        <div className="border-dashed border-2 rounded p-4 text-center">
          تغییر عکس پروفایل
        </div>
      </section>

      {/* Status */}
      <section className="flex items-center gap-4">
        <span>وضعیت فعالیت:</span>
        <button
          onClick={() => setActive(!active)}
          className={`px-4 py-2 rounded ${
            active ? "bg-green-500 text-white" : "bg-gray-300"
          }`}
        >
          {active ? "فعال" : "غیرفعال"}
        </button>
      </section>

      {/* Working Days */}
      <section className="space-y-3">
        <h2 className="font-semibold">روزها و ساعات کاری</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {days.map((d, i) => (
            <label
              key={i}
              className="flex items-center gap-2 border p-2 rounded"
            >
              <input
                type="checkbox"
                checked={d.open}
                onChange={() =>
                  setDays((prev) =>
                    prev.map((x, idx) =>
                      idx === i ? { ...x, open: !x.open } : x
                    )
                  )
                }
              />
              {d.day}
            </label>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <section className="grid md:grid-cols-2 gap-4">
        <input className="border p-3 rounded" placeholder="اینستاگرام" />
        <input className="border p-3 rounded" placeholder="تلگرام" />
        <input className="border p-3 rounded" placeholder="ایتا" />
        <input className="border p-3 rounded" placeholder="روبیکا" />
        <input className="border p-3 rounded" placeholder="یوتیوب" />
        <input className="border p-3 rounded" placeholder="وبسایت" />
      </section>

      {/* Menu */}
      <section className="space-y-4">
        <h2 className="font-semibold">منو</h2>
        <div className="border p-4 rounded space-y-3">
          <input
            className="border p-2 rounded w-full"
            placeholder="نام سرویس"
          />
          <input
            className="border p-2 rounded w-full"
            placeholder="مواد تشکیل دهنده"
          />
          <div className="grid grid-cols-3 gap-2">
            <input className="border p-2 rounded" placeholder="قیمت" />
            <input className="border p-2 rounded" placeholder="تخفیف" />
            <input className="border p-2 rounded" placeholder="قیمت نهایی" />
          </div>
          <div className="border-dashed border-2 p-3 rounded text-center">
            عکس سرویس
          </div>
        </div>
      </section>

      {/* Last Bite */}
      <section className="space-y-3">
        <h2 className="font-semibold">منو لقمه آخر</h2>
        <p className="text-sm text-gray-600">
          در طرح لقمه آخر در پایان ساعات کاری، مواد غذایی باقی‌مانده با تخفیف
          ویژه عرضه می‌شوند.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <input className="border p-2 rounded" placeholder="تعداد تخفیف" />
          <input
            className="border p-2 rounded"
            placeholder="قیمت پس از تخفیف"
          />
        </div>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 border rounded">👁 بازدید: 1200</div>
        <div className="p-4 border rounded">⭐ امتیاز: 4.6</div>
        <div className="p-4 border rounded">🔥 محبوب‌ترین: پیتزا</div>
        <div className="p-4 border rounded">💬 نظرات: 85</div>
      </section>

      {/* Q&A */}
      <section className="space-y-3">
        <h2 className="font-semibold">پرسش و پاسخ</h2>
        <textarea
          className="w-full border p-3 rounded"
          placeholder="پاسخ خود را بنویسید..."
        />
      </section>

      <button className="w-full bg-black text-white py-3 rounded-lg">
        ذخیره اطلاعات
      </button>
    </div>
  );
}
