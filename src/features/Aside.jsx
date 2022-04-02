import React from "react";
import { v4 } from "uuid";
import { asideData } from "../assets";
import { AsideCard } from "../components";

export const Aside = () => {
    return (
        <aside className="w-full mt-10 rounded-2xl bg-[#110f1a] lg:mt-[80px] lg:sticky lg:-top-[8%]">
            <h4 className="text-xl font-bold text-white text-center p-4">
                最高のボーナス
            </h4>
            {asideData.map(({ img, title }) => (
                <AsideCard key={v4()} img={img} title={title} />
            ))}
        </aside>
    );
};
