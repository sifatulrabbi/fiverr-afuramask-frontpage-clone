import React from "react";
import { features } from "../assets";
import { FeatureCard } from "./FeatureCard";
import { v4 } from "uuid";

export const FeatureSection = () => {
    return (
        <section className="flex flex-col justify-start items-start gap-8">
            {features.map(({ img, title, text }) => (
                <FeatureCard key={v4()} img={img} title={title} text={text} />
            ))}
        </section>
    );
};
