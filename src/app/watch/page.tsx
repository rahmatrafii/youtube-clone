import VideoPlayer from "@/components/VideoPlayer";
import RelatedVideoCard from "@/components/relatedVideoCard";
import { VideoDetailsType, YouTubeSearchResult } from "@/types";
import { fetchFormApi } from "@/utils";
import { Metadata } from "next";
type Props = {
  searchParams: { v: string };
};
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  try {
    const videoDetail: VideoDetailsType = await fetchFormApi(
      `videos?part=snippet,statistics&id=${searchParams.v}`
    ).then((data) => data?.items[0]);

    return {
      title: videoDetail?.snippet?.title,
      description: videoDetail?.snippet?.description,
      alternates: {
        canonical: `watch?v=${searchParams.v}`,
        languages: {
          "en-US": `en-US/watch?v=${searchParams.v}`,
          "de-DE": `de-DE/watch?v=${searchParams.v}`,
        },
      },
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "Error",
    };
  }
}

const Watch = async ({ searchParams }: Props) => {
  const videoDetail: VideoDetailsType = await fetchFormApi(
    `videos?part=snippet,statistics&id=${searchParams.v}`
  ).then((data) => data?.items[0]);

  const realatedVideos: YouTubeSearchResult[] = await fetchFormApi(
    `search?part=snippet&relatedToVideoId=${searchParams.v}&type=video`
  ).then((data) => data?.items);

  return (
    <section className=" px-6 min-[1000px]:flex">
      <VideoPlayer videoDetail={videoDetail} />
      <div className="flex-grow  flex justify-evenly flex-wrap items-start mx-auto">
        {realatedVideos?.map((video) => (
          <RelatedVideoCard video={video} key={video.id.videoId} />
        ))}
      </div>
    </section>
  );
};

export default Watch;
