import { createContext, useContext, useEffect, useState } from "react";
import Auth from "./Components/Auth/Auth";
import QuickCart from "./Components/Cart/QuickCart";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Navbar/Sidebar";
import MobileNavbar from "./Components/Navbar/MobileNavbar";
import Footer from "./Components/Footer/Footer";
import FixedComponent from "./Components/Navbar/FixedComponent";
import { ScrollRestoration, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loginForm, setLoginForm] = useState(true);
  const [authPage, setAuthPage] = useState(false);
  const [quickCart, setQuickCart] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [filterComp, setFilterComp] = useState(false)
  const [searchFilter, setSearchFilter] = useState({ type: "Women", brands: [] })
  const [navbar, setNavbar] = useState(false);
  const { pathname } = useLocation()


  useEffect(() => {
      setNavbar(false)
  }, [pathname])

  return (
    <AppContext.Provider
      value={{
        setLoginForm,
        loginForm,
        setAuthPage,
        quickCart,
        setQuickCart,
        setSidebar,
        sidebar,
        setFilterComp,
        filterComp,
        setSearchFilter,
        searchFilter,
        navbar,
        setNavbar

      }}
    >

  
      {children}

      {authPage && <Auth />}
   
      <QuickCart />
      <Sidebar />
      <MobileNavbar />
      <ToastContainer />
    </AppContext.Provider>
  );
}
