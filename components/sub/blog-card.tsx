import { useState } from "react";
import { Star } from "lucide-react";

type BlogCardProps = {
  title: string;
  content: string;
  date?: string;
  mark?: number; // Pre-filled rating (3-5)
  onStarClick?: (rating: number) => void;
};

export const BlogCard = ({
  title,
  content,
  date,
  mark = 0,
  onStarClick,
}: BlogCardProps) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);

  const effectiveRating = selectedStar ?? hoveredStar ?? mark;

  const handleStarClick = (rating: number) => {
    setSelectedStar(rating);
    onStarClick?.(rating);
  };

  return (
    <div className="relative flex flex-col justify-between h-[320px] w-full max-w-sm rounded-2xl border border-[#2A0E61] bg-gradient-to-br from-[#121212] to-[#1e1e2f] shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <div className="flex flex-col gap-4">
        {date && (
          <span className="inline-block self-start bg-[#2A0E61] text-xs text-white px-3 py-1 rounded-full">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        )}

        <h2 className="text-xl font-semibold text-white leading-tight line-clamp-2">
          {title}
        </h2>

        <p className="text-gray-400 text-sm line-clamp-3">{content}</p>
      </div>

      <div className="flex gap-2 mt-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={20}
            className={`cursor-pointer transition-colors ${
              effectiveRating >= star ? "text-yellow-400" : "text-gray-600"
            }`}
            onMouseEnter={() => setHoveredStar(star)}
            onMouseLeave={() => setHoveredStar(null)}
            onClick={() => handleStarClick(star)}
          />
        ))}
      </div>
    </div>
  );
};
