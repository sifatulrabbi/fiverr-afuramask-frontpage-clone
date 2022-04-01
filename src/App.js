import React from "react";
import { BestCasinos, BettingSites, Hero, Navbar } from "./features";

function App() {
    return (
        <>
            <Navbar />
            <main className="mt-[60px] p-4">
                <Hero />
                <section className="flex flex-col justify-start items-start gap-4">
                    <BestCasinos />
                    <BettingSites />
                </section>
            </main>
        </>
    );
}

export default App;
