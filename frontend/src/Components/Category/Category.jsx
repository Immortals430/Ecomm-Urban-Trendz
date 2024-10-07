import category2 from "../../assets/category/category6.png";
import category1 from "../../assets/category/category2.avif";
import category3 from "../../assets/category/category3.png";
import category4 from "../../assets/category/category8.png";
import category5 from "../../assets/category/category9.png";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";

export default function Category() {
  const { setSearchFilter, searchFilter } = useContext(AppContext);


  return (
    <section className="category-sec" id="category">
      <h1>Popular Category</h1>

      <div className="category">
        <Link
          to={"/search-result"}
          className="wrapper"
          onClick={() => setSearchFilter({ ...searchFilter, category: "topwear" })}
        >
          <div style={{ backgroundImage: `url(${category1})` }}></div>
          Shirts
        </Link>

        <Link
          to={"/search-result"}
          className="wrapper"
          onClick={() => setSearchFilter({ ...searchFilter, category: "Dresses" })}
        >
          <div style={{ backgroundImage: `url(${category2})` }}></div>
          Dresses
        </Link>

        <Link
          to={"/search-result"}
          className="wrapper"
          onClick={() => setSearchFilter({ ...searchFilter, category: "Jeans" })}
        >
          <div style={{ backgroundImage: `url(${category3})` }}></div>
          Jeans
        </Link>
        <Link
          to={"/search-result"}
          className="wrapper"
          onClick={() => setSearchFilter({ ...searchFilter, type: "Men", category: "Kurtas" })}
        >
          <div style={{ backgroundImage: `url(${category4})` }}></div>
          Shoe
        </Link>

        <Link
          to={"/search-result"}
          className="wrapper"
          onClick={() => setSearchFilter({ ...searchFilter, type: "Men", category: "bottomwear" })}
        >
          <div style={{ backgroundImage: `url(${category5})` }}></div>
          Sunglass
        </Link>
      </div>
    </section>
  );
}
