import React from "react";
import "./MenuButton.scss";
import HamburgerIcon from "../../../../assets/icons/Hamburger.svg";

const MenuButton = ({ onMenuClick }) => {
    // ? on click should be here?

    return (
        <button className="menu-button" onClick={onMenuClick}>
            <img src={HamburgerIcon} alt="Menu" />
        </button>
    );
};

export default MenuButton;
