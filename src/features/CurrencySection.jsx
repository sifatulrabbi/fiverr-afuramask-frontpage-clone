import React from "react";
import { chartImg, girlSmile } from "../assets";
import { CurrencySectionCards } from "./CurrencySectionCards";
import { CasinoTypeCard } from "../components";

export const CurrencySection = () => {
    return (
        <section className="mt-10 flex flex-col justify-start items-start gap-10">
            <div
                className="card-gradient"
                style={{ padding: "8px", paddingBottom: "1.5rem" }}
            >
                <img
                    src={chartImg}
                    alt=""
                    className="object-cover h-auto w-full"
                />
            </div>
            <div className="card-gradient" style={{ padding: "8px" }}>
                <h4 className="text-xl font-bold text-center">
                    オンラインカジノ 日本の入出金方法
                </h4>
                <p>
                    オンライン
                    カジノのアカウント登録を済ませたら、あとは入金をしてゲームプレイができる段階に入れるわけですが、あなたはご自分の軍資金をどうやって入金しようとお考えでしょうか？実際にマネーを賭けて遊ぶには、オンラインカジノへ送金し、自分のユーザアカウントに入金する必要です。送金方法としては銀行からの電子送金、クレジットカードでの支払い、電子マネーサービス等があり、最近では
                    <a href="/" className="text-primary inline-block">
                        ビットコインで入出金
                    </a>
                    ができるカジノも増えてきました。この中で最もかんたんなのはクレジットカードと日本電子マネーサービスを利用する事です。多くのオンラインカジノでビザカード、マスタカードとJCBカードによる入金を受け付けていますが、クレジットカード会社の方針で使用できない場合もあります。またクレジットカードで問題なく入金できる場合でも、自分のアカウントからスムーズに出金する事を考えると、エコペイズのような電子マネーサービスを利用するのがお勧めです。入出金に多く利用されている電子マネーサービスは以下の通り。プレイしたいのサイトでどのサービスを扱っているか確認するのをお忘れないでください。online
                    casino japan最も人気の入出金方法は：
                </p>
                <ul className="flex flex-col justify-start items-start list-none p-3 gap-3">
                    <li>
                        <span className="h-2 w-2 rounded-full bg-primary inline-block mr-4" />
                        Visa
                    </li>
                    <li>
                        <span className="h-2 w-2 rounded-full bg-primary inline-block mr-4" />
                        MasterCard
                    </li>
                    <li>
                        <span className="h-2 w-2 rounded-full bg-primary inline-block mr-4" />
                        Credit Card
                    </li>
                    <li>
                        <span className="h-2 w-2 rounded-full bg-primary inline-block mr-4" />
                        銀行振込
                    </li>
                    <li>
                        <span className="h-2 w-2 rounded-full bg-primary inline-block mr-4" />
                        Bitcoin
                    </li>
                </ul>
            </div>
            <div className="card-gradient" style={{ padding: "8px" }}>
                <h4 className="text-xl font-bold text-center">電子マネー</h4>
                <p>
                    オンラインカジノでは電子決済サービスを利用した
                    <a href="/" className="text-primary">
                        入金方法
                    </a>
                    が主流です。電子決済サービスはオンライン上に口座を作成して、入出金を行う方法です。一つの口座から入出金を行えるので、資金管理をしやすくなります。
                    だって、オンラインゲームサイトの運営は海外にあるため、海外で多く使われている電子決済サービスでないと対応していないことがほとんどです。日本オンラインカジノで使われる代表的な電子決済サービスには次のようなものがあります。
                </p>
                <ul className="flex flex-col justify-start items-start list-none p-3 gap-3">
                    <li>
                        <span className="h-2 w-2 rounded-full bg-primary inline-block mr-4" />
                        <a href="/" className="text-primary">
                            EcoPayz
                        </a>
                    </li>
                    <li>
                        <span className="h-2 w-2 rounded-full bg-primary inline-block mr-4" />
                        <a href="/" className="text-primary">
                            Neteller
                        </a>
                    </li>
                    <li>
                        <span className="h-2 w-2 rounded-full bg-primary inline-block mr-4" />
                        <a href="/" className="text-primary">
                            iWallet
                        </a>
                    </li>
                    <li>
                        <span className="h-2 w-2 rounded-full bg-primary inline-block mr-4" />
                        <a href="/" className="text-primary">
                            PayPal
                        </a>
                    </li>
                    <li>
                        <span className="h-2 w-2 rounded-full bg-primary inline-block mr-4" />
                        <a href="/" className="text-primary">
                            Entropay
                        </a>
                    </li>
                    <li>
                        <span className="h-2 w-2 rounded-full bg-primary inline-block mr-4" />
                        <a href="/" className="text-primary">
                            BXONE
                        </a>
                    </li>
                </ul>
            </div>
            <div className="card-gradient">
                <h4 className="text-xl font-bold text-center">
                    日本オンラインカジノのボーナスタイプ
                </h4>
                <p>
                    日本オンラインカジノのボーナスには、たくさん種類や条件があって、むずかしいイメージがありますが、大吉のチームのレビューを見てみると、どれがお得なボーナスなのか分かりますね！
                    まずは、どんなカジノでどんなプレイをしたいかを頭に思い浮かべてから選ぶといいと思います。
                </p>
            </div>
            <CurrencySectionCards />
            <div className="flex flex-col justify-start items-center bg-[#110f1a] p-4 rounded-2xl">
                <h2 className="font-white text-2xl font-bold text-white text-center">
                    最高の日本オンラインカジノゲーム
                </h2>
                <div className="grid w-full grid-cols-2 justify-center items-center gap-2 mt-4">
                    <CasinoTypeCard
                        title="入金不要ボーナス"
                        img="https://xn--lck0a4d411qemf.jp/wp-content/uploads/2021/01/insurance.png"
                    />
                    <CasinoTypeCard
                        title="オンラインカジノウエルカムボーナス"
                        img="https://xn--lck0a4d411qemf.jp/wp-content/uploads/2021/01/webpage.png"
                    />
                    <CasinoTypeCard
                        title="フリースピンボーナス"
                        img="https://xn--lck0a4d411qemf.jp/wp-content/uploads/2021/01/network.png"
                    />
                    <CasinoTypeCard
                        title="初回入金ボーナス"
                        img="https://xn--lck0a4d411qemf.jp/wp-content/uploads/2021/01/withdraw.png"
                    />
                </div>
            </div>
            <div className="card-gradient">
                <h2 className="text-xl font-bold">
                    日本オンラインカジノの歴史
                </h2>
                <p>
                    日本の最初のギャンブル法は1907年に承認され、その条項のほとんどは今日有効であり、世界で最も古くからあるギャンブル法の一つとなっています。この法律は、後に追加されたモーターボートとオートバイによる競馬と自転車の賭けだけを認めた。今日、スポーツ賭博はオフラインで許可されており、一部の日本ベースのオンラインカジノでも許可されています。
                    <br />
                    国で合法なギャンブル活動のもう一つは国営宝くじです。全国抽選と地元の小さな抽選の両方がありますが、すべて日本政府が所有しています。
                    <br />
                    日本のギャンブラーはすでに国の法律に慣れ、プレーヤーを受け入れるオンラインカジノの欠如にも関わらず、政府は法律を緩和し、より多くのカジノを国民に開放しようとしているようです。
                    2016年、新しい賭博法は、日本のプレーヤーのためのトップのオンラインカジノの既存の禁止を排除し、同様にオフラインカジノリゾートの構築を開始することを承認されました。法案はまだ明確に承認されておらず、政府が変更を行うまでにはさらに時間がかかる可能性がありますが、少なくとも好ましい結果が得られる見込みがあります。
                </p>
            </div>
            <div className="bg-gradient rounded-2xl p-4 pb-[250px] overflow-hidden">
                <p className="text-white relative">
                    おそらく、陸上カジノの合法化に続いて、日本が承認したオンラインカジノも登場するでしょう。また、日本のインターネットカジノが合法になるのを待っている間、大吉のリストから日本のプレーヤー向けの最高のオンラインカジノでプレイすることができます。
                    <br />
                    特に、ヨーロッパの各国、カナダ、オーストラリアなどの先進国でファンが多く、日本でも2010年頃から大手online
                    casino
                    japan企業の本格的参入によって、現在では56万人以上のプレイヤーがいるそうです。日本では陸上カジノは許可されていませんが、このゲームサイトは日本で許可されており、完全に合法であるため、オンラインカジノでのプレイはこれ以上ないものになることをお勧めします。
                    <img
                        src={girlSmile}
                        alt=""
                        className="absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2"
                    />
                </p>
            </div>
        </section>
    );
};
