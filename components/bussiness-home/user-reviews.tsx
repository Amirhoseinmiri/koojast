import React from "react";

type UserReviewProps = {
  name: string;
  daysAgo: string;
  stars: number;
  comment: string;
  tags?: string[];
};

export const UserReview: React.FC<UserReviewProps> = ({
  name,
  daysAgo,
  stars,
  comment,
  tags = [],
}) => {
  return (
    <div className="border rounded-2xl p-3 bg-white mt-2">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-gray-800">{name}</h3>
        {/* <span className="text-sm text-gray-500">{daysAgo}</span> */}
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: stars }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Stars */}
      {/* <div className="flex items-center gap-1 mt-1">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">
            ★
          </span>
        ))}
      </div> */}
      <span className="text-gray-500 text-xs">۴ روز پیش · بازدید برای کار</span>

      {/* Comment */}
      <p className="text-gray-700 mt-3 leading-7">{comment}</p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex gap-2 flex-wrap mt-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-xl text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
