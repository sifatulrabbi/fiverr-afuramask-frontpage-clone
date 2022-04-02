import React from "react";
import { CardChip } from "./CardChip";
import { CardRating } from "./CardRating";
import { CardBall } from "./CardBall";
import { v4 } from "uuid";

export const Card = ({ alt, name, description, methods, rating, img, top }) => {
    return (
        <div
            className={`relative flex flex-col justify-center items-center gap-4 p-6 min-w-[300px] text-white w-full ${
                alt ? "bg-gradient" : "rounded-3xl bg-gradient-alt"
            }`}
        >
            <CardChip alt={alt} top={top} />
            <img
                src={img}
                alt="casino 1"
                height="64px"
                width="64px"
                className="py-2"
            />
            <p className="font-bold text-center">{name}</p>
            <p className="text-lg text-center">{description}</p>
            <CardRating rating={rating} />
            <span className="text-gray-400 text-xs">入出金方法</span>
            <div className="flex flex-wrap justify-center items-center gap-1 px-4">
                {methods?.map((method) => (
                    <CardBall key={v4()} icon={method} />
                ))}
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
