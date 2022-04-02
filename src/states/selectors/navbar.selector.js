import { selector } from "recoil";
import { navLinks } from "../../assets";
import { navbarState } from "../atoms";

export const navLinksSelector = selector({
    key: "nav_links_selector",
    get: ({ get }) => {
        const links = navLinks;
        return links;
    },
});

export const activeMenuNameSelector = selector({
    key: "active_menu_name_selector",
    get: ({ get }) => {
        const activeMenuName = get(navbarState).activeMenuName;
        return activeMenuName;
    },
    set: ({ set, get }, name) => {
        const state = get(navbarState);
        return set(navbarState, { ...state, activeMenuName: name });
    },
});

export const navSubLinksSelector = selector({
    key: "nav_sub_links_selector",
    get: ({ get }) => {
        const activeMenuName = get(activeMenuNameSelector);
        const subLinks = navLinks.find((link) => link.name === activeMenuName);
        return subLinks;
    },
});

export const showMenuSelector = selector({
    key: "toggle_active_menu_selector",
    get: ({ get }) => {
        const showMenu = get(navbarState).showMenu;
        return showMenu;
    },
    set: ({ set, get }) => {
        const state = get(navbarState);
        return set(navbarState, {
            ...state,
            showMenu: !state.showMenu,
            showSubMenu: false,
        });
    },
});

export const showSubMenuSelector = selector({
    key: "toggle_active_menu_selector",
    get: ({ get }) => {
        const showSubMenu = get(navbarState).showSubMenu;
        return showSubMenu;
    },
    set: ({ set, get }) => {
        const state = get(navbarState);
        return set(navbarState, { ...state, showSubMenu: !state.showSubMenu });
    },
});
