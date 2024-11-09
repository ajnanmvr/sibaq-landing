import React from "react";

export default function RoundArrow({
  color,
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width="31"
      height="31"
      className={className}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="15.5"
        cy="15.4985"
        r="15.5"
        transform="rotate(-90 15.5 15.4985)"
        fill="url(#paint0_linear_104_18)"
      />
      <path
        d="M16.2071 8.42752C15.8166 8.037 15.1834 8.037 14.7929 8.42752L8.42893 14.7915C8.03841 15.182 8.03841 15.8152 8.42893 16.2057C8.81946 16.5962 9.45262 16.5962 9.84315 16.2057L15.5 10.5488L21.1569 16.2057C21.5474 16.5962 22.1805 16.5962 22.5711 16.2057C22.9616 15.8152 22.9616 15.182 22.5711 14.7915L16.2071 8.42752ZM16.5 21.8625L16.5 9.13463L14.5 9.13463L14.5 21.8625L16.5 21.8625Z"
        fill="black"
      />
      <defs>
        <linearGradient
          id="paint0_linear_104_18"
          x1="15.5"
          y1="-0.00146294"
          x2="15.5"
          y2="30.9985"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FCFCFC" />
          <stop offset="1" stopColor={color} />
        </linearGradient>
      </defs>
    </svg>
  );
}
