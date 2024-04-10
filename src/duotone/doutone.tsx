import * as React from 'react';

type Props = {
  color?: string;
  size?: number;
};

export const ChatRoundDots: React.FC<Props> = ({
  color = '#000',
  size = 15,
}) => {
  return (
    <svg
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <path
        d="M12.423 22.8973C17.9458 22.8973 22.423 18.4201 22.423 12.8973C22.423 7.37442 17.9458 2.89727 12.423 2.89727C6.90015 2.89727 2.423 7.37442 2.423 12.8973C2.423 14.497 2.79862 16.0089 3.46646 17.3498C3.64394 17.7061 3.70301 18.1134 3.60012 18.4979L3.00451 20.724C2.74595 21.6903 3.63001 22.5743 4.59635 22.3158L6.82239 21.7202C7.20693 21.6173 7.61421 21.6764 7.97053 21.8538C9.31137 22.5217 10.8233 22.8973 12.423 22.8973Z"
        stroke={color}
        stroke-width="1.5"
      />
      <path
        opacity="0.5"
        d="M12.423 16.8973V8.89727"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        opacity="0.5"
        d="M8.423 14.8973V10.8973"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        opacity="0.5"
        d="M16.423 14.8973V10.8973"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
