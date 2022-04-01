import React from "react";
import { BestCasinos } from "./BestCasinos";
import { BettingSites } from "./BettingSites";

export const TopSitesSection = () => {
    return (
        <section className="flex flex-col justify-start items-start gap-4">
            <BestCasinos />
            <BettingSites />
        </section>
    );
};
