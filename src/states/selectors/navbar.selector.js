import { selector } from "recoil";
import { navLinks } from "../../assets";

export const navLinksSelector = selector({
    key: "nav_links_selector",
    get: ({ get }) => {
        const links = navLinks;
        return links;
    },
});
