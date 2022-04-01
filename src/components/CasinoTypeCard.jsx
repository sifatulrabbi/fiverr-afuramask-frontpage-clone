import React from "react";

export const CasinoTypeCard = ({ img, title }) => {
    return (
        <div className="rounded-md flex flex-col justify-center items-center min-w-[130px] h-full p-4 bg-[#1d1a33]">
            <img
                src={img}
                alt={title}
                height="40px"
                width="40px"
                className="pb-4"
            />
            <span className="text-center text-white">{title}</span>
        </div>
    );
};
