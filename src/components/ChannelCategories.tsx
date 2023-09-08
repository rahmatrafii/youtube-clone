"use client";
import { motion } from "framer-motion";

import React, { useEffect, useState, useRef } from "react";
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
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollWidth = carousel.current ? carousel.current.scrollWidth : 0;
    const offsetWidth = carousel.current ? carousel.current.offsetWidth : 0;
    setWidth(scrollWidth - offsetWidth);
  }, []);
  return (
    <div className="my-5">
      <nav className="shadow-lg relative md:shadow-none md:border-b">
        <motion.div ref={carousel} className="mx-2  overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex w-max px-4  "
          >
            {button.map((data: string) => (
              <motion.button
                key={data}
                className={`${
                  data === "VIDEO"
                    ? "border-b-[1px] border-black md:border-b-[2px]"
                    : ""
                } flex-shrink-0  w-[130px] font-medium text-sm flex-center py-3 mr-1 `}
              >
                <span>{data}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </nav>
    </div>
  );
};

export default ChannelCategories;
