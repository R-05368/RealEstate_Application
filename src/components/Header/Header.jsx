import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
// import { getMenuStyles } from "../../utils/common";
import {useHeaderColor} from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
// import { Link, NavLink } from "react-router-dom";


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
 const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  
  return (
    <section className='h-wrapper' style={{ background: headerColor }}>
      <div className='h-container padding innerWidth flexCenter'>
        <img src="./logo.png" alt="logo" />
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
        <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>
          <a href="">Residence</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className='button'>
            <a href="">Contract</a>
          </button>
        </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  )
}

export default Header
