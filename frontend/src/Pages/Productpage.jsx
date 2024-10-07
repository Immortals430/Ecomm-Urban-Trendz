import Navbar from "../Components/Navbar/Navbar";
import HeaderNavbar from "../Components/Navbar/HeaderNavbar";
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import Footer from "../Components/Footer/Footer";
import FixedComponent from "../Components/Navbar/FixedComponent";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../AppContext";

export default function Productpage() {
  const { setNavbar, navbar } = useContext(AppContext);
  const mainRef = useRef(); // Create a ref for the main tag

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

    const mainElement = mainRef.current;

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
      <HeaderNavbar />
      <main>
      <SingleProduct />
      </main>
      <Footer />
    </div>
  );
}
