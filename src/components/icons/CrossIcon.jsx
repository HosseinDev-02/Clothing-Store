import React from "react";

function CrossIcon({ width, height, color, className }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M8.46445 15.5355L15.5355 8.46446"
                stroke={color || 'currentColor'}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
            <path
                d="M8.46446 8.46445L15.5355 15.5355"
                stroke={color || 'currentColor'}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
        </svg>
    );
}

export default CrossIcon;
