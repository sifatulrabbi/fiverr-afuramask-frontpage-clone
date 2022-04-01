import React from "react";
import { girlHappy } from "../assets";

export const WhyUsSection = () => {
    return (
        <section className="flex flex-col justify-start items-start overflow-hidden bg-gradient p-3 mt-10 rounded-2xl pb-[250px]">
            <article className="text-white relative">
                <header className="text-center mb-6">
                    <h5 className="font-bold text-xl">
                        オンラインカジノをどのように評価しますか？
                    </h5>
                </header>
                <p>
                    大吉カジノでは、日本カジノレビューを非常に真剣に受け止め、細部にわたって比類のない非常に信頼できる情報を読者に提供しています。
                    最高品質のサイトのみを推奨するように、カジノが満たさなければならない包括的な一連の基準を開発しました。
                    このページでは、プロセスの各ステップについて説明します。これにより、大吉カジノのチームが探しているものと、各オンラインカジノ
                    日本をどのようにテストするかを確認できます。
                </p>
                <p>評判</p>
                <p>
                    ✅
                    そこから、すべてのサイトが迅速な引き出しと公正なRTPで高いペイアウト率を提供することが不可欠です。
                </p>
                <p>
                    バンキングと入<a href="/">出金方法</a>
                    すべての日本オンラインギャンブルサイトに必要なのは、安全な銀行のオプションの範囲です。
                </p>
                <p>
                    ✅
                    そこから、すべてのサイトが迅速な引き出しと公正なRTPで高いペイアウト率を提供することが不可欠です。
                </p>
                <img
                    src={girlHappy}
                    alt=""
                    className="object-cover absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2"
                />
            </article>
        </section>
    );
};
