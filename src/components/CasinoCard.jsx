import React from "react";
import { casinoImg1 } from "../assets";
import { CasinoCardChip } from "./CasinoCardChip";

export const CasinoCard = () => {
    return (
        <div className="rounded-xl bg-gradient-alt relative flex flex-col justify-center items-center gap-4 p-6">
            <CasinoCardChip />
            <img
                src={casinoImg1}
                alt="casino 1"
                height="64px"
                width="64px"
                className="pt-2"
            />
            <p className="font-bold">カジノデイズ 「Casino Days」</p>
            <p className="text-lg text-center">
                最大1000ドル＋フリースピン合計350回分！
            </p>
        </div>
    );
};
