import React from "react";

export const Footer = () => {
    return (
        <>
            <style>{`
                .footer {
                    background: linear-gradient(180deg,rgba(95,114,189,.2),rgba(155,35,234,.2) 45%,rgba(4,4,13,.2));
                }
            `}</style>

            <footer className="footer flex flex-col justify-center items-center mt-10 rounded-t-2xl p-6 pb-14 text-white md:px-[8vw]">
                <div className="w-full flex flex-row flex-wrap justify-center items-center md:flex-nowrap md:justify-between md:items-stretch">
                    <div className="flex flex-col justify-start items-center gap-4 pb-8 mt-4 border-b-[1px] border-[#333] w-full md:items-start">
                        <span className="text-[gray] text-xs">
                            人気のカテゴリー
                        </span>
                        <ul className="flex flex-col gap-4 text-sm text-center md:text-left">
                            <li>
                                <span className="text-primary">
                                    日本オンラインカジノ2022
                                </span>
                            </li>
                            <li>
                                <a href="/">500円から入金できるカジノ</a>
                            </li>
                            <li>
                                <a href="/">100円の入金カジノ</a>
                            </li>
                            <li>
                                <a href="/">日本円 オンラインカジノ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-start items-center gap-4 pb-8 mt-4 border-b-[1px] border-[#333] w-full md:items-start">
                        <span className="text-[gray] text-xs w-full md:text-left">
                            カジノレビュー
                        </span>
                        <ul className="flex flex-col gap-4 text-sm text-center md:text-left">
                            <li>
                                <a href="/">
                                    ベラジョンカジノ「Vera&amp;John」
                                </a>
                            </li>
                            <li>
                                <a href="/">GG.BET</a>
                            </li>
                            <li>
                                <a href="/">ニトロカジノ「Nitro Casino」</a>
                            </li>
                            <li>
                                <a href="/">ボンズカジノ「Bons casino」</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-start items-center gap-4 pb-8 mt-4 border-b-[1px] border-[#333] w-full md:items-start">
                        <span className="text-[gray] text-xs w-full md:text-left">
                            最近の投稿
                        </span>
                        <ul className="flex flex-col gap-4 text-sm text-center md:text-left">
                            <li>
                                <a href="/">1000円の入金カジノ</a>
                            </li>
                            <li>
                                <a href="/">エコペイズ 「EcoPayzカジノ」</a>
                            </li>
                            <li>
                                <a href="/">ペイメントサービスBXONE</a>
                            </li>
                            <li>
                                <a href="/">オンラインスロット</a>
                            </li>
                            <li>
                                <a href="/">アストロペイ (Astropay)</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-start items-center gap-4 pb-8 mt-4 border-b-[1px] border-[#333] w-full md:items-start">
                        <span className="text-[gray] text-xs w-full md:text-left">
                            インフォメーション
                        </span>
                        <ul className="flex flex-col gap-4 text-sm text-center md:text-left">
                            <li>
                                <a href="/">大吉カジノについて</a>
                            </li>
                            <li>
                                <a href="/">お問い合わせ</a>
                            </li>
                            <li>
                                <a href="/">一般取引条件</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full flex flex-row flex-wrap gap-6 justify-center items-center md:flex-row-reverse md:justify-between">
                    <div className="flex gap-3 flex-row flex-wrap justify-center items-center py-6">
                        <img
                            height="28"
                            src="https://xn--lck0a4d411qemf.jp/wp-content/themes/theme-child/assets/src/images/dmca_protected.png"
                            alt="DMCA.com Protection Status"
                            className="h-[28px] object-cover mx-3"
                        />
                        <img
                            height="28"
                            src="https://xn--lck0a4d411qemf.jp/wp-content/themes/theme-child/assets/src/images/GPWA-logo-sm.png"
                            alt="GPWA"
                            className="h-[28px] object-cover mx-3"
                        />
                        <img
                            height="28"
                            src="https://xn--lck0a4d411qemf.jp/wp-content/uploads/2020/12/Rectangle-1.png"
                            alt="Rectangle logo"
                            className="h-[28px] object-cover mx-3"
                        />
                        <img
                            height="28"
                            src="https://xn--lck0a4d411qemf.jp/wp-content/uploads/2020/12/Rectangle-2.png"
                            alt="begambleaware logo footer"
                            className="h-[28px] object-cover mx-3"
                        />
                        <img
                            height="28"
                            src="https://xn--lck0a4d411qemf.jp/wp-content/uploads/2020/12/Rectangle-3.png"
                            alt="18+ logo footer"
                            className="h-[28px] object-cover mx-3"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center text-[gray] text-xs md:items-start">
                        <div>Copyright © 2022 </div>
                        <p>全著作権所有</p>
                    </div>
                </div>
            </footer>
        </>
    );
};
