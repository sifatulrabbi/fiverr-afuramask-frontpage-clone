import React from "react";
import { useRecoilValue } from "recoil";
import { showMenuSelector } from "../../states";
import { NavbarMenuMain } from "./NavbarMenuMain";
import { NavbarMenuSub } from "./NavbarMenuSub";

export const NavMenu = () => {
    const showMenu = useRecoilValue(showMenuSelector);

    return (
        <div
            className={`navbar-menu absolute top-full left-0 right-0 transition-transform duration-500 pb-[60px] overflow-y-auto ${
                showMenu ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <NavbarMenuMain />
            <NavbarMenuSub />
        </div>
    );
};
