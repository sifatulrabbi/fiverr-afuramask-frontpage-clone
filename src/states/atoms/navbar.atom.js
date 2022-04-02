import { atom } from "recoil";

export const navbarState = atom({
    key: "navbar_state",
    default: {
        showMenu: false,
        activeMenuName: "",
        showSubMenu: false,
        links: [],
        subLinks: [],
    },
});
