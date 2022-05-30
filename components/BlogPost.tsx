import React from "react";
import Link from "next/link";
const BlogPost = ({
  title,
  img,
  date,
  duration,
  link,
  width = "w-full",
  alternative = false,
}: {
  title: string;
  img: any;
  date: Date;
  duration?: number;
  width?: string;
  link: string;
  alternative?: boolean;
}) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden ${width} h-full cursor-pointer`}
    >
      <Link href={link}>
        <div className={`${alternative ? "sm:flex md:h-[150px]" : ""}`}>
          <img
            src={img.fields.file.url}
            alt={img.fields.file.title}
            className={`w-full h-[150px] object-cover ${
              alternative ? "sm:w-[200px] md:h-[150px]" : ""
            }`}
          />
          <div className="p-4">
            <div className={`flex ${!alternative ? "justify-between" : ""}`}>
              <p
                className={`text-textLight text-sm ${
                  alternative ? "mr-4" : ""
                }`}
              >
                {new Date(date).toLocaleDateString("cs-CZ")}
              </p>
              {duration && (
                <p className="text-textLight text-sm flex items-center">
                  <i className="fas fa-clock mr-2"></i>
                  <p>{duration} min</p>
                </p>
              )}
            </div>
            <h3 className="font-bold text-xl mb-2 break-normal">{title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPost;
