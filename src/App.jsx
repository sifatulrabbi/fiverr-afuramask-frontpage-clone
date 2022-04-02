import React from "react";
import { useRecoilValue } from "recoil";
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
import { SlotGamesSection } from "./features";
import { showMenuSelector } from "./states";

function App() {
    const navMenuActive = useRecoilValue(showMenuSelector);

    function lockScroll() {
        if (navMenuActive) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }

    React.useEffect(() => {
        lockScroll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navMenuActive]);

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
