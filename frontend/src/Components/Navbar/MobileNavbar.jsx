import { IoHomeOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/reducers/auth_reducer";
import { RiUserFollowFill } from "react-icons/ri";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

import { VscPackage } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export default function MobileNavbar() {
  const { loggedUser } = useSelector(authSelector);
  const { setAuthPage } = useContext(AppContext);
  const navigate = useNavigate()

  const navigateFunc = (path) => {
    if (loggedUser._id) {
      navigate(path);
    } else {
      setAuthPage((prev) => !prev);
    }
  };

  return (
    <nav className="mobile-navbar-sec">
      <a href="/">
        <IoHomeOutline />
      </a>

      <IoHeartOutline onClick={() => navigateFunc("/wishlist")} />

      <VscPackage
        size={22}
        className="orders"
        onClick={() => navigateFunc("/orders")}
      />

      {loggedUser._id ? (
        <RiUserFollowFill onClick={() => navigateFunc("/user-account")} />
      ) : (
        <GoPerson size={22} onClick={() => setAuthPage(true)} />
      )}
    </nav>
  );
}
