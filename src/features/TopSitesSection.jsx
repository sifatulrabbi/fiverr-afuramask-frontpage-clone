import React from "react";
import { v4 } from "uuid";
import { topFeatureCardData } from "../assets";
import { Card } from "../components";

export const TopSitesSection = () => {
    return (
        <section className="w-full mt-8 flex flex-col justify-start items-center">
            <h2
                className="mb-4 text-2xl text-white font-bold text-center"
                style={{ letterSpacing: "1px" }}
            >
                ベストの日本オンラインカジノ
            </h2>
            <div className="flex flex-wrap justify-start items-start gap-4">
                {topFeatureCardData.map(
                    ({ img, name, description, methods, rating, id }) => (
                        <Card
                            key={v4()}
                            top={id}
                            rating={rating}
                            methods={methods}
                            name={name}
                            img={img}
                            description={description}
                            alt={Number(id) > 3}
                        />
                    )
                )}
            </div>
        </section>
    );
};
