import type { SVGProps } from "react";
const SvgSite = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.78 9.22a.843.843 0 0 1 0 1.23.873.873 0 0 1-1.23 0 4.33 4.33 0 0 1 0-6.12l3.065-3.064a4.33 4.33 0 0 1 6.12 0 4.33 4.33 0 0 1 0 6.12l-1.29 1.29a6 6 0 0 0-.347-2.096l.407-.415a2.58 2.58 0 0 0 0-3.67 2.58 2.58 0 0 0-3.67 0L6.78 5.55a2.58 2.58 0 0 0 0 3.67m2.44-3.67a.873.873 0 0 1 1.23 0 4.33 4.33 0 0 1 0 6.12l-3.065 3.064a4.33 4.33 0 0 1-6.12 0 4.33 4.33 0 0 1 0-6.12l1.29-1.29a6 6 0 0 0 .347 2.104l-.407.407a2.58 2.58 0 0 0 0 3.67 2.58 2.58 0 0 0 3.67 0L9.22 10.45a2.58 2.58 0 0 0 0-3.67.843.843 0 0 1 0-1.23"
    />
  </svg>
);
export default SvgSite;