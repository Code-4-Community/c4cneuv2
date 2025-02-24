import type { SVGProps } from "react";
const SvgX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    {...props}
  >
    <path
      d="M1 11.6067L11.6066 1.00009"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M1 1L11.6066 11.6066"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgX;
