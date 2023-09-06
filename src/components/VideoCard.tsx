import { YouTubeSearchResult } from "@/types";
import { KonvertDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const VideoCard = ({ video }: { video: YouTubeSearchResult }) => {
  return (
    <div
      className="h-max w-[500px] min-[684px]:w-[290px] md:w-[310px] min-[890px]:w-[350px] min-[1132px]:w-[326px] overflow-hidden mb-10 min-[990px]:w-[410px] xl:w-[365px]"
      key={video?.id?.videoId}
    >
      <Link href={`/video/${video?.id?.videoId}`} className="">
        <Image
          src={video?.snippet?.thumbnails?.high?.url}
          alt="Image"
          width={200}
          height={200}
          className="object-cover rounded-2xl w-[500px] h-[245px] min-[390px]:h-[190px] min-[374px]:h-[180px] min-[430px]:h-[215px] min-[480px]:h-[230px] min-[510px]:h-[260px] min-[684px]:w-full min-[684px]:h-[162px] md:w-full md:h-[170px] min-[564px]:h-[282px] min-[890px]:w-full min-[890px]:h-[196px] min-[990px]:w-full min-[990px]:h-[232px]  min-[1132px]:w-full min-[1132px]:h-[180px] xl:w-full xl:h-[205px]"
        />
      </Link>
      <div className="flex flex-col mt-3 ">
        <Link
          href={`/video/${video?.id?.videoId}`}
          className="font-semibold text-base mb-1"
        >
          {video?.snippet?.title.slice(0, 60)}
        </Link>
        <Link
          href={`/chanel/${video?.snippet?.channelId}`}
          className="text-slate-500 text-sm font-normal mb-1"
        >
          {video?.snippet?.channelTitle}
        </Link>
        <span className="text-slate-500 text-sm font-normal">
          {KonvertDate(video?.snippet?.publishTime)}
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
