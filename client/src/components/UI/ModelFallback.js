import React from "react";

import earth from "../../assets/image/earth.png";

const ModelFallback = () => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <img className="w-100" src={earth} alt="Earth" />
            </div>
        </>
    );
};

export default ModelFallback;
