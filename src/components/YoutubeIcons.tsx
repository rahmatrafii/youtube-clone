import Image from "next/image";
import React from "react";
import { AllContext } from "@/contexts/AllContext";
import { useContext } from "react";

const YoutubeIcons = () => {
  const { state, dispatch } = useContext(AllContext);

  return (
    <div className="flex items-center w-[200px]">
      <button
        type="button"
        className="px-2 py-3 rounded-full mr-3 hover:bg-slate-200 cursor-pointer hidden sm:block"
        onClick={() => dispatch({ type: "SIDEBAR_MODE" })}
      >
        <Image
          src={"/icon-yt/hamburger.png"}
          alt="hamburger"
          width={26}
          height={33}
        />
      </button>
      <div>
        <Image
          src={"/icon-yt/youtube-light.png"}
          alt="youtube"
          width={105}
          height={75}
        />
      </div>
    </div>
  );
};

export default YoutubeIcons;
