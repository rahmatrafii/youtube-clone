import React from "react";

interface ButtonVideoDetailsType {
  text?: string;
  children?: React.ReactNode | string;
  rounded?: string;
  breackPoint?: string;
  p?: string;
  textHover?: string;
  mr?: string;
}

const ButtonVideoDetails = ({
  text,
  children,
  rounded = "rounded-full",
  breackPoint,
  textHover,
  p = "px-3 py-2",
  mr = "mr-2",
}: ButtonVideoDetailsType) => {
  return (
    <button
      className={`flex relative group ${mr} items-center bg-gray-200 bg-opacity-60 ${p}  ${rounded} ${breackPoint} hover:bg-opacity-100 transition`}
    >
      {children} {text && <span className="ml-2 text-[16px]">{text}</span>}
      {textHover ? (
        <p className="absolute text-[13px] invisible sm:group-hover:visible delay-75 transition  rounded-sm w-max p-2  bg-slate-900 bg-opacity-60 text-white translate-y-14 left-1/2 -translate-x-1/2">
          {textHover}
        </p>
      ) : null}
    </button>
  );
};

export default ButtonVideoDetails;
