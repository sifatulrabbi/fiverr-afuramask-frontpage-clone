import React from "react";
import { ColoredListItem } from "./ColoredListItem";

export const WhyUsArticle = ({ listItemText, text }) => {
    return (
        <article className="text-white">
            {listItemText && <ColoredListItem text={listItemText} />}
            <p>{text}</p>
        </article>
    );
};
