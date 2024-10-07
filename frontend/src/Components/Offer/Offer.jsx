import banner10 from "../../assets/banner9.jpg";

export default function zOffer() {
  return (
    <>
    <section className="offer-sec">

      <div className="img-wrapper">
        <img src={banner10} alt="" />
      </div>
      

      <div className="offer-text-sec">
        <p>New Arrival</p>
        <h1>New Fall/Winter Collection Premiere</h1>
        <p>always fashionable</p>

   

            <button className="offer-btn">Clothes</button>
            <button className="offer-btn">Shoe</button>
  
  
      </div>
    </section>
    </>
  );
}
