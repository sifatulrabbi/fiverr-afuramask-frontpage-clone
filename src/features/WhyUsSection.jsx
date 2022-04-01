import React from "react";
import { girlHappy } from "../assets";
import { ColoredListItem, WhyUsArticle } from "../components";
import { CasinosTable } from "./CasinosTable";

export const WhyUsSection = () => {
    return (
        <section className="flex flex-col justify-start items-start gap-10">
            <style>{`
                .why-us-article {
                    position: relative;
                    background-color: #110f1a;
                    overflow: hidden;
                }
                
                .why-us-article::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    right: 0;
                    left: 0;
                    height: 100%;
                    max-height: 300px;
                    background: linear-gradient(180deg,rgba(95,114,189,.1),rgba(155,35,234,.1) 54.09%,rgba(4,4,13,.1))
                }
            `}</style>

            <div className="overflow-hidden flex flex-col justify-start items-start bg-gradient p-3 mt-10 rounded-2xl pb-[250px]">
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
                    <ColoredListItem text={"評判"} />
                    <p>
                        ✅
                        そこから、すべてのサイトが迅速な引き出しと公正なRTPで高いペイアウト率を提供することが不可欠です。
                    </p>
                    <ColoredListItem
                        text={
                            <>
                                バンキングと入
                                <a href="/" className="text-primary">
                                    出金方法
                                </a>
                                すべての日本オンラインギャンブルサイトに必要なのは、安全な銀行のオプションの範囲です
                            </>
                        }
                    />
                    <p>
                        ✅
                        そこから、すべてのサイトが迅速な引き出しと公正なRTPで高いペイアウト率を提供することが不可欠です。
                    </p>
                    <img
                        src={girlHappy}
                        alt="オンラインカジノをどのように評価しますか？"
                        className="object-cover absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2"
                    />
                </article>
            </div>

            <div className="card-gradient rounded-2xl p-4">
                <WhyUsArticle
                    listItemText="ボーナスとプロモーション"
                    text="✅ 誰もがバンクロールに追加のブーストを与えるためのボーナスオファーを愛しており、ほとんどのオンラインカジノでそれらを利用できます。 私たちの専門家は、最も印象的なオファーを探すだけでなく、彼らが本当に期待通りに有益であることを確実にするために細心の注意を払っています。"
                />
                <WhyUsArticle
                    listItemText="安全性と保安"
                    text="✅ オンラインで実際のお金を預けるには信頼が必要です。パートナーを信頼しているのであれば、あなたにも知ってもらいたいのです。 これが、すべてのサイトが合法的にライセンスを受け、規制され、最高の暗号化テクノロジーでデータを安全に保つ必要がある理由です。"
                />
            </div>

            <div className="card-gradient rounded-2xl p-4">
                <WhyUsArticle
                    listItemText="オンラインカジノサポート"
                    text="✅ トップサイトは広範なカスタマーサポートを提供するため、これを厳密に確認しています。 常にユーザーに連絡することをお勧めしますが、実際の人が効率的に質問に答えることの重要性を理解しています。日本語のサポートは大切なパートです。"
                />
                <WhyUsArticle
                    listItemText="便利さ"
                    text="✅ コンピューター、モバイルデバイス、タブレットのいずれからオンラインでプレイする場合でも、私たちの推奨事項はあなたのライフスタイルにマッチします。 最高のオンラインカジノ 日本は複数のデバイスと互換性がある必要があるので、どこにいても好きなようにプレイする自由があります。"
                />

                <WhyUsArticle
                    listItemText="オンライン体験"
                    text="✅ 賭けるゲームやスポーツの範囲、無料でプレイするオプション、またはソフトウェアプロバイダーを選択するオプションなど、オンラインギャンブルの際にはプレーヤーにオプションを提供する必要があります。 これとは別に、私たちはすべてのパートナーに、世界中のプレーヤーに対応するために、ゲームのグラフィックとローカリゼーションで高い基準を満たすことを要求しています。"
                />
                <CasinosTable />
            </div>
        </section>
    );
};
