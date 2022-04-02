import React from "react";
import { FaChevronCircleUp } from "react-icons/fa";

export const GotoTopBtn = () => {
    const [show, setShow] = React.useState(false);

    function traceScroll() {
        if (document.documentElement.scrollTop > window.innerHeight) {
            setShow(true);
        } else setShow(false);
    }

    function gotoTop() {
        window.scrollTo({ top: 0 });
    }

    React.useEffect(() => {
        window.addEventListener("scroll", traceScroll);
    }, []);

    return (
        <button
            className={`text-primary fixed bottom-6 right-6 z-[1000] ${
                show ? "block" : "hidden"
            }`}
            onClick={gotoTop}
        >
            <FaChevronCircleUp className="text-4xl" />
        </button>
    );
};
