import { atom } from "recoil";

export const accordionState = atom({
    key: "accordion_state",
    default: {
        active: "",
    },
});
