import React from "react";
import { FaqQuestion } from "../components";
import { FaChevronDown } from "react-icons/fa";
import { v4 } from "uuid";
import { faqData } from "../assets";

const List = ({ items }) => {
    return (
        <ul className="flex flex-col gap-3">
            {items.map((item) => (
                <li
                    key={v4()}
                    className="flex gap-2 justify-start items-center"
                >
                    <span className="bg-white h-2 w-2 rounded-full" />
                    {item}
                </li>
            ))}
        </ul>
    );
};

export const FaqSection = () => {
    const [show, setShow] = React.useState(true);

    function toggleShow() {
        setShow((prev) => !prev);
    }

    return (
        <section className="flex flex-col justify-start items-start bg-[#110f1a] rounded-md p-3">
            <button
                className="w-full font-white font-bold text-white flex justify-between items-center"
                onClick={toggleShow}
            >
                <h5 className="text-xl">オンラインカジノとは？</h5>
                <FaChevronDown
                    className={`transition-transform duration-300 ease-out ${
                        show ? "rotate-0" : "rotate-180"
                    }`}
                />
            </button>
            <div
                className="flex flex-col justify-start items-start w-full accordion-content"
                aria-expanded={show}
            >
                <FaqQuestion no="1">ベストの日本オンラインカジノ</FaqQuestion>
                <FaqQuestion no="2">
                    オンラインカジノをどのように評価しますか？
                </FaqQuestion>
                <FaqQuestion no="3">
                    2022年のトップ10オンラインカジノ
                </FaqQuestion>
                <FaqQuestion no="4">
                    <div className="flex flex-col gap-3">
                        <span>日本には人気のオンラインカジノタイプ</span>
                        <List items={faqData.four} />
                    </div>
                </FaqQuestion>
                <FaqQuestion no="5">
                    <div className="flex flex-col gap-3">
                        <span>オンラインカジノ 日本の入出金方法</span>
                        <List items={faqData.five} />
                    </div>
                </FaqQuestion>
                <FaqQuestion no="6">
                    <div className="flex flex-col gap-3">
                        <span>ベストの日本オンラインカジノ</span>
                        <List items={faqData.six} />
                    </div>
                </FaqQuestion>
                <FaqQuestion no="7">
                    日本オンラインカジノのボーナスタイプ
                </FaqQuestion>
                <FaqQuestion no="8">日本オンラインカジノの歴史</FaqQuestion>
                <FaqQuestion no="9">
                    ❓ 日本オンラインカジノFAQ｜よくある質問Q＆A ❓
                </FaqQuestion>
            </div>
        </section>
    );
};
