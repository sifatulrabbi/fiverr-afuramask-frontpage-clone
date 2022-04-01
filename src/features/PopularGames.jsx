import React from "react";

export const PopularGames = () => {
    return (
        <section className="card-gradient mt-10">
            <h5 className="font-bold text-white text-xl text-center">
                日本には人気のオンラインカジノゲーム
            </h5>
            <table className="text-white">
                <tbody>
                    <tr>
                        <th>オンラインカジノ ゲームの種類</th>
                        <th>特徴</th>
                    </tr>
                    <tr>
                        <td>テーブルゲーム</td>
                        <td>ブラックジャック・ルーレット・バカラなど</td>
                    </tr>
                    <tr>
                        <td>マシンゲーム</td>
                        <td>オンラインカジノ スロット・ビデオポーカーなど</td>
                    </tr>
                    <tr>
                        <td>スポーツベッティング</td>
                        <td>サッカーやテニスなどの国際試合や野球賭博など</td>
                    </tr>
                    <tr>
                        <td>ライブカジノ</td>
                        <td>日本人ディーラーと遊べるライブカジノ</td>
                    </tr>
                    <tr>
                        <td>モバイルカジノ</td>
                        <td>
                            スマホから簡単アクセス・アプリがあるカジノサイト
                        </td>
                    </tr>
                    <tr>
                        <td>その他</td>
                        <td>キノ・ビンゴ・シューティングゲームなど</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};
