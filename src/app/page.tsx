"use client";
import Categories from "@/components/Categories";
import Videos from "@/components/Videos";
import { AllContext } from "@/contexts/AllContext";
import { fetchFormApi } from "@/utils";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const {
    state: { selectedCategory },
    dispatch,
  } = useContext(AllContext);
  useEffect(() => {
    fetchFormApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data?.items)
    );
  }, [selectedCategory]);
  return (
    <section className="md:ml-[75px] sm:mt-[130px] mt-[140px]">
      <Categories />
      <Videos videos={videos} />
    </section>
  );
}
