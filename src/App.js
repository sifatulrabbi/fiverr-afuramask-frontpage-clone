import React from "react";
import { Hero, Navbar } from "./features";

function App() {
    return (
        <>
            <Navbar />
            <main className="mt-[60px] p-4">
                <Hero />
            </main>
        </>
    );
}

export default App;
