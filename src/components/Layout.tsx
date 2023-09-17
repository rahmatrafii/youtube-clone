"use client";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  return (
    <>
      <Header />
      <Sidebar />
      <main
        className={`${path === "/" ? "pt-[140px]" : "pt-[70px]"} ${
          path === "/watch" ? "pl-[0]" : "md:pl-[60px]"
        }  w-full relative `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
