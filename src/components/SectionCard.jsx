import React from "react";
import { ColoredListItem } from "../components";

export const SectionCard = ({ img, listItemText, text, left }) => {
    return (
        <div className="card-gradient rounded-2xl p-4 w-full">
            {listItemText && <ColoredListItem text={listItemText} />}
            <p>
                <img
                    src={img}
                    alt={listItemText}
                    height="80px"
                    width="80px"
                    className={
                        left ? "float-left mr-6 mb-6" : "float-right ml-6 mb-6"
                    }
                />
                {text}
            </p>
        </div>
    );
};
