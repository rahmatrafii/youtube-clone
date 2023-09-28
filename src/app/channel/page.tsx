import ChannelCategories from "@/components/ChannelCategories";
import ChannelInfo from "@/components/ChannelInfo";
import Videos from "@/components/Videos";
import { ChannelDetailType } from "@/types";
import { fetchFormApi } from "@/utils";
import { Metadata } from "next";
import React from "react";

type Props = {
  searchParams: { id: string };
};
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const channelDetail: ChannelDetailType = await fetchFormApi(
    `channels?part=snippet&id=${searchParams.id}`
  ).then((data) => data?.items[0]);

  return {
    title: `${channelDetail?.snippet?.title}`,
  };
}

const Channel = async ({ searchParams }: Props) => {
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
