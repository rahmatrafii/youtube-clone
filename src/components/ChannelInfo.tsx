import { ChannelDetailType } from "@/types";
import { KonvertSubscriber } from "@/utils";
import Image from "next/image";
import React from "react";

const ChannelInfo = ({
  channelDetail,
}: {
  channelDetail: ChannelDetailType;
}) => {
  const banner = channelDetail?.brandingSettings?.image?.bannerExternalUrl;
  const title = channelDetail?.snippet?.title;
  const profile = channelDetail?.snippet?.thumbnails?.high?.url;
  const subscriber = channelDetail?.statistics?.subscriberCount;
  const videoCount = channelDetail?.statistics?.videoCount;
  const customUrl = channelDetail?.snippet?.customUrl;
  const desc = channelDetail?.snippet?.description;

  return (
    <div>
      <Image
        src={banner}
        alt="banner"
        width={100}
        height={100}
        className="w-full h-[150px] md:h-[200px] object-cover"
      />
      <div className="px-4 md:px-8 lg:px-10 md:flex md:justify-between mt-3 md:pt-6">
        <div className="md:flex ">
          <Image
            className="w-[100px] flex-shrink-0 h-[100px] rounded-full  mb-2 md:w-[130px] md:h-[130px] md:mr-10 mx-auto  "
            alt="profile"
            height={100}
            width={100}
            src={profile}
          />
          <div className=" ">
            <h1 className="text-center md:text-start text-black font-bold mb-2 text-2xl md:font-medium">
              {title}
            </h1>
            <div className="flex-center md:justify-start mb-3">
              <span className="text-slate-700 text-xs mr-2">{customUrl}</span>
              <span className="text-slate-600 text-xs ">
                {KonvertSubscriber(subscriber)} subscriber {videoCount} video
              </span>
            </div>
            <p className="text-center md:text-start text-xs mb-3">
              {desc?.slice(0, 100)}...
            </p>
          </div>
        </div>
        <button className="bg-black text-white w-full py-2 rounded-full md:flex-shrink-0 md:flex-center text-sm font-medium  h-[35px] md:w-[100px]">
          subscribe
        </button>
      </div>
    </div>
  );
};

export default ChannelInfo;
