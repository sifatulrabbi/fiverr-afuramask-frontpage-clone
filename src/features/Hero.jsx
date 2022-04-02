import React from "react";
import { heroImg } from "../assets";

export const Hero = () => {
    return (
        <section className="relative rounded-xl flex flex-col justify-between items-center bg-gradient-alt text-white px-5 pt-6 pb-[125px] overflow-hidden mt-6 md:justify-start md:flex-row lg:items-center lg:pb-4 md:h-[250px]">
            <h1 className="font-bold text-4xl w-fit text-center p-2 z-10 md:max-w-sm md:text-left lg:max-w-fit">
                日本には最高オンラインカジノ
            </h1>
            <img
                src={heroImg}
                alt="日本には最高オンラインカジノ"
                className="absolute bottom-0 h-[60%] md:right-0 md:h-full"
            />
        </section>
    );
};
