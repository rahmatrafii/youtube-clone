"use client";
import { categoris } from "@/constants/constants";
import { motion } from "framer-motion";
import React, { useEffect, useState, useContext } from "react";
import { AllContext } from "@/contexts/AllContext";

const Categories = () => {
  const {
    state: { selectedCategory },
    dispatch,
  } = useContext(AllContext);
  const [width, setWidth] = useState(0);
  const carousel = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollWidth = carousel.current ? carousel.current.scrollWidth : 0;
    const offsetWidth = carousel.current ? carousel.current.offsetWidth : 0;
    setWidth(scrollWidth - offsetWidth);
  }, []);
  return (
    <div className="fixed md:left-[70px] left-0 top-[60px] z-[1] right-0 px-4  overflow-hidden  bg-white">
      <motion.div ref={carousel} className="mx-2  overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex w-max px-4  py-3"
        >
          {categoris.map((data: string) => (
            <motion.button
              key={data}
              className={`${
                selectedCategory === data
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-black"
              } rounded-lg py-2 px-3  whitespace-nowrap  transition text-black text-sm m-1`}
              onClick={() =>
                dispatch({ type: "SELECTED_CATEGORY", payload: data })
              }
            >
              <span>{data}</span>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Categories;
