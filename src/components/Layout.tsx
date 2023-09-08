"use client";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const desableSidebar = ["/watch"];
  return (
    <>
      <Header />
      {!desableSidebar.includes(pathName) && <Sidebar />}
      {children}
    </>
  );
};

export default Layout;
