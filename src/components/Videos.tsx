import { YouTubeSearchResult } from "@/types";
import VideoCard from "./VideoCard";

const Videos = ({ videos }: { videos: YouTubeSearchResult[] }) => {
  return (
    <section className="md:ml-[75px] sm:mt-[130px] mt-[140px] px-6 ">
      <div className="flex justify-evenly flex-wrap items-start  mx-auto">
        {videos.map((data: YouTubeSearchResult) => (
          <VideoCard key={data?.id.videoId} video={data} />
        ))}
      </div>
    </section>
  );
};

export default Videos;
