import { TiStar } from "react-icons/ti";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { useEffect, useState } from "react";
import {
  getProduct,
  productSelector,
  SET_BESTSELLER,
} from "../../redux/reducers/product_reducer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleWishlist } from "../../redux/reducers/user_reducer";
import { authSelector } from "../../redux/reducers/auth_reducer";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogItem from "../Loading/LoadingCards";

export default function Products() {
  const [searchFilter, setSearchFilter] = useState({
    type: "Men",
    category: "Suits",
  });
  const dispatch = useDispatch();
  const { bestseller } = useSelector(productSelector);
  const { loggedUser } = useSelector(authSelector);
  const [loading, setLoading] = useState(true)

  // get product on initial render
  useEffect(() => {
    const initailize = async () => {
      setLoading(true)
      await callGetProduct();
      setLoading(false)
    }
    initailize()
  }, [searchFilter]);

  async function callGetProduct() {
    
    const { payload } = await dispatch(getProduct(searchFilter));
    if (!payload) return;
    await dispatch(SET_BESTSELLER(payload.products));
    
  }

  // add to cart
  async function callAddToCart(e, productId) {
    e.preventDefault();
    if (!loggedUser._id) return window.alert("Please login first");
    dispatch(addToCart({ productId }));
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
    <>
      <section className="product-sec" id="collection">
        <h1>SHOP COLLECTION</h1>
        <div className="product-category">
          <div
            onClick={() => setSearchFilter({ type: "Men", category: "Suits" })}
          >
            Shop Men's
          </div>
          <div
            onClick={() =>
              setSearchFilter({ type: "Women", category: "Dresses" })
            }
          >
            Shop Women's
          </div>
        </div>

        <div className="product-grid">

          {loading
            ? [...Array(12)].map((_, index) => <BlogItem key={index} />)
            : bestseller.map((product) => (
                <Link to={`/product/${product._id}`} key={product._id}>
                  <div className="product-container">
                    <div className="image-container">
                      <img src={product.searchImage} />
                    </div>
                    <p>{product.brand}</p>
                    <p>{product.product}</p>
                    <div>
                      {Array(Math.floor(product?.rating || 0))
                        .fill()
                        .map((_, i) => (
                          <TiStar key={i} />
                        ))}
                    </div>
                    <p className="price">Rs {product.price}</p>

                    <span
                      className="wishlist"
                      onClick={(e) => callToggleWishlist(e, product._id)}
                    >
                      <IoHeartOutline size={22} />
                    </span>

                    <span
                      className="cart"
                      onClick={(e) => callAddToCart(e, product._id)}
                    >
                      <BsCart4 size={22} />
                    </span>
                  </div>
                </Link>
              ))}
        </div>
      </section>
    </>
  );
}
