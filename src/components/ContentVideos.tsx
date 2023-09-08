"use client";
import React from "react";
import ReactPlayer from "react-player";

const ContentVideos = ({ id }: { id: string }) => {
  return (
    <div className="w-full min-[360px]:h-[184px] min-[390px]:h-[201px] min-[420px]:h-[219px] min-[480px]:h-[254px] min-[540px]:h-[286px] min-[600px]:h-[321px] min-[690px]:h-[360px] md:h-[400px] min-[825px]:h-[425px] min-[890px]:h-[480px] min-[970px]:h-[510px] min-[1000px]:h-[350px] min-[1200px]:h-[440px] min-[1300px]:h-[490px] mb-5">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        width={"100%"}
        height={"100%"}
        className="object-cover"
        controls
      />
    </div>
  );
};

export default ContentVideos;
