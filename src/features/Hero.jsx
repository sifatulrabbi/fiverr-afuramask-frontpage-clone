import React from "react";
import { heroImg } from "../assets";

export const Hero = () => {
    return (
        <section className="relative rounded-xl flex flex-col justify-between items-center bg-gradient-alt text-white pt-6 pb-[125px] overflow-hidden mt-6">
            <h1 className="font-bold text-4xl text-center p-2">
                日本には最高オンラインカジノ
            </h1>
            <img
                src={heroImg}
                alt="日本には最高オンラインカジノ"
                className="absolute bottom-0 h-[60%]"
            />
        </section>
    );
};
