import React from "react";
import {
    BestCasinos,
    BettingSites,
    DescSection,
    Hero,
    Navbar,
} from "./features";

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
                <DescSection />
            </main>
        </>
    );
}

export default App;
