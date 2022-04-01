import React from "react";

export const CardChip = ({ alt, top }) => {
    console.log(alt);
    return (
        <div
            className={`absolute top-3 left-3 flex justify-center items-center uppercase ${
                alt
                    ? "bg-dark rounded-[50%] border-[1px] border-white w-6 h-6 opacity-75"
                    : "bg-primary px-[5px] py-[2px] font-bold rounded-full text-white"
            }`}
        >
            <span className="text-xs">{top}</span>
        </div>
    );
};
