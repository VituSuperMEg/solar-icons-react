import * as React from 'react';

type Props = {
  color?: string;
  size?: number;
};

export const ChatRoundDotsBold: React.FC<Props> = ({
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
     <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8641 12.4113C22.8641 17.9341 18.3869 22.4113 12.8641 22.4113C11.2644 22.4113 9.75247 22.0357 8.41164 21.3678C8.05532 21.1904 7.64804 21.1313 7.2635 21.2342L5.03746 21.8298C4.07112 22.0883 3.18706 21.2043 3.44562 20.238L4.04123 18.0119C4.14412 17.6274 4.08505 17.2201 3.90757 16.8638C3.23973 15.5229 2.86411 14.011 2.86411 12.4113C2.86411 6.88848 7.34126 2.41133 12.8641 2.41133C18.3869 2.41133 22.8641 6.88848 22.8641 12.4113ZM16.8641 13.4113C16.3118 13.4113 15.8641 12.9636 15.8641 12.4113C15.8641 11.859 16.3118 11.4113 16.8641 11.4113C17.4164 11.4113 17.8641 11.859 17.8641 12.4113C17.8641 12.9636 17.4164 13.4113 16.8641 13.4113ZM12.8641 13.4113C12.3118 13.4113 11.8641 12.9636 11.8641 12.4113C11.8641 11.859 12.3118 11.4113 12.8641 11.4113C13.4164 11.4113 13.8641 11.859 13.8641 12.4113C13.8641 12.9636 13.4164 13.4113 12.8641 13.4113ZM8.86411 13.4113C8.31183 13.4113 7.86411 12.9636 7.86411 12.4113C7.86411 11.859 8.31183 11.4113 8.86411 11.4113C9.41639 11.4113 9.86411 11.859 9.86411 12.4113C9.86411 12.9636 9.41639 13.4113 8.86411 13.4113Z" fill={color}/>
    </svg>
  );
};