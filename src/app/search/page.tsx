import SearchVideos from "@/components/SearchVideos";
import Videos from "@/components/Videos";
import { fetchFormApi } from "@/utils";
import React from "react";

const page = async ({ searchParams }: any) => {
  const AllVideos = await fetchFormApi(
    `search?part=snippet&q=${searchParams.q}`
  ).then((data) => {
    return data?.items;
  });
  console.log(AllVideos);
  const isDataEmpty =
    !Array.isArray(AllVideos) || AllVideos.length > 1 || !AllVideos;
  return (
    <div>
      {isDataEmpty ? <SearchVideos videos={AllVideos} /> : <h1>Nothing....</h1>}
    </div>
  );
};

export default page;
