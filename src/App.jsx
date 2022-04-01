import React from "react";
import {
    DescSection,
    Hero,
    Navbar,
    TopSitesSection,
    FaqSection,
} from "./features";

function App() {
    return (
        <>
            <Navbar />
            <main className="mt-[60px] p-4">
                <Hero />
                <TopSitesSection />
                <DescSection />
                <FaqSection />
            </main>
        </>
    );
}

export default App;
