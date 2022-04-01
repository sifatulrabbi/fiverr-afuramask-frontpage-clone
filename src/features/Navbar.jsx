import React from "react";
import { logo } from "../assets";
import { NavbarBtn } from "../components";

export const Navbar = () => {
    return (
        <div className="z-50 bg-gradient h-[60px] fixed top-0 right-0 left-0 p-4 navbar-shadow rounded-b-2xl flex justify-between items-center">
            <img src={logo} alt="Logo" width="97px" />
            <NavbarBtn />
        </div>
    );
};
