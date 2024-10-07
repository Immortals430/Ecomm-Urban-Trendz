import { TiStar } from "react-icons/ti";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  toggleWishlist,
  userSelector,
} from "../../redux/reducers/user_reducer";
import { Link } from "react-router-dom";
import { authSelector } from "../../redux/reducers/auth_reducer";

export default function Wishlist() {
  const { wishlist } = useSelector(userSelector);
  const dispatch = useDispatch();
  const { loggedUser } = useSelector(authSelector);



  // add to cart
  async function callAddToCart(e, productId) {
    e.preventDefault();
    console.log("sdfal");
    if (!loggedUser._id) return window.alert("Please login first");
    dispatch(addToCart({ productId }));
    dispatch(toggleWishlist({ productId }));
    toast.success("Added to Cart");
  }

  // add to wishlist
  async function callToggleWishlist(e, productId) {
    e.preventDefault();
    if (!loggedUser._id) return window.alert("Please login first");
    const { payload } = await dispatch(toggleWishlist({ productId }));
    payload.product
      ? toast.success("Added to Wishlist")
      : toast.success("Removd from Wishlist");
  }

  return (
    <section className="wishlist-sec">
      <div className="head">
        <h1>Wishlist</h1>
      </div>

      <div className="product-grid">
        {wishlist.map(({ product }) => (
          <Link to={`/product/${product._id}`} key={product._id}>
            <div className="product-container">
              <div className="image-container">
                <img src={product.searchImage} />
                <span
                  className="cart"
                  onClick={(e) => callAddToCart(e, product._id)}
                >
                  <BsCart4 size={22} /> &nbsp; Move to cart
                </span>

                <span
                  className="wishlist"
                  onClick={(e) => callToggleWishlist(e, product._id)}
                >
                  <IoHeartOutline size={22} /> &nbsp; Remove from wishlist
                </span>
              </div>
              <p>{product.brand}</p>
              <p>{product.product}</p>
              <div>
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStar />
              </div>
              <p className="price">Rs {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
