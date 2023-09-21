import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import menuImg from "./Images/menu.png";
import comLogo from "./Images/commbank-favicon.png";
import searchImg from "./Images/search.png";
import lockImg from "./Images/lock.png";
import closeIcon from "./Images/close.png";

type MenuProps = {
  isOpen: Boolean;
};

type SearchProps = {
  searchOpen: Boolean;
};

interface NavBarProps {
  onMenuToggle: () => void;
  onSearchToggle: () => void;
}

const Menu = ({ isOpen }: MenuProps) => {
  return (
    <>
      <div
        className={`${
          isOpen
            ? "transform translate-x-0 transition-transform ease-in-out duration-600 w-full h-full"
            : "transform translate-x-full"
        } block w-full h-full bg-greyBlack text-white`}
      >
        <ul className="list-none ml-2 mr-2 py-2">
          <li className="text-xl py-2 hover:bg-blueBlack">
            <a href="#" className="no-underline">
              Banking
            </a>
          </li>
          <li className="text-xl py-2 hover:bg-blueBlack">
            <a href="#" className="no-underline">
              Home loans
            </a>
          </li>
          <li className="text-xl py-2 hover:bg-blueBlack">
            <a href="#" className="no-underline">
              Insurance
            </a>
          </li>
          <li className="text-xl py-2 hover:bg-blueBlack">
            <a href="#" className="no-underline">
              Investing & super
            </a>
          </li>
          <li className="text-xl py-2 hover:bg-blueBlack">
            <a href="#" className="no-underline">
              Business
            </a>
          </li>
          <li className="text-xl py-2 hover:bg-blueBlack">
            <a href="#" className="no-underline">
              Institutional
            </a>
          </li>
          <hr className="py-2" />
          <li className="text-xl py-2 hover:bg-blueBlack">
            <a href="#" className="no-underline">
              Locate us
            </a>
          </li>
          <li className="text-xl py-2 hover:bg-blueBlack">
            <a href="#" className="no-underline">
              Help & support
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

const Search = ({ searchOpen }: SearchProps) => {
  return (
    <>
      <div
        className={`${
          searchOpen
            ? "transform translate-x-0 transition-transform ease-in-out duration-600 w-full h-full"
            : "transform translate-x-full"
        } flex flex-col w-full h-full bg-greyWhite shadow radius-sm text-black  lg:w-screen`}
      >
        <span className="mt-4 ml-6 text-xl ">
          <b>Popular searches: </b>
        </span>
        <div className="flex flex-row w-full ml-2">
          <ul className="list-none ml-2 mr-2 py-2 md:w-full">
            <li className="text-xl py-2 px-2 hover:bg-greyBlue">
              <a href="#" className="flex items-center no-underline">
                <span className="mr-5">Banking</span>
                <MdNavigateNext />
              </a>
            </li>
            <li className="text-xl py-2 px-2 hover:bg-greyBlue">
              <a href="#" className="flex items-center no-underline">
                <span className="mr-5">Home loans</span>
                <MdNavigateNext />
              </a>
            </li>
            <li className="text-xl py-2 px-2 hover:bg-greyBlue">
              <a href="#" className="flex flex-cols items-center no-underline">
                <span className="mr-5">Insurance</span>
                <MdNavigateNext />
              </a>
            </li>
          </ul>
          <ul className="list-none py-2 md:w-full">
            <li className="text-xl py-2 px-2 hover:bg-greyBlue">
              <a href="#" className="flex items-center no-underline">
                <span className="mr-5">Investing & super</span>
                <MdNavigateNext />
              </a>
            </li>
            <li className="text-xl py-2 px-2 hover:bg-greyBlue">
              <a href="#" className="flex items-center no-underline">
                <span className="mr-5">Business</span>
                <MdNavigateNext />
              </a>
            </li>
            <li className="text-xl py-2 px-2 hover:bg-greyBlue">
              <a href="#" className="flex items-center no-underline">
                <span className="mr-5">Institutional</span>
                <MdNavigateNext />
              </a>
            </li>
          </ul>
        </div>
        <hr className="mr-2 ml-2" />
        <div className="flex flex-row ml-2 items-center md:ml-0 md:mr-0">
          <ul className="list-none ml-2 py-2 md:w-full md:ml-4">
            <li className="text-xl py-2 px-2 hover:bg-greyBlue">
              <a href="#" className="flex items-center no-underline">
                <span className="mr-5">Locate us</span>
                <MdNavigateNext />
              </a>
            </li>
          </ul>
          <ul className="list-none py-2 md:w-full md:ml-0 md:mr-0">
            <li className="text-xl py-2 ml-5 px-2 md:ml-2 hover:bg-greyBlue">
              <a href="#" className="flex items-center no-underline">
                <span className="mr-5">Help & support</span>
                <MdNavigateNext />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const NavBar = ({ onMenuToggle, onSearchToggle }: NavBarProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  function showMenu() {
    setOpen(!open);
    setSearch(false);
    onMenuToggle();
  }

  function showSearch() {
    setSearch(!search);
    setOpen(false);
    onSearchToggle();
  }

  return (
    <>
      <nav
        className={`${
          search ? `flex flex-row` : `grid grid-cols-2`
        } bg-white w-screen h-10 sticky shadow md:h-20`}
      >
        <div className={`${search ? `hidden` : `visible`} flex flex-row mr-0`}>
          <div className="items-center sm:hidden">
            <button type="button" onClick={showMenu}>
              <img
                src={menuImg}
                alt="menuImg"
                className="w-7 mt-2 ml-2 overflow-hidden"
              />
            </button>
          </div>
          <div className="sm:flex sm:flex-row sm:items-center">
            <img
              src={comLogo}
              alt="comLogo"
              className="mt-1.5 sm:mt-0 w-7 ml-9 cursor-pointer sm:w-10 sm:ml-5"
            />
            <div
              className={`flex flex-row items-center space-x-4 ml-4 w-auto ${
                open ? "hidden sm:flex" : "hidden sm:flex"
              }`}
            >
              <ul className="flex justify-between items-center list-none p-0 m-0 ml-4">
                <li className="md:text-xs md:mr-5 lg:text-sm lg:mr-7">
                  <a
                    href="#"
                    className="no-underline hover:border-b-4 hover:border-b-deepYellow"
                  >
                    <span>
                      <b className="">Banking</b>
                    </span>
                  </a>
                </li>
                <li className="md:text-xs md:mr-5 lg:text-sm  lg:mr-7">
                  <a
                    href="#"
                    className="no-underline hover:border-b-4 hover:border-b-deepYellow"
                  >
                    <span>
                      <b>Home loans</b>
                    </span>
                  </a>
                </li>
                <li className="md:text-xs md:mr-5 lg:text-sm lg:mr-7">
                  <a
                    href="#"
                    className="no-underline hover:border-b-4 hover:border-b-deepYellow"
                  >
                    <span>
                      <b>Insurance</b>
                    </span>
                  </a>
                </li>
                <li className="md:text-xs md:mr-5 lg:text-sm  lg:mr-7">
                  <a
                    href="#"
                    className="no-underline hover:border-b-4 hover:border-b-deepYellow"
                  >
                    <span>
                      <b>Investing & super</b>
                    </span>
                  </a>
                </li>
                <li className="md:text-xs md:mr-5 lg:text-sm lg:mr-7">
                  <a
                    href="#"
                    className="no-underline hover:border-b-4 hover:border-b-deepYellow"
                  >
                    <span>
                      <b>Business</b>
                    </span>
                  </a>
                </li>
                <li className="md:text-xs md:mr-5 lg:text-sm lg:mr-7">
                  <a
                    href="#"
                    className="no-underline hover:border-b-4 hover:border-b-deepYellow"
                  >
                    <span>
                      <b>Institutional</b>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse mr-0">
          <div
            className={`${
              search ? `hidden` : `visible`
            } flex items-center bg-deepYellow hover:bg-lightYellow md:px-4`}
          >
            <img src={lockImg} alt="lockImg" className="w-5 ml-5 sm:w-7" />
            <span className="ml-2 mr-5 sm:text-lg ">
              <b>Log on</b>
            </span>
          </div>
          <div
            className={`${
              search ? `hidden` : `visible`
            } flex items-center border-l-2 border-mediumGrey hover:bg-lightGrey hover:border-lightGrey active:border-greenBlue`}
          >
            <button type="button" onClick={showSearch}>
              <img
                src={searchImg}
                alt="searchImg"
                className="w-5 mr-5 ml-5 sm:w-7"
              />
            </button>
          </div>
        </div>
        <div
          className={`${
            search ? `visble` : `hidden`
          } flex flex-row-reverse items-center w-full mr-2`}
        >
          <div className="flex flex-row-reverse ml-2 mr-0 flex-grow md:">
            <button
              type="button"
              className="flex items-center radius-2 px-2 py-1 text-white bg-greenBlue rounded-sm md:px-5 md:py-3"
              onClick={showSearch}
            >
              Search
            </button>
          </div>
          <div className="ml-2 mr-2 w-full flex-grow">
            <form className="w-full">
              <label>
                <input
                  type="search"
                  id="searchBox"
                  className="block w-full shadow-sm bg-lightGrey rounded-sm px-2 py-1 focus:ring-greenBlue md:py-3 "
                  placeholder="This is a demonstration. Hence, pressing the Search button or Close icon will close the Search section."
                ></input>
              </label>
            </form>
          </div>
          <div className="flex items-center ml-3 mr-2">
            <button onClick={showSearch} className="hover:bg-mediumGrey">
              <img src={closeIcon} alt="closeIcon" className="w-5 md:w-7" />
            </button>
          </div>
        </div>
      </nav>

      {open && search === false && <Menu isOpen={open} />}
      {open === false && search && <Search searchOpen={search} />}
      {open && <div className="menu-overlay" onClick={onMenuToggle} />}
      {open && <div className="search-overlay" onClick={onSearchToggle} />}
    </>
  );
};

export default NavBar;
