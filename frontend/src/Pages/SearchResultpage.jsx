import Filter from "../Components/Filter/Filter";
import HeaderNavbar from "../Components/Navbar/HeaderNavbar";
import Navbar from "../Components/Navbar/Navbar";
import SearchResult from "../Components/SearchResult/SearchResult";
import { AppContext } from "../AppContext";
import Footer from "../Components/Footer/Footer";
import FixedComponent from "../Components/Navbar/FixedComponent";
import { useContext } from "react";

export default function SearchResultpage() {
  const { setFilterComp, filterComp } = useContext(AppContext);
  return (
    <div className="root">
      <FixedComponent />
      <Navbar />
      <HeaderNavbar />
      <main>
        <SearchResult />
      </main>

      <div
        className={`mobilefilter-sec ${filterComp && "open"}`}
        onClick={() => setFilterComp(false)}
      >
        <Filter />
      </div>
      <Footer />
    </div>
  );
}
