import React from "react";
import { BestCasinos, Hero, Navbar } from "./features";

function App() {
    return (
        <>
            <Navbar />
            <main className="mt-[60px] p-4">
                <Hero />
                <BestCasinos />
            </main>
        </>
    );
}

export default App;
