import React from "react";
import { useRecoilValue } from "recoil";
import { v4 } from "uuid";
import { navLinksSelector } from "../states";

export const NavMenu = () => {
    const links = useRecoilValue(navLinksSelector);

    return (
        <ul>
            {links.map((link) => (
                <li key={v4()}>
                    <span>{link.name}</span>
                </li>
            ))}
        </ul>
    );
};
