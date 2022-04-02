import React from "react";
import { FaqAccordionGroup } from "./FaqAccordionGroup";

export const FaqBottom = () => {
    return (
        <section className="flex flex-col justify-start items-start mt-10 gap-10">
            <h2 className="text-white font-bold text-3xl text-center">
                ❓ 日本オンラインカジノFAQ｜よくある質問Q＆A ❓
            </h2>
            <FaqAccordionGroup />
        </section>
    );
};
