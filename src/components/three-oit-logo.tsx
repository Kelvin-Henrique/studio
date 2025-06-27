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
        {/* Top structure */}
        <path d="M14 15h12" />
        <path d="M20 15v5" />

        {/* Left structure */}
        <path d="M14 20v5" />
        <path d="M14 25h5" />
        
        {/* Right structure */}
        <path d="M26 20v5" />
        <path d="M21 25h5" />

        {/* Bottom small line */}
        <path d="M17 28h6" />
        
        {/* Middle connector */}
        <path d="M17 20h6" />
      </g>
    </svg>
  );
}
