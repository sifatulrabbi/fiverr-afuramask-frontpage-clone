import React from "react";
import { DescSection, Hero, Navbar, TopSitesSection } from "./features";

function App() {
    return (
        <>
            <Navbar />
            <main className="mt-[60px] p-4">
                <Hero />
                <TopSitesSection />
                <DescSection />
            </main>
        </>
    );
}

export default App;
