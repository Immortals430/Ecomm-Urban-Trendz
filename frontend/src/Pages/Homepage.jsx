import Category from "../Components/Category/Category";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Products from "../Components/Products/Products";
import Welcome from "../Components/Welcome/Welcome";
import Offer from "../Components/Offer/Offer";
import FollowUs from "../Components/Follow/Follow";
import Navbar from "../Components/Navbar/Navbar";
import FixedComponent from "../Components/Navbar/FixedComponent";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../AppContext";

export default function Homepage() {
  const { setNavbar, navbar } = useContext(AppContext);
  const mainRef = useRef(); 

  // appear disappear navbar
  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        if (mainRef.current.scrollTop > 200 && !navbar) {
          setNavbar(true);
        } else if (mainRef.current.scrollTop < 200 && navbar) {
          setNavbar(false);
        }
      }
    };
    const mainElement = mainRef.current; // Reference to the main element
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [navbar]);

  return (
    <div ref={mainRef} className="root">
      <FixedComponent />
      <Navbar />
      <Header />
      <main>
      <Welcome />
      <Products />
      <Category />
      <Offer />
      <FollowUs />
      </main>
      <Footer />
    </div>
  );
}
