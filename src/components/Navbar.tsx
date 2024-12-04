import { Link } from "react-router-dom";
import { assets } from "../../public/assets/images";
import { useState } from "react";
import { navData } from "../data/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(false);
  };

  return (
    <header className="w-full px-8 lg:px-20 lg:pt-7 pb-4 pt-5 sticky border-b border-b-appPurple/10 backdrop-blur-md">
      <nav className="w-full flex justify-between items-center">
        {/* logo */}
        <div>
          <Link to={"/"} className="flex items-center gap-1.5">
            <img src={assets.logo} alt="vidiTech Logo" className="" />
            <span className="font-extrabold text-xl text-appPurple">
              vidiTech
            </span>
          </Link>
        </div>

        {/* nav menus */}
        <ul className="hidden lg:flex justify-center items-center gap-6 w-full text-base sm:text-sm text-appNavy">
          {navData.map((navLinks, index) => (
            <li key={index}>
              <Link to={navLinks.route}>{navLinks.title}</Link>
            </li>
          ))}
        </ul>

        <button className="hidden lg:block text-base bg-appPurple py-2.5 rounded-lg px-2 max-w-[8rem] w-full text-white">
          <Link to={"/contact-us"}>Contact</Link>
        </button>
        {/* hamburger menu icon */}
        <span
          onClick={() => setNav(!nav)}
          className="lg:hidden flex cursor-pointer"
        >
          <Icon icon="hugeicons:menu-11" className="text-2xl text-[#111111]" />
        </span>

        {/* side drawer menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full max-w-[30rem] lg:hidden z-999 duration-300 px-12 py-8 bg-appWhite h-screen overflow-y-auto border-r border-r-black/10"
              : "fixed left-[-100%] top-0 h-full z-10"
          }
        >
          <div className="flex justify-between items-center">
            <Link to={"/"} className="flex items-center gap-1.5">
              <img src={assets.logo} alt="vidiTech Logo" className="" />
              <span className="font-bold text-xl text-appPurple">vidiTech</span>
            </Link>
            <span
              onClick={() => setNav(!nav)}
              className="cursor-pointer text-xl"
            >
              <Icon icon="line-md:menu-to-close-alt-transition" />
            </span>
          </div>
          <ul className="flex flex-col gap-y-8 mt-12 text-[15px]">
            {navData.map((navLinks, index) => (
              <li
                key={index}
                onClick={handleNav}
                className=" hover:text-appPurple hover:duration-300"
              >
                <Link to={navLinks.route}>{navLinks.title}</Link>
              </li>
            ))}
          </ul>
          <div className="my-14">
            <button className="text-base bg-appPurple py-2.5 rounded-lg px-2 max-w-[8rem] w-full text-white hover:bg-transparent hover:border hover:border-appPurple/35 hover:text-appPurple hover:ease-in-out hover:duration-300">
              <Link to={"/contact-us"} onClick={handleNav}>
                Contact
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
