import React from "react";

export const DescSection = () => {
    return (
        <>
            <style>{`
                .custom-bg {
                    background: linear-gradient(180deg,rgba(95,114,189,.1),rgba(155,35,234,.1) 54.09%,rgba(4,4,13,.1))
                }

                .custom-bg::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    right: 0;
                    left: 0;
                    bottom: 0;
                    z-index: -1;
                    background-color: #110f1a;
                }
             `}</style>
            <section className="relative p-4 rounded-2xl my-10 overflow-hidden custom-bg min-h-[115px]">
                <p className="text-white">
                    大吉カジノ.jpは、日本人プレイヤーのためにオファー、キャンペーン、業界ニュースなどの専門的なレビューサイトです。ここでは、リアルマネーゲームのトップオンラインカジノを見つけることができます。
                </p>
            </section>
        </>
    );
};
