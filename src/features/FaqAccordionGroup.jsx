import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { v4 } from "uuid";
import { faqBottomData } from "../assets";

const Accordion = ({ title, text, updateActive, active }) => {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        setShow(active === title);
    }, [active, title]);

    function handleShow() {
        updateActive(title);
    }

    return (
        <div className="text-white bg-[#110f1a] rounded-2xl p-4">
            <button
                className="text-left w-full flex justify-between items-start"
                onClick={handleShow}
            >
                {title}
                <FaChevronDown />
            </button>
            <div className="accordion-content" aria-expanded={show}>
                <p className="mt-2">{text}</p>
            </div>
        </div>
    );
};

export const FaqAccordionGroup = () => {
    const [active, setActive] = React.useState(faqBottomData[0].title);

    function updateActive(ques) {
        if (ques === active) {
            return setActive("");
        }
        setActive(ques);
    }

    return (
        <div className="flex flex-col justify-start items-start gap-[4px]">
            {faqBottomData.map(({ title, text }) => (
                <Accordion
                    key={v4()}
                    title={title}
                    text={text}
                    updateActive={updateActive}
                    active={active}
                />
            ))}
        </div>
    );
};
