import { VideoDetailsType } from "@/types";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiShare, BiDownload, BiDotsHorizontalRounded } from "react-icons/bi";
import ContentVideos from "./ContentVideos";
import { KonvertDate, KonvertSubscriber, fetchFormApi } from "@/utils";
import Link from "next/link";
import Image from "next/image";
import ButtonVideoDetails from "./ButtonVideoDetails";
import Description from "./Description";

const VideoPlayer = async ({
  videoDetail,
}: {
  videoDetail: VideoDetailsType;
}) => {
  const channelDetail = await fetchFormApi(
    `channels?part=snippet&id=${videoDetail?.snippet?.channelId}`
  ).then((data) => data?.items[0]);
  const subscriber = channelDetail?.statistics?.subscriberCount;
  const desc = videoDetail?.snippet?.description;
  const likeCount = videoDetail?.statistics?.likeCount;
  const viewsCount = videoDetail?.statistics?.viewCount;
  const realise = videoDetail?.snippet?.publishedAt;
  return (
    <div className="pb-10 min-[1000px]:mr-4">
      <div className=" min-[1000px]:w-[635px] min-[1100px]:w-[700px] min-[1200px]:w-[780px] min-[1300px]:w-[860px] ">
        <div className="mb-4">
          <ContentVideos id={videoDetail?.id} />
          <h1 className="font-semibold text-xl">
            {videoDetail?.snippet?.title}
          </h1>
        </div>
        <div className="min-[675px]:flex justify-between items-center ">
          <div className="flex items-center mb-4  min-[675px]:mb-0 min-[1000px]:mb-4 ">
            <Link
              href={`/channel?id=${channelDetail?.id?.channelId}`}
              className="mr-1 lg:mr-3 flex-shrink-0 flex-center "
            >
              <Image
                src={channelDetail?.snippet?.thumbnails?.high?.url}
                alt="channel image"
                width={40}
                height={40}
                className=" rounded-full h-[40px] w-[40px]  object-cover"
              />
            </Link>
            <div className="flex flex-col mr-1 lg:mr-3">
              <Link
                href={`/channel?id=${channelDetail?.id?.channelId}`}
                className="text-base font-semibold mr-3 min-[1100px]:hidden"
              >
                {videoDetail?.snippet?.channelTitle.slice(0, 14)}...
              </Link>
              <Link
                href={`/channel?id=${channelDetail?.id?.channelId}`}
                className="text-base font-semibold mr-3 hidden min-[1100px]:block"
              >
                {videoDetail?.snippet?.channelTitle}
              </Link>
              <span className="text-xs text-slate-500">
                {KonvertSubscriber(subscriber)} subscribers
              </span>
            </div>
            <button className="flex-center text-sm font-medium bg-black text-white h-[35px] w-[100px] rounded-full">
              Subscribe
            </button>
          </div>
          <div className="flex items-center  text-[20px] mb-5">
            <div className="flex mr-2  items-center   rounded-full w-max">
              <ButtonVideoDetails
                text={`${KonvertSubscriber(likeCount)}`}
                textHover="I Like This"
                rounded="rounded-l-full"
                mr="mr-0"
              >
                <AiOutlineLike />
              </ButtonVideoDetails>
              <div className="h-[30px] w-[1px] bg-slate-300" />

              <ButtonVideoDetails
                textHover="I Dislike This"
                rounded="rounded-r-full"
                p="px-3 py-[10px]"
              >
                <AiOutlineDislike />
              </ButtonVideoDetails>
            </div>
            <ButtonVideoDetails text="Share" textHover="Share">
              <BiShare />
            </ButtonVideoDetails>
            <ButtonVideoDetails
              text="Download"
              breackPoint="hidden min-[896px]:flex  min-[1000px]:hidden"
              textHover="Download"
            >
              <BiDownload />
            </ButtonVideoDetails>
            <ButtonVideoDetails>
              <BiDotsHorizontalRounded />
            </ButtonVideoDetails>
          </div>
        </div>
        <Description desc={desc} viewsCount={viewsCount} realise={realise} />
      </div>
    </div>
  );
};

export default VideoPlayer;
