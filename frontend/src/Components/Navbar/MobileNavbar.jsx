import { IoHomeOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/reducers/auth_reducer";
import { RiUserFollowFill } from "react-icons/ri";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";
import { VscPackage } from "react-icons/vsc";

export default function MobileNavbar() {
  const { loggedUser } = useSelector(authSelector);
  const { setAuthPage } = useContext(AppContext);
  return (
    <nav className="mobile-navbar-sec">
      <a href="/">
        <IoHomeOutline />
      </a>

      <Link to={"/wishlist"}>
        <IoHeartOutline />
      </Link>
      <Link to={"/orders"}>
        <VscPackage size={22} className="orders" />
      </Link>
      {loggedUser._id ? (
        <Link to={"/user-account"}>
          <RiUserFollowFill />
        </Link>
      ) : (
        <GoPerson size={22} onClick={() => setAuthPage(true)} />
      )}
    </nav>
  );
}
