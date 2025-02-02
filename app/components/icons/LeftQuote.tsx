import type { SVGProps } from "react";
const SvgLQuote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M10 7L8 11H11V17H5V11L7 7H10ZM18 7L16 11H19V17H13V11L15 7H18Z"
      fill="#B772EA"
    />
  </svg>
);
export default SvgLQuote;
