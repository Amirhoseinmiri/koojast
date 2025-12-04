import React from "react";

export const ReviewForm = () => {
  return (
    <div className="mt-2.5 pt-2 border-t border-dashed border-gray-300 text-[13px]">
      {/* Row 1 */}
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <label className="font-medium">امتیاز شما:</label>
        <span className="text-[16px] text-yellow-400">★★★★★</span>
        <span className="text-[12px] text-gray-400">
          (در نسخه واقعی با کلیک و JS انتخاب می‌شود)
        </span>
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <label htmlFor="review-text" className="font-medium">
          تجربه خود را بنویسید:
        </label>
      </div>

      {/* Textarea */}
      <textarea
        id="review-text"
        placeholder="درباره کیفیت، فضا، رفتار پرسنل و نکات مثبت/منفی بنویسید..."
        className="w-full min-h-[70px] rounded-[10px] border border-gray-300 p-2 text-[13px] resize-y outline-none"
      ></textarea>

      {/* Button */}
      <button
        type="button"
        className="mt-1.5 rounded-full px-4 py-1.5 bg-blue-600 text-white text-[13px]"
      >
        ثبت نظر (نمونه)
      </button>
    </div>
  );
};
