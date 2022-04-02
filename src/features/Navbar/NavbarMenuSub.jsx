import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRecoilState, useRecoilValue } from "recoil";
import { navbarState, navLinksSelector } from "../../states";
import { v4 } from "uuid";

export const NavbarMenuSub = () => {
    const navLinks = useRecoilValue(navLinksSelector);
    const [state, setState] = useRecoilState(navbarState);

    function goBack() {
        setState((prev) => ({
            ...prev,
            showSubMenu: false,
            activeMenuName: "",
        }));
    }

    return (
        <div
            className={`w-full h-full transition-[max-height] duration-300 ${
                state.showSubMenu ? "max-h-[2000px]" : "max-h-0 overflow-hidden"
            }`}
        >
            <button
                className="text-xs text-white mb-1 px-4 pt-7 pb-2 flex flex-row items-center gap-3 text-primary"
                onClick={goBack}
            >
                <BsChevronLeft /> {state.activeMenuName}
            </button>
            <ul className="w-full">
                {navLinks.map((link) => (
                    <li
                        key={v4()}
                        className="hover:bg-white hover:bg-opacity-5 rounded-t-2xl w-full py-5 px-4 border-b-[hsla(0,0%,100%,.1)] border-b-[1px] last:border-b-0"
                    >
                        <a
                            className="w-full h-full flex flex-row justify-between font-bold"
                            href="/"
                        >
                            <span>{link.name}</span>
                            <BsChevronRight className="text-xl text-white" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
