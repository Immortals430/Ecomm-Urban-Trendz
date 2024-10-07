import { TiStar } from "react-icons/ti";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import Filter from "../Filter/Filter";
import { BsFilterRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  productSelector,
  SET_SEARCHRESULT,
} from "../../redux/reducers/product_reducer";
import { AppContext } from "../../AppContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToCart, toggleWishlist } from "../../redux/reducers/user_reducer";
import { authSelector } from "../../redux/reducers/auth_reducer";

export default function SearchResult() {
  const { searchResult } = useSelector(productSelector);
  const { loggedUser } = useSelector(authSelector);
  const { setFilterComp, searchFilter, setSearchFilter } =
    useContext(AppContext);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  // get product
  useEffect(() => {
    callGetProduct();
  }, [searchFilter, page]);

  async function callGetProduct() {
    const { payload } = await dispatch(getProduct({ ...searchFilter, page }));
    if (!payload) return;
    dispatch(SET_SEARCHRESULT(payload.products));
  }

  // add to cart
  async function callAddToCart(e, productId) {
    e.preventDefault();
    if (!loggedUser._id) return window.alert("Please login first");
    dispatch(addToCart({ productId }));
  }

  // add to wishlist
  async function callToggleWishlist(e, productId) {
    e.preventDefault();
    if (!loggedUser._id) return window.alert("Please login first");
    dispatch(toggleWishlist({ productId }));
  }

  // removeFilter
  function removeFilter(filterType, brand) {
    let updatedSearchFilter;
    if (brand) {
      const brands = searchFilter.brands.filter((elem) => elem != brand);
      updatedSearchFilter = { ...searchFilter, brands };
    } else {
      updatedSearchFilter = { ...searchFilter };
      delete updatedSearchFilter[filterType];
    }
    setSearchFilter(updatedSearchFilter);
  }

  return (
    <section className="searchresult-container">
      <div>
        <Filter />
        <div className="product-grid-container">
          <div className="product-grid-head">
            <BsFilterRight
              className="filter-icon"
              onClick={() => setFilterComp(true)}
            />
            <h4>
              {searchFilter.type == "Women"
                ? "Women's Clothing"
                : searchFilter.type == "Men"
                ? "Men's Clothing"
                : "Accessories"}
            </h4>
            {searchFilter.category ? (
              <p onClick={() => removeFilter("category")}>
                {searchFilter.category}
              </p>
            ) : null}

            {searchFilter.rating ? (
              <p onClick={() => removeFilter("rating")}>
                rating: {searchFilter.rating}
              </p>
            ) : null}

            {searchFilter.brands &&
              searchFilter.brands.map((brand, i) => (
                <p onClick={() => removeFilter("brands", brand)} key={i}>
                  {brand}
                </p>
              ))}
          </div>

          <div className="product-grid">
            {searchResult.map((product) => (
              <Link to={`/product/${product._id}`} key={product._id}>
                <div className="product-container">
                  <div className="image-container">
                    <img src={product.searchImage} alt="" />
                  </div>
                  <p>{product.product}</p>
                  <p>{product.rating}</p>
                  <div>
                  {Array(Math.floor(product?.rating || 0))
                .fill()
                .map(() => (
                  <TiStar />
                ))}
                  </div>
                  <p className="price">{product.price}</p>

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
        </div>
      </div>

      <div className="navigate">
        {page != 1 ? (
          <div onClick={() => setPage((prev) => prev - 1)} className="navigate-btn">Prev</div>
        ) : null}

        <div>{page}</div>

        {searchResult.length < 12 ? null : (
          <div onClick={() => setPage((prev) => prev + 1)} className="navigate-btn">Next</div>
        )}
      </div>
    </section>
  );
}
