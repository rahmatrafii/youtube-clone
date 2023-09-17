import VideoPlayer from "@/components/VideoPlayer";
import RelatedVideoCard from "@/components/relatedVideoCard";
import { VideoDetailsType, YouTubeSearchResult } from "@/types";
import { fetchFormApi } from "@/utils";

const Watch = async ({ searchParams }: any) => {
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
