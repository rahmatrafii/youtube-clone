import { YouTubeSearchResult } from "@/types";
import SearchVideoCard from "./SearchVideoCard";

const SearchVideos = ({ videos }: { videos: YouTubeSearchResult[] }) => {
  return (
    <section className="md:ml-[75px] mt-[80px] px-6 pb-[50px]">
      <div className="flex justify-evenly flex-wrap items-start  mx-auto">
        {videos?.map((data: YouTubeSearchResult) => (
          <SearchVideoCard key={data.id.videoId} video={data} />
        ))}
      </div>
    </section>
  );
};

export default SearchVideos;
