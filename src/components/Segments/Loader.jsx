import React from "react";

const Loader = () => {
    return (
        <div className="loading-area">
            <div className="loading-box" />
            <div className="loading-pic">
                <svg id="triangle" width="140px" height="140px" viewBox="-3 -4 39 39">
                    <polygon fill="#fff" stroke="#000" strokeWidth={2} points="16,0 32,32 0,32" />
                </svg>
            </div>
        </div>
    );
};

export default Loader;
