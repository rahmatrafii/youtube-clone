export interface ButtonIconsType {
  bg?: string;
  type?: "submit" | "button";
  size?: string;
  p?: string;
  children: React.ReactNode;
  text: string;
  styles?: string;
  positions?: string;
  onClick?: any;
}

export interface IconType {
  name: string;
  src: string;
}

export interface CategoriesProps {
  selected: string;
  setSelected: Function;
}
export interface YouTubeSearchResult {
  kind: "youtube#searchResult";
  id: {
    kind: "youtube#video";
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}
