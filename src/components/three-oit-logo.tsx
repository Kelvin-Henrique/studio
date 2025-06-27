import type { SVGProps } from "react";

export function ThreeOitLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <circle cx="20" cy="20" r="18" strokeDasharray="4 2" />
        {/* Circuit-like design based on the provided logo image */}
        <path d="M14 15h5" />
        <path d="M19 15v5" />
        <path d="M19 20h5" />
        <path d="M24 20v5" />
        <path d="M16 25h8" />
        <path d="M16 25v-5" />
        <path d="M16 20h-3" />
        <path d="M13 20v-5" />
      </g>
    </svg>
  );
}
