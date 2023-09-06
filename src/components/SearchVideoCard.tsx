import { YouTubeSearchResult } from "@/types";
import { KonvertDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SearchVideoCard = ({ video }: { video: YouTubeSearchResult }) => {
  return (
    <div
      className="h-max w-[500px] min-[684px]:w-full min-[684px]:flex mb-7"
      key={video?.id?.videoId}
    >
      <Link
        href={`/video/${video?.id?.videoId}`}
        className="h-max w-max  flex-none min-[684px]:mr-4"
      >
        <Image
          src={video?.snippet?.thumbnails?.high?.url}
          alt="Image"
          width={200}
          height={200}
          className="object-cover rounded-2xl w-[500px] h-[245px] min-[390px]:h-[190px] min-[374px]:h-[180px] min-[430px]:h-[215px] min-[480px]:h-[230px] min-[510px]:h-[260px] min-[564px]:h-[282px] min-[684px]:w-[290px] min-[684px]:h-[162px] xl:w-[410px] xl:h-[230px] lg:w-[350px] lg:h-[196px] border border-white"
        />
      </Link>
      <div className="flex flex-col mt-3 ">
        <Link
          href={`/video/${video?.id?.videoId}`}
          className="font-semibold text-base mb-1 lg:mb-2"
        >
          {video?.snippet?.title}
        </Link>
        <span className="text-slate-500 text-sm font-normal mb-1 lg:mb-2">
          {KonvertDate(video?.snippet?.publishTime)}
        </span>
        <Link
          href={`/chanel/${video?.snippet?.channelId}`}
          className="text-slate-500 text-sm font-normal mb-1"
        >
          {video?.snippet?.channelTitle}
        </Link>
      </div>
    </div>
  );
};

export default SearchVideoCard;
