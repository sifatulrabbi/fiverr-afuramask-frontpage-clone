import React from "react";

export const CardBall = ({ icon }) => {
    return (
        <div className="rounded-[50%] min-h-[40px] h-[40px] min-w-[40px] w-[40px] bg-dark flex justify-center items-center overflow-hidden">
            <img
                src={icon}
                alt=""
                className="object-cover"
                height="30"
                width="30"
            />
        </div>
    );
};
