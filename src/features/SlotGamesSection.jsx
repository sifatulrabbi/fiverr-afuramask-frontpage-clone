import React from "react";
import { slotSectionData } from "../assets";
import { IntroSlotGame, SectionCard } from "../components";
import { CasinoTypeCard } from "../components";
import { bestOnlineGames } from "../assets";
import { v4 } from "uuid";

export const SlotGamesSection = () => {
    return (
        <section className="w-full flex flex-col gap-10 mt-10">
            <IntroSlotGame />
            {slotSectionData.map(({ img, listItemText, text }) => (
                <SectionCard
                    key={v4()}
                    img={img}
                    listItemText={
                        <span className="font-bold text-xl">
                            {listItemText}
                        </span>
                    }
                    text={text}
                />
            ))}
            <div className="flex flex-col justify-start items-center bg-[#110f1a] p-4 rounded-2xl">
                <h2 className="font-white text-2xl font-bold text-white text-center">
                    最高の日本オンラインカジノゲーム
                </h2>
                <div className="grid w-full grid-cols-2 justify-center items-center gap-2 mt-4">
                    {bestOnlineGames.map(({ title, img }) => (
                        <CasinoTypeCard key={v4()} title={title} img={img} />
                    ))}
                </div>
            </div>
        </section>
    );
};
