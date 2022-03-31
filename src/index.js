import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>
);
