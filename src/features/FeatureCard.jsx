import React from "react";

export const FeatureCard = ({ title, img, text }) => {
    return (
        <div className="card-gradient" style={{ padding: "8px" }}>
            <h4 className="text-2xl font-bold">{title}</h4>
            <div>
                <img
                    src={img}
                    alt={title}
                    className="float-left mr-6 mb-6"
                    height="80px"
                    width="80px"
                />
                <p>{text}</p>
            </div>
        </div>
    );
};
