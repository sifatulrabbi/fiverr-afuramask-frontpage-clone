import React from "react";
import { CardChip } from "./CardChip";
import { CardRating } from "./CardRating";
import { CardBall } from "./CardBall";
import { v4 } from "uuid";

export const Card = ({
    alt,
    name,
    description,
    methods,
    rating,
    img,
    top,
    className,
}) => {
    return (
        <div
            className={`relative flex flex-col justify-between items-center gap-4 p-6 text-white w-full min-h-full ${
                alt ? "bg-gradient lg:flex-row" : "rounded-3xl bg-gradient-alt"
            } ${className}`}
        >
            <CardChip alt={alt} top={top} />
            <img
                src={img}
                alt="casino 1"
                height="64px"
                width="64px"
                className={`py-2 ${alt ? "md:h-[90px] w-auto" : ""}`}
            />
            <p className="font-bold text-center w-full">{name}</p>
            <p className="text-lg text-center w-full">{description}</p>
            <CardRating rating={rating} />
            <span className={`text-gray-400 text-xs ${alt ? "lg:hidden" : ""}`}>
                入出金方法
            </span>
            <div
                className={`grid grid-cols-4 gap-1 px-4 w-full sm:w-max ${
                    alt ? "lg:grid-cols-2" : ""
                }`}
            >
                {methods?.map((method) => (
                    <CardBall key={v4()} icon={method} />
                ))}
            </div>
            <div className="flex flex-col justify-center items-center gap-4 w-max">
                <button
                    className={`min-h-[40px] py-2 px-3 rounded-3xl bg-primary  ${
                        alt ? "lg:min-w-max" : ""
                    }`}
                >
                    今すぐプレイ!
                </button>
                <a href="/" className="text-primary text-sm">
                    レビュー
                </a>
            </div>
        </div>
    );
};
