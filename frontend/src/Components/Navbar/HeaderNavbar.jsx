import { GoPerson } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/reducers/auth_reducer";
import { RiUserFollowFill } from "react-icons/ri";
import { VscPackage } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function HeaderNavbar() {
  const { setAuthPage, setQuickCart } =
    useContext(AppContext);
  const { loggedUser } = useSelector(authSelector);
  return (
    <nav className="header-nav">
      <div className="header-nav-mid">
        <Link to={"/"}>URBAN TRENDZ</Link>
      </div>

      <div className="header-nav-right">
        <Link to={"/wishlist"}>
          <div>
            <IoHeartOutline size={22} />
          </div>
        </Link>
        <Link to={"/orders"}>
          <div>
            <VscPackage size={22} />
          </div>
        </Link>
        <div onClick={() => setQuickCart((prev) => !prev)}>
          <BsCart4 size={22} />
        </div>
        <div>
          <Link to={"/user-account"}>
            {loggedUser._id ? (
              <RiUserFollowFill size={22} />
            ) : (
              <GoPerson
                size={22}
                onClick={() => setAuthPage((prev) => !prev)}
              />
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
