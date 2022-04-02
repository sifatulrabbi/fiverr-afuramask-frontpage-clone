import React from "react";
import {
    DescSection,
    Hero,
    Navbar,
    TopSitesSection,
    FaqSection,
    WhyUsSection,
    FeatureSection,
    CasinoTypeSection,
    PopularGames,
    CurrencySection,
    FaqBottom,
    Footer,
} from "./features";
import { SlotGamesSection } from "./features/SlotGamesSection";

function App() {
    return (
        <>
            <Navbar />
            <main className="mt-[60px] p-4">
                <Hero />
                <TopSitesSection />
                <DescSection />
                <FaqSection />
                <WhyUsSection />
                <FeatureSection />
                <CasinoTypeSection />
                <PopularGames />
                <SlotGamesSection />
                <CurrencySection />
                <FaqBottom />
            </main>
            <Footer />
        </>
    );
}

export default App;
