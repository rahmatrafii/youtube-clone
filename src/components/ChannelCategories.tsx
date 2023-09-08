import React, { useState } from "react";
const button = [
  "BERANDA",
  "VIDEO",
  "SHORTS",
  "LIVE",
  "PLAYLIST",
  "CHANNEL",
  "TENTANG",
  "PENELUSURAN",
];
const ChannelCategories = () => {
  return (
    <div className="my-5">
      <nav className="shadow-lg relative md:shadow-none md:border-b">
        {/* <button className="absolute left-0 bottom-0 p-3 rounded-full bg-white">
          <div className="w-4 h-4 border-l-[1px] border-b-[1px] border-black rotate-45" />
        </button> */}
        <div className={` flex transition`}>
          {button.map((item) => (
            <button
              key={item}
              className={`${
                item === "VIDEO"
                  ? "border-b-[1px] border-black md:border-b-[2px]"
                  : ""
              } flex-shrink-0  w-[130px] font-medium text-sm flex-center py-3 mr-1 `}
            >
              {item}
            </button>
          ))}
        </div>
        {/* <button className="absolute right-0 p-3 rounded-full bottom-0 bg-white">
          <div className="w-4 h-4 border-l-[1px] border-b-[1px] border-black -rotate-[135deg]" />
        </button> */}
      </nav>
    </div>
  );
};

export default ChannelCategories;
