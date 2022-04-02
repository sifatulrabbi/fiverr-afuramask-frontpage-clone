import React from "react";
import { CasinoTypeCard } from "../components";
import { casinoTypes } from "../assets";
import { v4 } from "uuid";

export const CasinoTypeSection = () => {
    return (
        <section className="flex flex-col justify-start items-center bg-[#110f1a] p-4 mt-10 rounded-2xl">
            <h4 className="font-white text-2xl font-bold text-white">
                オンラインカジノタイプ
            </h4>
            <div className="grid grid-cols-2 justify-center items-center gap-2 mt-4 md:grid-cols-4">
                {casinoTypes.map(({ title, img }) => (
                    <CasinoTypeCard key={v4()} title={title} img={img} />
                ))}
            </div>
        </section>
    );
};
