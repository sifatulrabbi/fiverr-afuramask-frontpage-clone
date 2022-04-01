import React from "react";

export const FeatureCard = ({ title, img, text }) => {
    return (
        <div className="card-gradient">
            <h4 className="">{title}</h4>
            <div>
                <img src={img} alt={title} className="float-left" />
                <p>{text}</p>
            </div>
        </div>
    );
};
