import React from "react";
import "./Header.scss";
import MenuButton from "./MenuButton/MenuButton";
import LogoHeader from "./Logo/LogoHeader";
import IconsGroup from "./IconsGroup/IconsGroup";

const Header = () => {
    const handleMenuClick = () => {
        console.log("Menu button clicked");
    };

    return (
        <header className="header">
            <MenuButton onMenuClick={handleMenuClick}></MenuButton>
            <LogoHeader></LogoHeader>
            <IconsGroup></IconsGroup>
        </header>
    );
};

export default Header;
