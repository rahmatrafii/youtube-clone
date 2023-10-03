import { YouTubeSearchResult } from "@/types";
import { KonvertDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SearchVideoCard = ({ video }: { video: YouTubeSearchResult }) => {
  const title = video?.snippet?.title;
  const image = video?.snippet?.thumbnails?.high?.url;

  return (
    <div
      className="h-max w-[500px] min-[684px]:w-full min-[684px]:flex mb-2 "
      key={video?.id?.videoId}
    >
      <Link
        href={`/watch?v=${video?.id?.videoId}`}
        className="h-max w-max  flex-none min-[684px]:mr-4"
      >
        <Image
          src={image}
          alt="Image"
          width={200}
          height={200}
          className="object-cover rounded-2xl min-[1200px]:rounded-xl w-[500px] h-[245px] min-[390px]:h-[190px] min-[374px]:h-[180px] min-[430px]:h-[215px] min-[480px]:h-[230px] min-[510px]:h-[260px] min-[564px]:h-[282px] min-[684px]:w-[240px] min-[684px]:h-[135px] min-[1000px]:w-[170px] min-[1000px]:h-[96px] border border-white"
        />
      </Link>
      <div className="flex flex-col mt-3 min-[1000px]:mt-0 ">
        <Link
          href={`/watch?v=${video?.id?.videoId}`}
          className="font-semibold text-base mb-1 min-[1200px]:hidden min-[1000px]:text-sm"
        >
          {title.slice(0, 28)}...
        </Link>
        <Link
          href={`/watch?v=${video?.id?.videoId}`}
          className="font-semibold text-base mb-1 hidden min-[1200px]:block  min-[1000px]:text-sm"
        >
          {title.length > 150 ? <>{title.slice(0, 150)}</> : <>{title}...</>}
        </Link>
        <span className="text-slate-500 text-sm font-normal mb-1 ">
          {KonvertDate(video?.snippet?.publishTime)}
        </span>
        <Link
          href={`/channel?id=${video?.snippet?.channelId}`}
          className="text-slate-500 text-sm font-normal mb-1"
        >
          {video?.snippet?.channelTitle}
        </Link>
      </div>
    </div>
  );
};

export default SearchVideoCard;
