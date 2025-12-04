import React from "react";

export const ReviewsHeader = () => {
  return (
    <div className="flex justify-between items-end mb-2 p-2 my-4 gap-2 w-full col-span-3">
      {/* Stats */}
      <div className="flex gap-4 items-center p-4 flex-wrap">
        <div>
          <h2 className="text-xl mb-4">بررسی کاربران</h2>
          <div className="text-3xl font-bold">۴٫۶</div>
          <div className="text-[18px] text-yellow-400">★★★★★</div>
          <div className="text-sm text-gray-500">بر اساس ۱۲۸ نظر ثبت‌شده</div>
        </div>

        {/* Rating Bars */}
        <div className="flex-1 min-w-[180px] mt-4 text-[12px]">
          {/* Row */}
          <div className="flex items-center gap-2 mb-1">
            <span>کیفیت قهوه</span>
            <div className="flex-1 h-[6px] rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full bg-amber-500"
                style={{ width: "88%" }}
              ></div>
            </div>
            <span>۴٫۸</span>
          </div>

          <div className="flex items-center gap-2 mb-1">
            <span>رفتار پرسنل</span>
            <div className="flex-1 h-[6px] rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full bg-amber-500"
                style={{ width: "82%" }}
              ></div>
            </div>
            <span>۴٫۵</span>
          </div>

          <div className="flex items-center gap-2 mb-1">
            <span>فضا و دکور</span>
            <div className="flex-1 h-[6px] rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full bg-amber-500"
                style={{ width: "86%" }}
              ></div>
            </div>
            <span>۴٫۷</span>
          </div>

          <div className="flex items-center gap-2 mb-1">
            <span>ارزش در برابر قیمت</span>
            <div className="flex-1 h-[6px] rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full bg-amber-500"
                style={{ width: "80%" }}
              ></div>
            </div>
            <span>۴٫۴</span>
          </div>
        </div>
      </div>

      {/* Sort */}
      <div className="text-xs text-gray-500 mr-auto">مرتب‌سازی: جدیدترین ▾</div>
    </div>
  );
};
