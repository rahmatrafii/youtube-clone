import SidebarHidden from "./SidebarHidden";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="h-[60px] fixed py-2 top-0 z-50 w-full shadow-md md:shadow-none bg-white">
      <div className="px-4">
        <Navbar />
      </div>
      <SidebarHidden />
    </header>
  );
};

export default Header;
