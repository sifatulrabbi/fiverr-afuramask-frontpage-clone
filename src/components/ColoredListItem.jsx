import React from "react";

export const ColoredListItem = ({ text }) => {
    return (
        <p className="pl-3 gap-4 my-4">
            <span className="h-2 w-2 rounded-full bg-primary inline-block mr-4" />
            {text}
        </p>
    );
};
