import { FiSearch } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/reducers/auth_reducer";
import { RiUserFollowFill } from "react-icons/ri";
import { Squash as Hamburger } from "hamburger-react";
import { VscPackage } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export default function HeaderNavbar1() {
  const { setAuthPage, setQuickCart, setSidebar, sidebar } =
    useContext(AppContext);
  const { loggedUser } = useSelector(authSelector);
  const navigate = useNavigate();

  // navigate func
  const navigateFunc = (path) => {
    if (loggedUser._id) {
      navigate(path);
    } else {
      setAuthPage((prev) => !prev);
    }
  };

  return (
    <nav className="header-nav">
      <div className="header-nav-left">
        <span>
          <FiSearch size={22} />
        </span>

        <span>
          <a href="#top">HOME </a>
        </span>

        <span>
          <a href="#collection">COLLECTION </a>
        </span>

        <span>
          <a href="#category">CATEGORY </a>
        </span>

        <span>
          <a href="#footer">CONTACT</a>
        </span>

        <Hamburger toggled={sidebar} toggle={setSidebar} />
      </div>

      <div className="header-nav-mid">
        <a href="/">URBAN TRENDZ</a>
      </div>
      <div className="header-nav-right">
        <div onClick={() => navigateFunc("/wishlist")}>
          <IoHeartOutline size={22} />
        </div>

        <div onClick={() => navigateFunc("/orders")}>
          <VscPackage size={22} />
        </div>

        <div onClick={() => setQuickCart((prev) => !prev)}>
          <BsCart4 size={22} />
        </div>

        {loggedUser._id ? (
          <div onClick={() => navigateFunc("/user-account")}>
            <RiUserFollowFill size={22} />
          </div>
        ) : (
          <div onClick={() => setAuthPage(true)}>
            <GoPerson size={22} />
          </div>
        )}
      </div>
    </nav>
  );
}
