import React from "react";

export const FaqQuestion = ({ no = "1", children }) => {
    return (
        <div className="flex w-full justify-start items-start gap-4 mt-4">
            <div className="h-6 w-6 border-[1px] rounded-[50%] border-white text-white flex justify-center items-center">
                {no}
            </div>
            <a href="/" className="text-[#6a4dff] flex flex-wrap max-w-[80%]">
                {children}
            </a>
        </div>
    );
};
