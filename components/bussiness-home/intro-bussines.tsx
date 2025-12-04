import React from "react";

const IntroBussines = () => {
  const similarBusinesses = [
    {
      name: "کافه شبنم",
      description: "امتیاز ۴٫۴ · ۵ دقیقه پیاده · فضای دنج برای قرار دوستانه",
    },
    {
      name: "کافه‌کتاب سایه",
      description: "امتیاز ۴٫۷ · فضای کتابخانه‌ای · مناسب مطالعه و کار طولانی",
    },
    {
      name: "کافه روف‌تاپ شهر",
      description: "امتیاز ۴٫۵ · ویوی شهر · مناسب قرارهای عصرگاهی",
    },
  ];

  return (
    <div className="bg-white rounded-lg max-h-fit p-4 col-span-4 w-full lg:w-[35%]">
      <h2 className="text-lg font-semibold mb-4">
        کسب‌وکارهای مشابه در نزدیکی
      </h2>{" "}
      <div className="text-[13px] space-y-2">
        {similarBusinesses.map((item, index) => (
          <div key={index}>
            {" "}
            <strong>{item.name}</strong> <p>{item.description}</p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default IntroBussines;
