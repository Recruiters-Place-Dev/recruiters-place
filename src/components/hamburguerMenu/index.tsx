import MenuContainer from "./hamburguerMenu";
import Logo from "../../assets/Logo.svg";
import { useState } from "react";

const HamburguerMenu = () => {
    const [className, setClassName] = useState("Controls")

    const Menu = () => {
        if (className === "Controls") {
            setClassName("Controls active")
        } else setClassName("Controls")
    }

  return (
    <MenuContainer>
      <nav id="navbar">
        <div className="NavContainer">
          <div className="MenuContainer">
            <img id="NavBrand" src={Logo} alt="" />
            <button id="MenuBtn" onClick={Menu}></button>
          </div>
          <div className="ControlsContainer">
            <div className={className}>
              <button>Botão</button>
              <button>Botão</button>
              <button>Botão</button>
            </div>
          </div>
        </div>
      </nav>
    </MenuContainer>
  );
};

export default HamburguerMenu;
