import SearchVideoCard from "./SearchVideoCard";
import ChannelCard from "./ChannelCard";

const SearchVideos = ({ videos }: { videos: any[] }) => {
  return (
    <section className=" px-6 pb-[50px]">
      <div className="flex justify-evenly flex-wrap items-start mx-auto">
        {videos?.map((data: any) => (
          <>
            {data?.id?.channelId && <ChannelCard data={data} />}
            {data?.id?.videoId && (
              <SearchVideoCard key={data?.id?.videoId} video={data} />
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default SearchVideos;
