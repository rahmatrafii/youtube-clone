import { PiMusicNote } from "react-icons/pi";
import { MdOutlineMovie } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiOutlineNewspaper } from "react-icons/hi";
import { AiOutlineTrophy } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFlag } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { RiFeedbackLine } from "react-icons/ri";
import { HiOutlineFire } from "react-icons/hi";
export const categoris = [
  "New",
  "Music",
  "Dance-pop",
  "Computer-Programing",
  "Live",
  "Mixes",
  "Playlists",
  "Background Music",
  "Gaming",
  "Guitar chords",
  "Dangdut",
  "Animated Films",
  "Street Food",
  "Gadgets",
  "News",
  "Lessons",
  "Anime",
  "Recently uploaded",
  "New to you",
];

export const sidebar = [
  {
    name: "Home",
    src: "home.png",
    link: "/",
  },
  {
    name: "Shorts",
    src: "shorts.png",
    link: "/shorts",
  },
  {
    name: "Subscriptions",
    src: "subscriptions.png",
    link: "/subscriptions",
  },
  {
    name: "Library",
    src: "library.png",
    link: "/library",
  },
];
export const sidebarHiden = [
  [
    {
      name: "Home",
      src: "/icon-yt/home.png",
    },
    {
      name: "Shorts",
      src: "/icon-yt/short.png",
    },
    {
      name: "Subscriptions",
      src: "/icon-yt/Subscriptions.png",
    },
  ],
  [
    {
      name: "Library",
      src: "/icon-yt/Library.png",
    },
    {
      name: "History",
      src: "/icon-yt/history2.png",
    },
    {
      name: "Your Vidios",
      src: "/icon-yt/Your Videos.png",
    },
    {
      name: "Watch Later",
      src: "/icon-yt/watch-later.png",
    },
    {
      name: "Liked Vidios",
      src: "/icon-yt/like.png",
    },
  ],
];

export const Explore = [
  {
    name: "Trending",
    icon: <HiOutlineFire />,
  },
  {
    name: "Music",
    icon: <PiMusicNote />,
  },
  {
    name: "Movies",
    icon: <MdOutlineMovie />,
  },
  {
    name: "Gaming",
    icon: <IoGameControllerOutline />,
  },
  {
    name: "News",
    icon: <HiOutlineNewspaper />,
  },
  {
    name: "Sports",
    icon: <AiOutlineTrophy />,
  },
];

export const MoreFromYouTube = [
  {
    name: "YouTube Premium",
    icon: null,
  },
  {
    name: "YouTube Studio",
    icon: null,
  },
  {
    name: "YouTube Music",
    icon: null,
  },
  {
    name: "YouTube Kids",
    icon: null,
  },
];

export const others = [
  {
    name: "Settings",
    icon: <IoSettingsOutline />,
  },
  {
    name: "Report History",
    icon: <BsFlag />,
  },
  {
    name: "Help",
    icon: <BiHelpCircle />,
  },
  {
    name: "Send Feedback",
    icon: <RiFeedbackLine />,
  },
];
