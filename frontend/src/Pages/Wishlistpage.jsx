import HeaderNavbar from "../Components/Navbar/HeaderNavbar";
import Wishlist from "../Components/Wishlist/Wishlist";
import Footer from "../Components/Footer/Footer";
import FixedComponent from "../Components/Navbar/FixedComponent";

export default function Wishlistpage() {
  return (
    <div className="root">
      <FixedComponent />
      <HeaderNavbar />
      <main>
      <Wishlist />
      </main>
      <Footer />
    </div>
  );
}
