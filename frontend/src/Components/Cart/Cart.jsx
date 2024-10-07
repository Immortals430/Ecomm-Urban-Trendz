import { RiDeleteBin6Line } from "react-icons/ri";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { TiStar } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  userSelector,
} from "../../redux/reducers/user_reducer";
import { Link, useNavigate } from "react-router-dom";
import { authSelector } from "../../redux/reducers/auth_reducer";
import React from "react";

export default function Cart() {
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
    <section className="cart-sec">
      <div className="head">
        <h1>CART</h1>
      </div>

      <div className="cart-container">
        <div className="cart">
          <div></div>
          <div className="head">PRODUCT</div>

          {cart.map(({ product, quantity }) => (
            <React.Fragment key={product._id}>
              <div className="delete">
                <RiDeleteBin6Line
                  onClick={(e) => callRemoveFromCart(e, product._id, quantity)}
                />
              </div>
              <div className="product">
                <img src={product.searchImage} alt="" />
                <div className="product-details">
                  <p>{product.product}</p>
                  <div>
                    {Array(Math.floor(product?.rating || 0))
                      .fill()
                      .map((_, i) => (
                        <TiStar key={i}/>
                      ))}
                  </div>
                  <div className="quantity">
                    <div>
                      <GrFormSubtract
                        onClick={(e) => callRemoveFromCart(e, product._id)}
                      />
                    </div>
                    <div>{quantity}</div>
                    <div>
                      <IoMdAdd onClick={(e) => callAddToCart(e, product._id)} />
                    </div>
                  </div>
                  <div className="price">{product.price}</div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="checkout">
          <h5>THERE ARE {cart.length} PRODUCT IN YOUR CART</h5>
          <div>
            <span className="title">TOTAL</span>
            <span className="price">
              {cart.reduce(
                (acc, elem) => acc + elem.product.price * elem.quantity,
                0
              )}
            </span>
          </div>
          <div>
            <span className="title">SHIPPING ADDRESS</span>
            <span className="address">
              {loggedUser.address
                ? loggedUser.address.address +
                  loggedUser.address.city +
                  loggedUser.address.country
                : null}
            </span>
          </div>
          <div>
            {/* <div className="title">SPEND $2 FOR FREE SHIPPING</div> */}
          </div>

          <Link
            to={"/checkout"}
            state={{
              amount: cart.reduce(
                (acc, elem) => acc + elem.product.price * elem.quantity,
                0
              ),
              cart: true,
            }}
          >
            <div className="checkout-btn">CHECKOUT</div>
          </Link>
        </div>
      </div>
    </section>
  );
}
