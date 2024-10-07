import React, { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiStar } from "react-icons/ti";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { AppContext } from "../../AppContext";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  userSelector,
} from "../../redux/reducers/user_reducer";
import { Link } from "react-router-dom";
import { authSelector } from "../../redux/reducers/auth_reducer";

export default function QuickCart() {
  const { setQuickCart, quickCart } = useContext(AppContext);
  const { cart } = useSelector(userSelector);
  const { loggedUser } = useSelector(authSelector);
  const dispatch = useDispatch();

  // add to cart
  async function callAddToCart(e, productId) {
    e.preventDefault();
    if (!loggedUser._id) return window.alert("Please login first");
    dispatch(addToCart({ productId }));
  }

  // remove from cart
  async function callRemoveFromCart(e, productId, quantity = 1) {
    e.preventDefault();
    if (!loggedUser._id) return window.alert("Please login first");
    dispatch(removeFromCart({ productId, quantity }));
  }

  return (
    <section className={`quick-cart-sec  ${quickCart && "open"}`}>
      <div className={`quick-cart-container   ${quickCart && "open"} `}>
        <div className="heading">
          <div>
            <div>
              <BsCart4 size={30} />
            </div>
            <h3>CART</h3>
          </div>

          <div>
            <IoClose size={20} onClick={() => setQuickCart(false)} />
          </div>
        </div>

        <div className="cart-items">
          {cart.map(({ product, quantity }) => (
            <div className="item" key={product._id}>
              <div className="item-image">
                <img src={product.searchImage} />
              </div>

              <div className="item-details">
                <div className="item-details-wrapper">
                  {/* <div>{product.product}</div> */}

                  <div className="item-name">{product.product}</div>
                  <p className="price">Rs{product.price}</p>
                  <div>
                    {Array(Math.floor(product?.rating || 0))
                      .fill()
                      .map((_, i) => (
                        <TiStar key={i}/>
                      ))}
                  </div>
                </div>

                <div className="item-quantity">
                  <FaMinus
                    onClick={(e) => callRemoveFromCart(e, product._id)}
                  />
                  <span>{quantity}</span>
                  <IoMdAdd onClick={(e) => callAddToCart(e, product._id)} />
                  <RiDeleteBin5Line
                    onClick={(e) =>
                      callRemoveFromCart(e, product._id, quantity)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <h4>
            TOTAL: Rs{" "}
            {cart.reduce(
              (acc, elem) => acc + elem.product.price * elem.quantity,
              0
            )}
          </h4>
          <Link to={"/cart"} onClick={() => setQuickCart((prev) => !prev)}>
            <div className="view-cart">VIEW CART</div>
          </Link>
          <Link to={"/checkout"} onClick={() => setQuickCart((prev) => !prev)}>
            <div className="checkout-btn">CHECKOUT</div>
          </Link>
        </div>
      </div>
    </section>
  );
}
