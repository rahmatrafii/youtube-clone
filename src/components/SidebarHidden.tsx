"use client";
import YoutubeIcons from "./YoutubeIcons";
import { useRef, useContext } from "react";
import { sidebarHiden, Explore, others } from "@/constants/constants";
import { IconType } from "@/types";
import Image from "next/image";
import { AllContext } from "@/contexts/AllContext";

const SidebarHidden = () => {
  const {
    state: { sidebarMode },
    dispatch,
  } = useContext(AllContext);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const handleClick = (e: React.MouseEvent) => {
    if (e.target === sidebarRef.current) {
      dispatch({ type: "SIDEBAR_MODE" });
    }
  };

  return (
    <section
      className={`${
        sidebarMode === "hide" ? "invisible" : "visible"
      } fixed w-full left-0  bottom-0 top-0 bg-black bg-opacity-40 z-[51]`}
      onClick={handleClick}
      ref={sidebarRef}
    >
      <div
        className={`${
          sidebarMode === "hide" ? "-translate-x-[250px]" : "-translate-x-0"
        } w-[250px] h-screen pt-3 px-4  bg-white transition-all duration-300 `}
      >
        <YoutubeIcons />
        <div className="sticky bottom-0 h-[90%] mt-2 overflow-y-auto overflow-x-hidden">
          <div className=" flex flex-col ">
            <div className="border-b-[1px] border-slate-200 py-3">
              {sidebarHiden[0].map((item: IconType) => (
                <button
                  className="flex items-center gap-x-2 w-[200px] h-[40px] rounded-md hover:bg-slate-200 px-3"
                  key={item.name}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={21}
                    height={21}
                    className="mr-3"
                  />
                  <span className="text-sm">{item.name}</span>
                </button>
              ))}
            </div>

            <div className="border-b-[1px] border-slate-200 py-3">
              {sidebarHiden[1].map((item: IconType) => (
                <button
                  className="flex items-center gap-x-2 w-[200px] h-[40px] rounded-md hover:bg-slate-200 px-3"
                  key={item.name}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={21}
                    height={21}
                    className="mr-3"
                  />
                  <span className="text-sm">{item.name}</span>
                </button>
              ))}
            </div>

            <div className="border-b-[1px] border-slate-200 py-3">
              <h3 className="mb-2">Explore</h3>
              {Explore.map(
                (item: { name: string; icon: React.JSX.Element }) => (
                  <button
                    className="flex items-center gap-x-2 text-[22px] w-[200px] h-[40px] rounded-md hover:bg-slate-200 px-3"
                    key={item.name}
                  >
                    {item.icon}
                    <span className="text-sm">{item.name}</span>
                  </button>
                )
              )}
            </div>

            <div className="border-b-[1px] border-slate-200 py-3">
              {others.map((item: { name: string; icon: React.JSX.Element }) => (
                <button
                  className="flex items-center gap-x-2 text-[22px] w-[200px] h-[40px] rounded-md hover:bg-slate-200 px-3"
                  key={item.name}
                >
                  {item.icon}
                  <span className="text-sm">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidebarHidden;
