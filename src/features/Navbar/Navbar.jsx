import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { v4 } from "uuid";
import { logo } from "../../assets";
import { NavbarBtn } from "../../components";
import { navbarState, navLinksSelector } from "../../states";
import { NavMenu } from "./NavMenu";

export const Navbar = () => {
    const [hoverMenu, setHoverMenu] = React.useState([]);
    const [menuFor, setMenuFor] = React.useState("");
    const setMenuActive = useSetRecoilState(navbarState);
    const navLinks = useRecoilValue(navLinksSelector);

    function toggleNavMenu() {
        setMenuActive((currState) => ({
            ...currState,
            showMenu: !currState.showMenu,
        }));
    }

    function updateHoverMenu(name, subLinks) {
        setMenuFor(name);
        setHoverMenu(subLinks);
    }

    return (
        <div className="z-50 bg-gradient h-[60px] fixed top-0 right-0 left-0 p-4 md:px-[8vw] navbar-shadow rounded-b-2xl flex justify-between items-center xl:rounded-none">
            <a href="/">
                <img src={logo} alt="Logo" width="97px" />
            </a>
            <div className="text-white hidden flex-row justify-center items-center text-sm xl:flex">
                {navLinks.map(({ name, subLinks }) => (
                    <button
                        key={v4()}
                        className={`flex justify-center items-center gap-2 rounded-t-2xl relative py-4 px-2 ${
                            name === menuFor ? "bg-dark" : ""
                        }`}
                        onMouseEnter={() => updateHoverMenu(name, subLinks)}
                        onMouseLeave={() => updateHoverMenu("", null)}
                    >
                        {name}
                        <BsChevronDown />
                        {hoverMenu && menuFor === name && (
                            <div
                                key={v4()}
                                className="bg-dark absolute top-full left-0 hidden flex-col text-left max-h-screen overflow-y-auto min-w-[320px] navmenu xl:flex"
                            >
                                {hoverMenu.map(({ name, path }) => (
                                    <a
                                        href={path}
                                        className="inline-block p-4 bg-black bg-opacity-0 hover:bg-opacity-10 w-full border-b-[1px] border-gray-700 last:border-transparent"
                                    >
                                        {name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </button>
                ))}
            </div>
            <NavMenu />
            <NavbarBtn onClick={toggleNavMenu} />
        </div>
    );
};
