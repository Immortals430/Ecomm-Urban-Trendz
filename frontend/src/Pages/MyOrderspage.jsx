import Navbar from "../Components/Navbar/Navbar";
import HeaderNavbar from "../Components/Navbar/HeaderNavbar";
import Footer from "../Components/Footer/Footer";
import FixedComponent from "../Components/Navbar/FixedComponent";
import Orders from "../Components/Orders/Orders";


export default function MyOrderspage() {


  return (
    <div className="root">
      <FixedComponent />
      <Navbar />
      <HeaderNavbar />
      <main>
        <Orders />
      </main>
      <Footer />
    </div>
  );
}
