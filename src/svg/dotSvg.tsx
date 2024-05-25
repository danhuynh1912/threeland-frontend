import React from "react";
export default function dotSvg({ color }: any) {
  return (
    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill='none'
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.28 4.72C0.813333 4.24 0.58 3.66667 0.58 3C0.58 2.33333 0.813333 1.76667 1.28 1.3C1.76 0.82 2.33333 0.58 3 0.58C3.66667 0.58 4.23333 0.82 4.7 1.3C5.18 1.76667 5.42 2.33333 5.42 3C5.42 3.66667 5.18 4.24 4.7 4.72C4.23333 5.18667 3.66667 5.42 3 5.42C2.33333 5.42 1.76 5.18667 1.28 4.72Z"
        fill={color || '#6A7373'}
      />
    </svg>
  );
}
