import React from "react";
import { casinoImg1 } from "../assets";
import { CardChip } from "./CardChip";
import { CardRating } from "./CardRating";
import { CardBall } from "./CardBall";

export const Card = ({ alt, name, feature, icons, rating, logo }) => {
    return (
        <div
            className={`relative flex flex-col justify-center items-center gap-4 p-6 min-w-[300px] ${
                alt ? "bg-gradient" : "rounded-3xl bg-gradient-alt"
            }`}
        >
            <CardChip />
            <img
                src={casinoImg1}
                alt="casino 1"
                height="64px"
                width="64px"
                className="py-2"
            />
            <p className="font-bold">カジノデイズ 「Casino Days」</p>
            <p className="text-lg text-center">
                最大1000ドル＋フリースピン合計350回分！
            </p>
            <CardRating rating="4.5" />
            <span className="text-gray-400 text-xs">入出金方法</span>
            <div className="flex flex-wrap justify-center items-center gap-1 px-4">
                <CardBall icon="" />
                <CardBall icon="" />
                <CardBall icon="" />
                <CardBall icon="" />
                <CardBall icon="" />
            </div>
            <button className="min-h-[40px] py-2 px-5 rounded-3xl bg-primary min-w-[212px]">
                今すぐプレイ!
            </button>
            <a href="/" className="text-primary text-sm">
                レビュー
            </a>
        </div>
    );
};
