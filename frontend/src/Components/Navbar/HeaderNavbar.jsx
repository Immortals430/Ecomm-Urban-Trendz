import { GoPerson } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/reducers/auth_reducer";
import { RiUserFollowFill } from "react-icons/ri";
import { VscPackage } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderNavbar() {
  const { setAuthPage, setQuickCart } = useContext(AppContext);
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
      <div className="header-nav-mid">
        <Link to={"/"}>URBAN TRENDZ</Link>
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
        <div>
          {loggedUser._id ? (
            <RiUserFollowFill
              size={22}
              onClick={() => navigateFunc("/user-account")}
            />
          ) : (
            <GoPerson size={22} onClick={() => setAuthPage(true)} />
          )}
        </div>
      </div>
    </nav>
  );
}
