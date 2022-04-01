import { selector } from "recoil";
import { navbarState } from "../atoms";

export const navLinksSelector = selector({
    key: "nav_links_selector",
    get: ({ get }) => {
        const links = get(navbarState).links;
        return links;
    },
});

export const navbarOpenSelector = selector({
    key: "navbar_open_selector",
    get: ({ get }) => {
        const show = get(navbarState).show;
        return show;
    },
});

export const toggleNavbarSelector = selector({
    key: "toggle_navbar_selector",
    get: ({ get }) => {
        const show = get(navbarState).show;
        return show;
    },
    set: ({ set }, newValue) => set(navbarState, { show: newValue }),
});
