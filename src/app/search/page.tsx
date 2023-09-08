import SearchVideos from "@/components/SearchVideos";
import { fetchFormApi } from "@/utils";
import React from "react";

const Search = async ({ searchParams }: { searchParams: { q: string } }) => {
  const q = searchParams?.q;
  const AllVideos = await fetchFormApi(`search?part=snippet&q=${q}`).then(
    (data) => {
      return data?.items;
    }
  );
  const isDataEmpty =
    !Array.isArray(AllVideos) || AllVideos.length > 1 || !AllVideos;
  return (
    <div>
      {isDataEmpty ? <SearchVideos videos={AllVideos} /> : <h1>Nothing....</h1>}
    </div>
  );
};

export default Search;
