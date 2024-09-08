import type { SVGProps } from "react";
const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#333"
      d="M3.358 2.569A1.679 1.679 0 1 1 0 2.567a1.679 1.679 0 0 1 3.358.002m.05 2.921H.05V16h3.358zm5.306 0H5.373V16H8.68v-5.515c0-3.073 4.004-3.358 4.004 0V16H16V9.343c0-5.18-5.927-4.986-7.32-2.443z"
    />
  </svg>
);
export default SvgLinkedin;
