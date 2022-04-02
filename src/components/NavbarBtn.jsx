import React from "react";

export const NavbarBtn = ({ onClick }) => {
    return (
        <button
            className="rounded-[50%] w-10 h-10 bg-primary relative"
            onClick={onClick}
        >
            <div className="h-[2px] bg-white w-[30%] absolute left-1/2 -translate-x-1/2 top-[30%]" />
            <div className="h-[2px] bg-white w-1/2 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
            <div className="h-[2px] bg-white w-[30%] absolute left-1/2 -translate-x-1/2 bottom-[30%]" />
        </button>
    );
};
