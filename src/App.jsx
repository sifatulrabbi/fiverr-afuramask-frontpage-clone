import React from "react";
import {
    DescSection,
    Hero,
    Navbar,
    TopSitesSection,
    FaqSection,
    WhyUsSection,
    FeatureSection,
    CasinoTypeSection,
} from "./features";

function App() {
    return (
        <>
            <Navbar />
            <main className="mt-[60px] p-4">
                <Hero />
                <TopSitesSection />
                <DescSection />
                <FaqSection />
                <WhyUsSection />
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
                <FeatureSection />
                <CasinoTypeSection />
            </main>
        </>
    );
}

export default App;
