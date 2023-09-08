"use client";
import { DescriptionType } from "@/types";
import React, { useState } from "react";

const Description = ({ desc, viewsCount, realise }: DescriptionType) => {
  const [paragrafMode, setParagrafMode] = useState("More");

  desc.slice(0, 16);
  const handleClick = () => {
    setParagrafMode((prev) => (prev === "More" ? "Show Less" : "More"));
  };
  return (
    <div className="bg-slate-200 w-full h-max bg-opacity-70 p-3 rounded-xl text-sm text-slate-700 hover:bg-gray-200  cursor-pointer transition-all ">
      <p className="font-semibold text-sm mb-3">
        <span className="mr-3">{viewsCount} views</span> {realise.split("T")[0]}
      </p>
      <p
        className="leading-6"
        dangerouslySetInnerHTML={{
          __html:
            paragrafMode === "More" ? `${desc.slice(0, 200)}...` : `${desc}`,
        }}
      />
      <button
        className="font-semibold px-2 py-1 rounded-md active:bg-gray-300 "
        onClick={handleClick}
      >
        {paragrafMode}
      </button>
    </div>
  );
};

export default Description;
