import { atom } from "recoil";

export const navbarState = atom({
    key: "navbar_state",
    default: {
        show: false,
        openText: "全てのアイテム",
        links: [
            {
                name: "日本のオンラインカジノ",
                subLinks: [
                    {
                        name: "日本人プレーヤーにおすすめの新オンラインカジノ 2022",
                        path: "/",
                    },
                    {
                        name: "トップ10評価の高いベストオンラインカジノ",
                        path: "/",
                    },
                    {
                        name: "トップ10評価の高いベストオンラインカジノ",
                        path: "/",
                    },
                    {
                        name: "モバイルカジノ",
                        path: "/",
                    },
                    {
                        name: "最高のペイアウトオンラインカジノ",
                        path: "/",
                    },
                    {
                        name: "オンラインギャンブル",
                        path: "/",
                    },
                    {
                        name: "日本のライブカジノ",
                        path: "/",
                    },
                    {
                        name: "リアルマネーカジノ",
                        path: "/",
                    },
                    {
                        name: "仮想通貨オンラインカジノ",
                        path: "/",
                    },
                    {
                        name: "最低入金額の少ないカジノ",
                        path: null,
                        subLinks: [
                            {
                                name: "100円の入金カジノ",
                                path: "/",
                            },
                            {
                                name: "500円から入金できるカジノ",
                                path: "/",
                            },
                            {
                                name: "1000円の入金カジノ",
                                path: "/",
                            },
                        ],
                    },
                    {
                        name: "日本語サポートが充実のオンラインカジノ",
                        path: "/",
                    },
                ],
            },
            {
                name: "オンラインカジノボーナス",
                subLinks: [],
            },
            {
                name: "オンラインカジノ 入金",
                subLinks: [],
            },
            {
                name: "オンライン カジノ ゲーム",
                subLinks: [],
            },
            {
                name: "オンラインカジノレビュー",
                subLinks: [],
            },
        ],
    },
});
