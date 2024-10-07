import brand1 from "../../assets/brand/1.png"
import brand2 from "../../assets/brand/2.png"
import brand3 from "../../assets/brand/3.png"
import brand4 from "../../assets/brand/4.png"



export default function Welcome() {
  return (
    <section className="welcome-sec">
      <div>
        <p className="welcome-head">WELCOME TO URBAN TRENDZ</p>
        <h2>Fashion's social & environmental responsibility.</h2>
        <p>
          "We fuses timeless elegance with modern design, offering luxurious,
          sustainable fashion. Our collections empower individuality, from chic
          everyday wear to statement pieces. Express your unique style with
          Urban Trendz's meticulously crafted selections."
        </p>
      </div>

      <div className="brands">
        <p className="welcome-head">BRAND WE LOVE</p>
        <div className="brands-logo">

            <div>
              <img src={brand2} alt="" />
            </div>

            <div>
              <img src={brand1} alt="" />
            </div>
            <div>
              <img src={brand3} alt="" />
            </div>
            <div>
              <img src={brand4} alt="" />
            </div>

        </div>
      </div>
    </section>
  );
}
