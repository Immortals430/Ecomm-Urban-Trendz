import { useContext } from "react";
import { AppContext } from "../../AppContext";

export default function Sidebar() {
  const { setSidebar, sidebar } = useContext(AppContext);

  return (
    <section
      className={`side-navbar-sec ${sidebar && "open"}`}
      onClick={() => setSidebar(false)}
    >
      <div
        className={`side-navbar ${sidebar && "open"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <input type="text" name="" id="" placeholder="ENTER YOUR KEYWORDS" />

        <a href="#top" onClick={() => setSidebar(false)}>
          <div>HOME</div>
        </a>
        <a href="#collection" onClick={() => setSidebar(false)}>
          <div>COLLECTION</div>
        </a>
        <a href="#category" onClick={() => setSidebar(false)}>
          <div>CATEGORY</div>
        </a>
        <a href="#footer" onClick={() => setSidebar(false)}>
          <div>CONTACT</div>
        </a>
        <a href="https://github.com/Immortals430" target="blank">
          <div>FOLLOW US</div>
        </a>
      </div>
    </section>
  );
}
