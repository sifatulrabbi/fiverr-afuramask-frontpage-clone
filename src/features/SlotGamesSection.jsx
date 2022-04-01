import React from "react";
import { slotSectionData } from "../assets";
import { IntroSlotGame, SectionCard } from "../components";

export const SlotGamesSection = () => {
    return (
        <section className="w-full flex flex-col gap-10 mt-10">
            <IntroSlotGame />
            {slotSectionData.map(({ img, listItemText, text }) => (
                <SectionCard
                    img={img}
                    listItemText={
                        <span className="font-bold text-xl">
                            {listItemText}
                        </span>
                    }
                    text={text}
                />
            ))}
        </section>
    );
};
