import React from "react";
import { useSetRecoilState } from "recoil";
import { logo } from "../../assets";
import { NavbarBtn } from "../../components";
import { showMenuSelector } from "../../states";
import { NavMenu } from "./NavMenu";

export const Navbar = () => {
    const setMenuActive = useSetRecoilState(showMenuSelector);

    function toggleNavMenu() {
        setMenuActive();
    }

    return (
        <div className="z-50 bg-gradient h-[60px] fixed top-0 right-0 left-0 p-4 navbar-shadow rounded-b-2xl flex justify-between items-center">
            <img src={logo} alt="Logo" width="97px" />
            <NavMenu />
            <NavbarBtn onClick={toggleNavMenu} />
        </div>
    );
};
