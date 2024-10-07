import { GoPerson } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { VscPackage } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/reducers/auth_reducer";
import { RiUserFollowFill } from "react-icons/ri";

export default function Navbar() {
  const { setQuickCart, setAuthPage, setSidebar, sidebar, navbar } =
    useContext(AppContext);
  const { loggedUser } = useSelector(authSelector);

  return (
    <nav className="navbar-sec">
      <div className={`navbar ${navbar && "open"}`}>
        <div className="nav-menu">
          <Hamburger toggled={sidebar} toggle={setSidebar} />
        </div>

        <div className="bar-left">
          <a href="/">URBAN TRENDZ</a>
        </div>
        <div className="bar-mid">
          <a href="#top">
            <span>HOME</span>
          </a>
          <a href="#collection">
            <span>COLLECTION</span>
          </a>
          <a href="#category">
            <span>CATEGORY</span>
          </a>
          <a href="#footer">
            <span>CONTACT</span>
          </a>
        </div>
        <div className="bar-right">
          <Link to={"/wishlist"}>
            <IoHeartOutline size={22} className="wishlist" />
          </Link>
          <Link to={"/orders"}>
            <VscPackage size={22} className="orders" />
          </Link>
          <Link>
            <BsCart4 size={22} onClick={() => setQuickCart(true)} />
          </Link>

          {loggedUser._id ? (
            <Link to={"/user-account"} className="account">
              <RiUserFollowFill size={22} />
            </Link>
          ) : (
            <GoPerson size={22} onClick={() => setAuthPage((prev) => !prev)} className="account" />
          )}
        </div>
      </div>
    </nav>
  );
}
