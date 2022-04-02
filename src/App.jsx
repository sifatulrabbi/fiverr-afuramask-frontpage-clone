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
import { Aside } from "./features/Aside";
import { navbarState } from "./states";

function App() {
    const state = useRecoilValue(navbarState);

    function lockScroll() {
        if (state.showMenu) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }

    React.useEffect(() => {
        lockScroll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.showMenu]);

    return (
        <>
            <Navbar />
            <div className="w-full h-max flex flex-col justify-start items-start p-4 md:px-[8vw] xl:flex-row xl:gap-8">
                <main className="mt-[60px] xl:max-w-[75%]">
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
                <Aside />
            </div>
            <Footer />
        </>
    );
}

export default App;
