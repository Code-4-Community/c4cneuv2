import type { SVGProps } from "react";
const SvgChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path fill="#4A4A51" d="m4 12 5-4 5 4V9.5L9 5 4 9.5z" />
  </svg>
);
export default SvgChevron;
