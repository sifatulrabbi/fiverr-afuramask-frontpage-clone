import React from "react";
import { useSetRecoilState } from "recoil";
import { logo } from "../../assets";
import { NavbarBtn } from "../../components";
import { navbarState } from "../../states";
import { NavMenu } from "./NavMenu";

export const Navbar = () => {
    const setMenuActive = useSetRecoilState(navbarState);

    function toggleNavMenu() {
        setMenuActive((currState) => ({
            ...currState,
            showMenu: !currState.showMenu,
        }));
    }

    return (
        <div className="z-50 bg-gradient h-[60px] fixed top-0 right-0 left-0 p-4 md:px-[8vw] navbar-shadow rounded-b-2xl flex justify-between items-center lg:rounded-none">
            <img src={logo} alt="Logo" width="97px" />
            <NavMenu />
            <NavbarBtn onClick={toggleNavMenu} />
        </div>
    );
};
