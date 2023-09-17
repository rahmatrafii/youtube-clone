import ChannelCategories from "@/components/ChannelCategories";
import ChannelInfo from "@/components/ChannelInfo";
import Videos from "@/components/Videos";
import { ChannelDetailType } from "@/types";
import { fetchFormApi } from "@/utils";
import React from "react";

const Channel = async ({ searchParams }: { searchParams: { id: string } }) => {
  const channelDetail: ChannelDetailType = await fetchFormApi(
    `channels?part=snippet&id=${searchParams.id}`
  ).then((data) => data?.items[0]);
  const videos: any = await fetchFormApi(
    `search?channelId=${searchParams.id}&part=snippet&order=date`
  ).then((data) => data?.items);

  return (
    <section className="">
      <div className="">
        <ChannelInfo channelDetail={channelDetail} />
        <ChannelCategories />
        <Videos videos={videos} />
      </div>
    </section>
  );
};

export default Channel;
