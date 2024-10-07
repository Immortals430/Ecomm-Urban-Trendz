import banner1 from "../../assets/banner1.webp";
import banner5 from "../../assets/banner5.webp";
import banner3 from "../../assets/banner3.webp";
import wrapper from "../../assets/wrapper.png";

import HeaderNavbar1 from "../Navbar/HeaderNavbar1";

export default function Header() {

  return (
    <header className="home-header">
      <div className="header">
        <div className="img-wrapper wrapper-container">
          <img src={wrapper} alt="" className="wrapper" />
        </div>

        <div className="img-wrapper">
          <img src={banner1} alt="" className="img1 img" />
          <div className="header-text">
            <div className="text1 delay1">FASHION TRENDS</div>
            <div className="text2 delay1">THE HOTLIST OF</div>
            <div className="text3 delay1">AUTUMN</div>
            <div className="text4 delay1">12 BIGGEST/WINTER 2024 TRENDS</div>
            {/* <span className="text5 delay1" onClick={() => setSearchFilter({ type: "Women"})}>SHOP THE COLLECTION</span> */}
          </div>
        </div>

        <div className="img-wrapper">
          <img src={banner5} alt="" className="img2 img" />
          <div className="header-text">
            <div className="text1 delay2">FASHION TRENDS</div>
            <div className="text2 delay2">STREET STYLE</div>
            <div className="text3 delay2">FOR MEN</div>
            <div className="text4 delay2">IN THE CITY RHYTHM</div>
            {/* <Link to={"/search-result"} onClick={() => setSearchFilter({ type: "Men"})}><span className="text5 delay2" >SHOP THE COLLECTION</span></Link> */}
          </div>
        </div>

        <div className="img-wrapper">
          <img src={banner3} alt="" className="img3 img" />
          <div className="header-text">
            <div className="text1 delay3">NEW ARRIVALS</div>
            <div className="text2 delay3">FLUFFY COAT</div>
            <div className="text3 delay3">FOR HER</div>
            <div className="text4 delay3">THE HOTLIST OF WINTER 2024</div>
            {/* <Link to={"/search-result"} onClick={() => setSearchFilter({ type: "Women"})}><span className="text5 delay3" >SHOP THE COLLECTION</span></Link> */}
          </div>
        </div>

        <HeaderNavbar1 />

     
      </div>
    </header>
  );
}
