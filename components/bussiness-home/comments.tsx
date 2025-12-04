import React from "react";
import { UserReview } from "./user-reviews";
import { ReviewForm } from "./review-form";
const reviews = [
  {
    name: "مریم رستگار",
    daysAgo: "۴ روز پیش",
    stars: 5,
    comment:
      "یکی از بهترین کافه‌هایی که برای کار با لپ‌تاپ پیدا کردم. اینترنت سریع، نور طبیعی عالی، فقط ای کاش منو صبحانه‌شون کمی متنوع‌تر بود.",
    tags: ["مناسب کار", "نور طبیعی خوب", "قهوه عالی"],
  },
  {
    name: "علی رضایی",
    daysAgo: "۲ هفته پیش",
    stars: 4,
    comment:
      "فضا خیلی خوب و دنج بود. موزیک ملایم و برخورد پرسنل محترمانه. فقط آخر هفته‌ها کمی شلوغ می‌شود.",
    tags: ["شلوغ در آخر هفته", "پیشنهاد رزرو"],
  },
];
const Comments = () => {
  return (
    <section className="w-full mt-2 bg-white rounded-3xl p-6 col-span-3">
      <h2 className="text-xl font-bold text-gray-800 mb-6 text-right">
        بررسی کاربران
      </h2>

      {reviews.map((review, idx) => (
        <UserReview
          key={idx}
          name={review.name}
          daysAgo={review.daysAgo}
          stars={review.stars}
          comment={review.comment}
          tags={review.tags}
        />
      ))}
      <ReviewForm />
    </section>
  );
};

export default Comments;
