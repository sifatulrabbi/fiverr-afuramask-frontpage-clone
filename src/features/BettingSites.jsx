import React from "react";
import { Card } from "../components";

export const BettingSites = () => {
    return (
        <div className="flex flex-col justify-start items-center gap-2">
            <Card alt top="4" />
            <Card alt top="5" />
            <Card alt top="6" />
            <Card alt top="7" />
            <Card alt top="8" />
            <Card alt top="9" />
            <Card alt top="10" />
            <a
                href="/"
                className="w-full bg-primary text-white py-[4px] text-center rounded-full"
            >
                もっと見る
            </a>
        </div>
    );
};
