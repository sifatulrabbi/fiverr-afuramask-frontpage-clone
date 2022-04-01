import React from "react";
import { Card } from "../components";

export const BestCasinos = () => {
    return (
        <section className="w-full mt-8">
            <h2
                className="mb-4 text-2xl text-white font-bold text-center sp"
                style={{ letterSpacing: "1px" }}
            >
                ベストの日本オンラインカジノ
            </h2>
            <div className="flex flex-wrap justify-start items-start gap-4">
                <Card top="Top 1" />
                <Card top="Top 2" />
                <Card top="Top 3" />
            </div>
        </section>
    );
};
