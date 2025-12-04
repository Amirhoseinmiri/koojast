import React from "react";

const PupularTags = () => {
  return (
    <div className="flex flex-col gap-2 px-4 col-span-3">
      <h2>نکات پرتکرار در نظرات:</h2>
      <div className="flex flex-wrap gap-1">
        <span className="px-2 text-sm py-2 bg-[#f3f4f6] border border-[#e5e7eb] rounded-2xl">
          مناسب کار با لپ‌تاپ
        </span>
        <span className="px-2 text-sm py-2 bg-[#f3f4f6] border border-[#e5e7eb] rounded-2xl">
          اینترنت سریع
        </span>
        <span className="px-2 text-sm py-2 bg-[#f3f4f6] border border-[#e5e7eb] rounded-2xl">
          رفتار دوستانه
        </span>
        <span className="px-2 text-sm py-2 bg-[#f3f4f6] border border-[#e5e7eb] rounded-2xl">
          محیط آرام
        </span>
      </div>
    </div>
  );
};

export default PupularTags;
