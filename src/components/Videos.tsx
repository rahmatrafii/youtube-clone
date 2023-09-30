import { YouTubeSearchResult } from "@/types";
import VideoCard from "./VideoCard";

const Videos = ({ videos }: { videos: YouTubeSearchResult[] }) => {
  return (
    <section className=" px-4 pb-[50px] w-full">
      <div className="flex sm:justify-evenly flex-wrap justify-center  ">
        {videos?.map((data: YouTubeSearchResult) => (
          <VideoCard key={data?.id.videoId} video={data} />
        ))}
      </div>
    </section>
  );
};

export default Videos;
