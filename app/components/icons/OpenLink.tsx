import type { SVGProps } from "react";
const SvgOpenLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path
      fill="#333"
      d="M9.056.875v1.556h2.792l-7.646 7.645L5.3 11.173l7.645-7.646V6.32H14.5V.875m-1.556 12.444H2.056V2.431H7.5V.875H2.056C1.192.875.5 1.575.5 2.431v10.888a1.556 1.556 0 0 0 1.556 1.556h10.888a1.556 1.556 0 0 0 1.556-1.556V7.875h-1.556z"
    />
  </svg>
);
export default SvgOpenLink;
