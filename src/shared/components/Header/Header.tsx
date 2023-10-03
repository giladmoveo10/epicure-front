import React from "react";
import "./Header.scss";
import MenuButton from "./MenuButton/MenuButton";

const Header = () => {
    const handleMenuClick = () => {
        console.log("Menu button clicked");
    };

    return (
        <header className="header">
            <MenuButton onMenuClick={handleMenuClick}></MenuButton>
            <h1>My Header</h1>
        </header>
    );
};

export default Header;
