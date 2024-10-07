import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";

export default function FixedComponent() {
  return (
    <>
      <div className="header-bar" id="top">
        <div className="bar-left">
          <a href="https://github.com/Immortals430">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vishal-kumar-788326273/">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="bar-mid">
          <BsFillLightningFill />
          FREE SHIPPING ON ALL ORDER ABOVE $200
        </div>
        <div className="bar-right">
          <span>USD</span>
          <span>ENGLISH</span>
        </div>
      </div>
    </>
  );
}
