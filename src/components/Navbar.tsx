"use client";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { HiMiniMicrophone } from "react-icons/hi2";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import Icons from "./Icons";
import YoutubeIcons from "./YoutubeIcons";
import React, { useRef, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const searchBar = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const handleClick = () => {
    searchBar.current?.classList.add("search-mobile");
    searchBar.current?.classList.remove("hidden");
    inputRef.current?.focus();
  };

  const handleClickBack = () => {
    searchBar.current?.classList.remove("search-mobile");
    searchBar.current?.classList.add("hidden");
  };
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (query.length >= 1) {
      const searchParams = new URLSearchParams(window.location.search);

      searchParams.set("q", query);

      const newPathName = `/search?${searchParams.toString()}`;

      router.push(newPathName);
    } else {
      return false;
    }
  }
  return (
    <nav className="flex justify-between items-center md:pr-10 bg-white">
      <YoutubeIcons />

      <div
        ref={searchBar}
        className="justify-center items-center hidden md:flex"
      >
        <Icons text="Back" onClick={handleClickBack} styles="md:hidden">
          <BiArrowBack />
        </Icons>
        <form onSubmit={handleSubmit} className=" flex mr-3">
          <div className="flex flex-row-reverse overflow-hidden xl:w-[500px] lg:w-[400px] md:w-[250px]">
            <input
              ref={inputRef}
              id="input-search"
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-[40px] flex-grow w-full border  peer  rounded-l-full focus:border-l-0 focus:rounded-none focus:outline-none border-slate-400 p-3 focus:border focus:border-blue-500"
            />
            <div className="h-[40px] w-[40px] invisible peer-focus:visible peer-focus:border text-[20px] peer-focus:border-blue-500 flex items-center justify-end  border peer-focus:border-r-0 rounded-l-full border-slate-400">
              <GoSearch />
            </div>
          </div>

          <button
            className="relative h-[40px] w-[64px] group rounded-r-full text-[24px] font-thin bg-slate-50  hover:bg-slate-100 flex-center border border-l-0   border-slate-400"
            id="search"
          >
            <GoSearch />
            <p className="absolute text-[13px] invisible group-hover:visible delay-75 transition  rounded-sm w-max p-2 bg-slate-900 bg-opacity-60 text-white translate-y-14 left-1/2 font-normal -translate-x-1/2">
              Search
            </p>
          </button>
        </form>
        <Icons text="search with your voice">
          <HiMiniMicrophone />
        </Icons>
      </div>

      <div className="flex items-center justify-between">
        <Icons text="Search" onClick={handleClick} styles="md:hidden">
          <GoSearch />
        </Icons>
        <Icons text="search with your voice" styles="md:hidden">
          <HiMiniMicrophone />
        </Icons>
        <Icons text="Create" bg="bg-white" p="p-2" size="text-[24px]" styles="">
          <RiVideoAddLine />
        </Icons>
        <Icons
          text="Notifications"
          bg="bg-white"
          p="p-2"
          size="text-[24px]"
          styles=""
        >
          <IoMdNotificationsOutline />
        </Icons>
        <div className=" md:ml-0">
          <Image
            src={"/icon-yt/profile.jpg"}
            alt="profile"
            width={30}
            height={30}
            className="min-w-[30px] min-h-[30px] rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
