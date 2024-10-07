import social from "../../assets/etc/social-media.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function FollowUs() {
  return (
    <section className="follow-sec">
      <div className="flex-container">
        <div className="follow-text">
          <h1>Follow us <br/> on social media</h1>
          <p>Find out what is happening with us</p>
          <div>
            <div className="btn"> <FaInstagram />instagram</div>
            <div className="btn"><FaFacebookF />facebook</div>
            <div className="btn"><FaXTwitter />twitter</div>
          </div>
        </div>

        <div className="follow-img">
          <img src={social} alt="" />
        </div>
      </div>
    </section>
  );
}
