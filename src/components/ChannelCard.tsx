import { KonvertSubscriber, fetchFormApi } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChannelCard = async ({ data }: any) => {
  const channelDetail = await fetchFormApi(
    `channels?part=snippet&id=${data?.id?.channelId}`
  ).then((data) => data?.items[0]);
  const subscriber = channelDetail?.statistics?.subscriberCount;
  return (
    <div className="w-full h-[150px] min-[684px]:h-[200px] flex justify-center items-center min-[684px]:justify-start ">
      <Link
        href={`/channel?id=${data?.id?.channelId}`}
        className="mr-7  min-[684px]:mr-4 min-[480px]:h-[230px] min-[510px]:h-[260px] min-[564px]:h-[282px] min-[684px]:w-[290px] min-[684px]:h-[162px] xl:w-[410px] xl:h-[230px] lg:w-[350px] lg:h-[196px] flex-shrink-0 flex-center"
      >
        <Image
          src={data?.snippet?.thumbnails?.high?.url}
          alt="channel image"
          width={40}
          height={40}
          className=" rounded-full h-[100px] w-[100px] min-[480px]:h-[110px] min-[480px]:w-[110px] sm:w-[135px] sm:h-[135px] object-cover"
        />
      </Link>
      <div className="flex flex-col min-[684px]:flex-row min-[684px]:flex-grow justify-between">
        <div className="min-[684px]:mr-4">
          <Link
            href={`/channel?id=${data?.id?.channelId}`}
            className="mb-2 text-xs sm:text-sm md:text-lg font-medium"
          >
            {data?.snippet?.title}
          </Link>
          <div className="min-[684px]:flex items-center  text-xs min-[684px]:mb-2">
            <h5 className="text-slate-500 ">
              {channelDetail?.snippet?.customUrl}
            </h5>
            <div className="w-[3px] h-[3px] rounded-full hidden min-[684px]:flex bg-slate-500 mx-1" />
            <span className="text-slate-500 ">
              {KonvertSubscriber(subscriber)} Subscriber
            </span>
          </div>

          <p className="text-xs text-slate-500 hidden min-[684px]:flex">
            <span className=" md:hidden">
              {channelDetail?.snippet?.description.slice(0, 70)} ...
            </span>
            <span className="hidden md:flex lg:hidden">
              {channelDetail?.snippet?.description.slice(0, 100)} ...
            </span>
            <span className="hidden lg:flex">
              {channelDetail?.snippet?.description.slice(0, 130)} ...
            </span>
          </p>
        </div>
        <button className="min-[684px]:flex-shrink-0 flex-center text-sm font-medium bg-black text-white h-[35px] w-[100px] rounded-full mt-2">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default ChannelCard;
