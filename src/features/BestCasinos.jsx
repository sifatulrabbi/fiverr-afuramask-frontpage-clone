import React from "react";
import { CasinoCard } from "../components";

export const BestCasinos = () => {
    return (
        <section className="w-full mt-8 text-white">
            <h2
                className="mb-4 text-2xl font-bold text-center sp"
                style={{ letterSpacing: "1px" }}
            >
                ベストの日本オンラインカジノ
            </h2>
            <div className="flex flex-wrap justify-start items-start gap-3">
                <CasinoCard />
                <CasinoCard />
                <CasinoCard />
            </div>
        </section>
    );
};
