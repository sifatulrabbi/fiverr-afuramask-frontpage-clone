import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { v4 } from "uuid";

/**
 * @param {{rating: string}} param0
 * @returns
 */
export const CardRating = ({ rating }) => {
    const ratings = (() => {
        const ratingIntArr =
            typeof rating === "string"
                ? rating.split(".")
                : String(rating).split(".");
        let fullStar = Number(ratingIntArr[0]);
        const half = ratingIntArr[1] ? true : false;
        const arr = [];

        do {
            arr.push(fullStar);
            fullStar--;
        } while (fullStar > 0);

        if (half) arr.push(0.5);

        if (arr.length < 5) {
            let left = 5 - arr.length;
            do {
                arr.push(0);
                left--;
            } while (left > 0);
        }

        return arr;
    })();

    return (
        <div className="w-full flex justify-center items-center gap-1">
            {ratings.map((val) => (
                <span key={v4()} className="text-primary text-lg">
                    {val === 0.5 ? (
                        <FaStarHalfAlt />
                    ) : val === 0 ? (
                        <FaRegStar />
                    ) : (
                        <FaStar />
                    )}
                </span>
            ))}
        </div>
    );
};
