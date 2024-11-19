import Cart from "../Components/Cart/Cart";
import HeaderNavbar from "../Components/Navbar/HeaderNavbar";
import Footer from "../Components/Footer/Footer";
import FixedComponent from "../Components/Navbar/FixedComponent";


export default function Cartpage() {


  return (
    <div className="root">
      <FixedComponent />
      <HeaderNavbar />

      <main>
        <Cart />
      </main>

      <Footer />
    </div>
  );
}
