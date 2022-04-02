import React from "react";
import { features } from "../assets";
import { FeatureCard } from "./FeatureCard";
import { v4 } from "uuid";

export const FeatureSection = () => {
    return (
        <>
            <div className="card-gradient mt-10">
                <h5 className="text-xl font-bold text-center">
                    日本には人気のオンラインカジノタイプ
                </h5>
                <p>
                    ギャンブラーが自宅で、または休暇中に楽しむことができる
                    <a href="/" className="text-primary">
                        オンラインカジノゲーム
                    </a>
                    には八つのタイプがあります。
                    彼らが必要とするすべてはコンピュータとインターネットです。
                    今日、テクノロジーの出現により、カジノゲームはモバイル、タブレット、その他の電子機器にも対応しています。
                </p>
            </div>
            <section className="flex flex-col justify-start items-start gap-8 mt-10">
                {features.map(({ img, title, text }) => (
                    <FeatureCard
                        key={v4()}
                        img={img}
                        title={title}
                        text={text}
                    />
                ))}
            </section>
        </>
    );
};
