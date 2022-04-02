import React from "react";
import { girlTalk } from "../assets";

export const IntroSlotGame = () => {
    return (
        <div className="bg-gradient rounded-2xl p-3 text-white  pb-[250px] overflow-hidden md:pb-0">
            <div className="relative md:flex md:flex-row-reverse">
                <div>
                    <p>
                        オンラインでギャンブルする前に、カジノゲームの種類に慣れる必要があります。例えば日本には日本語対応オンラインカジノスロットは一番人気があります。
                    </p>
                    <p>
                        スロットが好きな人は45％くらいです。オンラインカジノの最も優れた点の一つは、マウスを数回クリックするだけでお気に入りのカジノゲームを楽しむ機会をプレイヤーに提供することです。
                        <br />
                        世界的な定番のお気に入りから日本のお気に入りまで、多種多様なカジノゲームを誇る最高の日本向けオンラインカジノを探しているなら、大吉カジノのトップのオンラインギャンブル会場のリストを見つけることができます。
                        だから、あなたの研究に時間を費やす代わりに、リストを調べてオンラインでギャンブル体験を始めませんか？
                        <br />
                        日本で最も人気のあるオンラインゲームについて、以下は日本のプレーヤーが最も楽しんでいるトップのオンラインカジノゲームの7つです。
                    </p>
                </div>
                <img
                    src={girlTalk}
                    alt=""
                    className="absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2 md:relative md:-translate-x-0 md:translate-y-0 md:left-0"
                />
            </div>
        </div>
    );
};
