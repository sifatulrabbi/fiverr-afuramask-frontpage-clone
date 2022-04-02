import React from "react";

export const AsideCard = ({ title, img }) => {
    return (
        <a
            className="flex justify-start items-center gap-5 p-4 transition-colors duration-300 ease-out text-white border-t-[1px] border-[hsla(0,0%,100%,.05)] bg-white bg-opacity-0 hover:bg-opacity-[2%] max-w-sm w-full"
            href="/"
        >
            <img
                src={img}
                alt={title}
                width="90"
                height="90"
                className="object-cover"
            />
            <span>{title}</span>
        </a>
    );
};
