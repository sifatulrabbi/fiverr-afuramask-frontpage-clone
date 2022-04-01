import React from "react";

export const CasinoCardBall = ({ icon }) => {
    return (
        <div className="rounded-[50%] h-[40px] w-[40px] bg-dark flex justify-center items-center overflow-hidden">
            <img src={icon} alt="" className="object-cover" />
        </div>
    );
};
