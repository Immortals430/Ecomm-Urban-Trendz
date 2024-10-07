import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { TiStar } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getProduct,
  productSelector,
  SET_SINGLEPRODUCT,
} from "../../redux/reducers/product_reducer";
import {
  addToCart,
  toggleWishlist,
  userSelector,
} from "../../redux/reducers/user_reducer";
import { authSelector } from "../../redux/reducers/auth_reducer";
import { toast } from "react-toastify";


export default function SingleProduct() {
  const { id } = useParams();
  const { singleProduct } = useSelector(productSelector);
  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(1);
  const { wishlist } = useSelector(userSelector);
  const { loggedUser } = useSelector(authSelector);

  useEffect(() => {
    async function callGetProduct() {
      const searchFilter = { id };
      const { payload } = await dispatch(getProduct(searchFilter));
      dispatch(SET_SINGLEPRODUCT(payload.products[0]));
    }
    callGetProduct();
  }, []);

  // add or remove quantity
  const addRemoveQuantity = (action) => {
    if (itemQuantity <= 1 && action == "remove") {
      return;
    }
    if (action == "remove") setItemQuantity((prev) => prev - 1);
    if (action == "add") setItemQuantity((prev) => prev + 1);
  };

  // add to cart
  async function callAddToCart(e, productId, quantity) {
    e.preventDefault();
    if (!loggedUser._id) return window.alert("Please login first");
    dispatch(addToCart({ productId, quantity }));
    toast.success("Added to Cart");
    setItemQuantity(1);
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
    <section className="singleproduct-sec">
      <div className="singleproduct-container">
        <div className="img-container">
          <img src={singleProduct.searchImage} alt="" />
        </div>
        <div className="product-detail">
          <div className="product-name">
            <h1>{singleProduct.brand}</h1>
            <span onClick={(e) => callToggleWishlist(e, singleProduct._id)}>
              {wishlist.some(({ product }) => product._id == id) ? (
                <IoHeartSharp size={25} />
              ) : (
                <IoHeartOutline size={25} />
              )}
            </span>
          </div>

          <div>
            <span>
              {Array(Math.floor(singleProduct?.rating || 0))
                .fill()
                .map((_, i) => (
                  <TiStar key={i} />
                ))}
            </span>
          </div>

          <div className="price">Rs {singleProduct.price}</div>

          <div className="desc">{singleProduct.product}</div>
          <div className="color">COLOR: BLACK WHITE</div>
          <div className="color-list">
            <div className="red"></div>
            <div className="green"></div>
            <div className="blue"></div>
            <div className="violet"></div>
            <div className="pink"></div>
          </div>
          <div className="size">
            SIZE: {singleProduct.sizes && singleProduct.sizes.split(",")[0]}
          </div>
          <div className="size-list">
            {singleProduct.sizes &&
              singleProduct.sizes
                .split(",")
                .map((size, i) => <div key={i}>{size}</div>)}
          </div>
          <div className="quantity">QUANTITY</div>
          <div className="quantity-btn">
            <div>
              <div onClick={() => addRemoveQuantity("remove")}>-</div>
              <div>{itemQuantity}</div>
              <div onClick={() => addRemoveQuantity("add")}>+</div>
            </div>
            <button
              onClick={(e) => callAddToCart(e, singleProduct._id, itemQuantity)}
            >
              ADD TO BAG
            </button>
          </div>

          <Link
            to={"/checkout"}
            state={{ amount: singleProduct.price, cart: false, singleProduct }}
          >
            <div className="buy-btn">Buy now</div>
          </Link>

          <div className="extra">
            <div>SHARE</div>
            <div>ASK A QUESTION</div>
            <div>SIZE GUIDE</div>
            <div>FAQ</div>
          </div>
        </div>
      </div>
    </section>
  );
}
