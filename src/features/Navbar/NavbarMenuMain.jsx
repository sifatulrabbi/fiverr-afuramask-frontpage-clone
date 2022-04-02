import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { navbarState, navLinksSelector } from "../../states";
import { v4 } from "uuid";

export const NavbarMenuMain = () => {
    const navLinks = useRecoilValue(navLinksSelector);
    const state = useRecoilValue(navbarState);

    return (
        <div
            className={`navbar-menu-main h-full transition-[max-height] duration-400 ${
                state.showSubMenu ? "max-h-0 overflow-hidden" : "max-h-[2000px]"
            }`}
        >
            <span className="text-xs text-white block mb-1 px-4 pt-7">
                全てのアイテム
            </span>
            <ul className="w-full">
                {navLinks.map((link) => (
                    <li
                        key={v4()}
                        className="hover:bg-white hover:bg-opacity-5 rounded-t-2xl w-full py-5 px-4 border-b-[hsla(0,0%,100%,.1)] border-b-[1px] last:border-b-0"
                    >
                        <button className="w-full h-full flex flex-row justify-between font-bold ">
                            <span>{link.name}</span>
                            <BsChevronRight className="text-xl text-white" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
