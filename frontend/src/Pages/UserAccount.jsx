import HeaderNavbar from "../Components/Navbar/HeaderNavbar";
import Account from "../Components/Account/Account";
import Footer from "../Components/Footer/Footer";
import FixedComponent from "../Components/Navbar/FixedComponent"

export default function UserAccount() {
  return (
    <div className="root">
    <FixedComponent />
      <HeaderNavbar />
      <main>
      <Account />
      </main>
      <Footer />
      </div>

  );
}
