import React from "react";

function PlusIcon({ width, heigh, color }) {
    return (
        <svg
            width={width}
            height={heigh}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 12H18M12 18L12 6"
                stroke={color || 'currentColor'}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default PlusIcon;
