import { YouTubeSearchResult } from "@/types";
import VideoCard from "./VideoCard";

const Videos = ({ videos }: { videos: YouTubeSearchResult[] }) => {
  return (
    <section className=" px-6 pb-[50px]">
      <div className="flex justify-evenly flex-wrap items-start  mx-auto">
        {videos?.map((data: YouTubeSearchResult) => (
          <VideoCard key={data?.id.videoId} video={data} />
        ))}
      </div>
    </section>
  );
};

export default Videos;
