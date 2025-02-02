import type { SVGProps } from "react";
const SvgHamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="12"
    viewBox="0 0 17 12"
    fill="none"
    {...props}
  >
    <path d="M1 1H16" stroke="black" strokeWidth="2" strokeLinecap="round" />
    <path d="M1 6H16" stroke="black" strokeWidth="2" strokeLinecap="round" />
    <path d="M1 11H16" stroke="black" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
export default SvgHamburger;
