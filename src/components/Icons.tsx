import { ButtonIconsType } from "@/types";

export default function Icons({
  p = "md:p-3 p-1",
  children,
  text,
  bg = "md:bg-slate-100",
  size = "text-[20px]",
  type = "submit",
  styles,
  onClick = () => {},
}: ButtonIconsType) {
  return (
    <button
      type={type}
      className={`relative z-10 group rounded-full mr-1 sm:mr-3 hover:bg-slate-200 cursor-pointer ${size} ${bg} ${p} ${styles}`}
      onClick={onClick}
    >
      {children}
      <p className="absolute text-[13px] invisible group-hover:visible delay-75 transition  rounded-sm w-max p-2 bg-slate-900 bg-opacity-60 text-white translate-y-7 left-1/2 -translate-x-1/2">
        {text}
      </p>
    </button>
  );
}
