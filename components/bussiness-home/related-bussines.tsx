import React from "react";
import { ReviewsHeader } from "./user-review";
import PupularTags from "./popular-tags";
import Comments from "./comments";

const RelatedBussines = () => {
  const faqs = [
    {
      q: "آیا امکان رزرو میز وجود دارد؟",
      a: "بله، برای روزهای شلوغ (پنجشنبه و جمعه) می‌توانید با تماس تلفنی میز رزرو کنید.",
    },
    {
      q: "سیاست استفاده از لپ‌تاپ چگونه است؟",
      a: "استفاده از لپ‌تاپ در تمام میزهای داخلی مجاز است، اما لطفاً در ساعات شلوغ از اشغال طولانی‌مدت میزها خودداری کنید.",
    },
    {
      q: "آیا فضای باز هم دارید؟",
      a: "بله، در فصول معتدل، تراس کوچک با ظرفیت محدود باز است.",
    },
    {
      q: "آیا گزینه گیاه‌خواری یا وگان در منو وجود دارد؟",
      a: "بله، چند گزینه گیاه‌خواری و یک گزینه وگان در منو موجود است که به مرور بیشتر می‌شود.",
    },
  ];

  return (
    <div className="w-full lg:w-[65%] flex flex-col gap-2">
      <div className="bg-white w-full rounded-lg grid grid-cols-3">
        {/* معرفی کسب‌وکار */}
        <div className="col-span-3 lg:col-span-2 bg-white p-6">
          <h2 className="font-bold text-xl mb-3">معرفی کسب‌وکار</h2>

          <p className="text-gray-700 leading-7 mb-4">
            کافه آفتاب یک کافه مدرن با فضای روشن و آرام است که انواع قهوه تخصصی،
            نوشیدنی‌های سرد و گرم و صبحانه و میان‌وعده‌های سبک سرو می‌کند...
          </p>

          <h3 className="font-semibold mb-2">
            چرا کاربران این کافه را دوست دارند؟
          </h3>

          <ul className="list-disc pr-5 text-gray-700 space-y-1">
            <li>اینترنت پایدار و سریع برای جلسات آنلاین و کار گروهی</li>
            <li>نور طبیعی فراوان و طراحی داخلی مینیمال و روشن</li>
            <li>پریز برق در اکثر میزها برای شارژ لپ‌تاپ و موبایل</li>
            <li>فضای دلنشین و آرام حتی در ساعات شلوغ</li>
            <li>قهوه تخصصی و نوشیدنی‌های تازه</li>
          </ul>

          {/* تگ‌ها */}
          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full">
              قهوه تخصصی
            </span>
            <span className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full">
              اینترنت پرسرعت
            </span>
            <span className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full">
              پریز برق کنار میزها
            </span>
            <span className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full">
              موسیقی ملایم
            </span>
            <span className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full">
              مناسب جلسات کاری
            </span>
          </div>

          {/* ویژگی‌های مهم */}
          <h3 className="font-bold mt-6 mb-3 text-lg">ویژگی‌های مهم</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-white p-2 border rounded-xl shadow-sm">
              <h4 className="font-semibold mb-2">امکانات</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>صندلی راحت، تهویه مطلوب</li>
                <li>امکان رزرو میز</li>
                <li>میزهای مطالعه</li>
                <li>بیرون‌بر</li>
              </ul>
            </div>

            <div className="bg-white p-2 border rounded-xl shadow-sm">
              <h4 className="font-semibold mb-2">دسترسی</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>نزدیک مترو حقانی و خطوط اصلی</li>
                <li>پارکینگ، جای پارک مناسب</li>
                <li>دسترسی راحت در کوچه‌های اطراف</li>
              </ul>
            </div>

            <div className="bg-white p-2 border rounded-xl shadow-sm">
              <h4 className="font-semibold mb-2">فضا</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>محیط آرام و مناسب کار و مطالعه</li>
                <li>پنجره‌های بزرگ نورگیر</li>
                <li>فضای دنج برای قرارهای دوستانه</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1 lg:grid-cols-1 bg-white w-full p-4">
          <h2 className="text-center font-bold text-lg mb-4">ساعات کاری</h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between bg-green-100 text-green-900 px-3 py-2 rounded text-sm">
              <span>۲۳:۳۰ تا ۸:۳۰</span>
              <span>(امروز - یکشنبه)</span>
            </div>

            <div className="flex justify-between px-1 py-2 border rounded">
              <span>۲۳:۳۰ تا ۸:۳۰</span>
              <span>شنبه تا چهارشنبه</span>
            </div>

            <div className="flex justify-between px-3 py-2 border rounded">
              <span>۰۰:۳۰ تا ۸:۳۰</span>
              <span>پنجشنبه</span>
            </div>

            <div className="flex justify-between px-3 py-2 border rounded">
              <span>۹:۰۰ تا ۰۰:۰۰</span>
              <span>جمعه</span>
            </div>

            <p className="text-xs text-gray-500 mt-2 leading-5">
              اکنون باز است. پیشنهاد می‌شود برای پنجشنبه و جمعه حتما رزرو کنید.
            </p>
          </div>

          {/* نقشه */}
          <div className="mt-6 bg-indigo-50 rounded-xl min-h-32 p-4 border border-indigo-100">
            <h3 className="font-bold text-sm mb-2 text-center">
              نقشه و موقعیت مکانی
            </h3>
            <p className="text-xs text-gray-600 leading-5">
              اینجا می‌توانید نقشه (مثلاً از Google Maps یا نقشه‌های داخلی) را
              با iframe اضافه کنید و مسیرهای دسترسی را نمایش دهید.
            </p>
          </div>
        </div>
        <ReviewsHeader />
        <PupularTags />
        <Comments />
      </div>
      <div className="bg-white w-full rounded-lg p-2">
        <h2 className="text-lg font-bold mb-1">نمونه منو / خدمات</h2>

        {/* Description */}
        <p className="text-[13px] text-gray-500 leading-6">
          در نسخه واقعی، می‌توانید منوی کامل را در تب جداگانه نمایش دهید و برای
          هر آیتم عکس، توضیح و برچسب (ویژه، پرطرفدار و ...) اضافه کنید.
        </p>

        {/* Pills */}
        <div className="flex flex-wrap gap-1.5 mt-1 text-[12px]">
          {[
            "اسپرسو سینگل – ۵۵٫۰۰۰ تومان",
            "کافه لاته – ۸۵٫۰۰۰ تومان",
            "کیک هویج خانگی – ۹۵٫۰۰۰ تومان",
            "صبحانه آفتاب – ۱۸۵٫۰۰۰ تومان",
            "آیس امریکانو – ۸۰٫۰۰۰ تومان",
            "چای ماسالا – ۹۰٫۰۰۰ تومان",
          ].map((item, i) => (
            <span
              key={i}
              className="px-2 py-1 rounded-full border border-gray-300 bg-gray-50"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Popular Items */}
        <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-2.5 text-[13px]">
          {[
            {
              name: "کافه لاته",
              meta1: "امتیاز میانگین: ۴٫۸ · ۶۵ نظر",
              meta2:
                "طعم متعادل، مناسب کسانی که قهوه نه خیلی تلخ دوست دارند نه خیلی شیرین.",
            },
            {
              name: "کیک هویج خانگی",
              meta1: "امتیاز میانگین: ۴٫۷ · ۴۲ نظر",
              meta2:
                "سرو با سس پنیر خامه‌ای، یکی از پرطرفدارترین دسرهای کافه آفتاب.",
            },
            {
              name: "صبحانه آفتاب",
              meta1: "امتیاز میانگین: ۴٫۵ · ۳۰ نظر",
              meta2: "ترکیبی از نان، پنیر، عسل، نیمرو، سبزی و نوشیدنی گرم.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-300 bg-gray-50 p-3"
            >
              <div className="font-semibold mb-1">{item.name}</div>
              <div className="text-[12px] text-gray-500">{item.meta1}</div>
              <div className="text-[12px] text-gray-500 mt-1">{item.meta2}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white w-full rounded-lg p-2">
        {" "}
        <h2 className="text-lg font-bold mb-2">سوالات متداول</h2>
        {/* List */}
        <div className="mt-1 text-[13px]">
          {faqs.map((item, i) => (
            <div key={i} className="mb-2">
              <div className="font-semibold">{item.q}</div>
              <div className="text-gray-500">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white w-full rounded-lg p-2">
        <h2 className="text-lg font-bold mb-3">اطلاعات تماس</h2>

        {/* Contact list */}
        <ul className="list-none text-[14px]">
          <li className="mb-1">
            <strong>آدرس:</strong> تهران، ونک، خیابان مثال، پلاک ۱۲
          </li>
          <li className="mb-1">
            <strong>تلفن:</strong> ۰۲۱-۱۲۳۴۵۶۷۸
          </li>
          <li className="mb-1">
            <strong>وب‌سایت:</strong> examplecafe.ir
          </li>
          <li className="mb-1">
            <strong>اینستاگرام:</strong> @aftab.cafe
          </li>
        </ul>

        {/* Reservation box */}
        <div className="mt-3 rounded-xl p-3 bg-gray-50 border border-dashed border-gray-300 text-[13px]">
          <div className="font-semibold mb-1">رزرو میز تلفنی</div>
          برای رزرو میز در روزهای شلوغ حداقل ۲ ساعت قبل تماس بگیرید.
          <div className="text-[13px] text-gray-500 mt-1">
            میانگین هزینه برای هر نفر: ۲۵۰–۳۸۰ هزار تومان (‎$$‎)
          </div>
        </div>

        {/* Chips */}
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "پرداخت با کارت",
            "سرویس بیرون‌بر",
            "بدون سیگار در محیط داخلی",
            "اینترنت رایگان",
          ].map((chip, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 text-[11px] px-2 py-[3px] rounded-full bg-gray-100 text-gray-700"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* Side note */}
        <div className="mt-3 text-sm text-gray-500">
          برای اطلاعات جدیدتر درباره منو یا قیمت‌ها، صفحه اینستاگرام کافه را
          دنبال کنید.
        </div>
      </div>
    </div>
  );
};

export default RelatedBussines;
