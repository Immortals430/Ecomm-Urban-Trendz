import React, { useContext, useRef } from "react";
import { AppContext } from "../../AppContext";
import { TiStar } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa";

export default function Filter() {
  const { filterComp, setSearchFilter, searchFilter } = useContext(AppContext);
  let priceRef = useRef();

  const filterBrands = (e) => {
    const inputName = e.target.name;
    const brands = [...searchFilter.brands];

    if (brands.includes(inputName)) {
      const index = brands.indexOf(inputName);
      brands.splice(index, 1);
    } else {
      brands.push(inputName);
    }
    setSearchFilter((prev) => ({ ...prev, brands }));
  };

  return (
    <div className={`filter-sec ${filterComp && "open"}`}>
      <h2>FILTER BY:</h2>
      <div>
        <h4>SHOP FOR</h4>
        <div>
          <p
            onClick={() => setSearchFilter({ ...searchFilter, type: "Women" })}
          >
            Women
          </p>

          <p onClick={() => setSearchFilter({ ...searchFilter, type: "Men" })}>
            Men
          </p>
        </div>
      </div>
      <div>
        <h4>CATEGORY</h4>
        <div>
          <p
            onClick={() =>
              setSearchFilter({ ...searchFilter, category: "Suits" })
            }
          >
            Suits
          </p>
          <p
            onClick={() =>
              setSearchFilter({ ...searchFilter, category: "ethnic" })
            }
          >
            Ethnic
          </p>
          <p
            onClick={() =>
              setSearchFilter({ ...searchFilter, category: "topwear" })
            }
          >
            Topwear
          </p>
          <p
            onClick={() =>
              setSearchFilter({ ...searchFilter, category: "bottomwear" })
            }
          >
            Bottomwear
          </p>
        </div>
      </div>

      <div>
        <h4>PRICE</h4>
        <div>
          <input
            type="range"
            min={0}
            max={20000}
            onChange={() =>
              setSearchFilter({
                ...searchFilter,
                price: priceRef.current.value,
              })
            }
            ref={priceRef}
          />
          <p>{priceRef.current && priceRef.current.value}</p>
        </div>
      </div>

      <div>
        <h4>RATINGS</h4>
        <div style={{ color: "red" }}>
          <span onClick={() => setSearchFilter({ ...searchFilter, rating: 1 })}>
            <TiStar />
          </span>
          <span onClick={() => setSearchFilter({ ...searchFilter, rating: 2 })}>
            {searchFilter.rating < 2 ? <FaRegStar /> : <TiStar />}
          </span>
          <span onClick={() => setSearchFilter({ ...searchFilter, rating: 3 })}>
            {searchFilter.rating < 3 ? <FaRegStar /> : <TiStar />}
          </span>
          <span onClick={() => setSearchFilter({ ...searchFilter, rating: 4 })}>
            {searchFilter.rating < 4 ? <FaRegStar /> : <TiStar />}
          </span>
          <span onClick={() => setSearchFilter({ ...searchFilter, rating: 5 })}>
            {searchFilter.rating < 5 ? <FaRegStar /> : <TiStar />}
          </span>
        </div>
      </div>

      <div>
        <h4>BRANDS</h4>
        <div>
          <form onInput={filterBrands}>
            <div>
              <input type="checkbox" name="Blackberrys" />
              <label htmlFor="">Blackberrys</label>
            </div>
            <div>
              <input type="checkbox" name="Allen Solly" />
              <label htmlFor="">Allen Solly</label>
            </div>
            <div>
              <input type="checkbox" name="Louis Philippe" />
              <label htmlFor="">Louis Philippe</label>
            </div>
            <div>
              <input type="checkbox" name="Peter England" />
              <label htmlFor="">Peter England</label>
            </div>
            <div>
              <input type="checkbox" name="Sangria" />
              <label htmlFor="">Sangria</label>
            </div>

            <div>
              <input type="checkbox" name="Jompers" />
              <label htmlFor="">Jompers</label>
            </div>
            <div>
              <input type="checkbox" name="HERE&NOW" />
              <label htmlFor="">HERE&NOW</label>
            </div>
            <div>
              <input type="checkbox" name="Anouk" />
              <label htmlFor="">Anouk</label>
            </div>
            <div>
              <input type="checkbox" name="StyleCast" />
              <label htmlFor="">StyleCast</label>
            </div>
            <div>
              <input type="checkbox" name="Tokyo Talkies" />
              <label htmlFor="">Tokyo Talkies</label>
            </div>
            <div>
              <input type="checkbox" name="BAESD" />
              <label htmlFor="">BAESD</label>
            </div>
            <div>
              <input type="checkbox" name="Athena" />
              <label htmlFor="">Athena</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
