"use client";
import { sidebar } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  const desableSidebar = ["/watch"];

  return (
    <section
      className={`fixed md:w-[70px] md:h-full mb-1 md:mb-0 h-[60px] w-full bottom-0 md:bottom-0  left-0 md:top-[60px] md:100vh   bg-white z-10 ${
        desableSidebar.includes(pathName) ? "sm:hidden" : ""
      }`}
    >
      <div className="container mx-auto px-1 z-[1] bg-white ">
        <div className="flex md:flex-col flex-row justify-evenly">
          {sidebar.map(({ name, src }) => (
            <Link
              href={"/"}
              key={name}
              className="w-[65px] h-[75px] flex-center flex-col sm:hover:bg-gray-200 rounded-lg"
            >
              <Image src={src} alt={name} width={22} height={22} />
              <span key={name} className="text-[10px] font-normal mt-1">
                {name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
