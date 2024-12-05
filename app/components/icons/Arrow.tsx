import type { SVGProps } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    fill="none"
    viewBox="0 0 100 100"
    {...props}
  >
    <circle cx={50} cy={50} r={50} fill="url(#a)" fillOpacity={0.6} />
    <path
      fill="#4A4A51"
      d="M62 48.5v3H44l8.25 8.25-2.13 2.13L38.24 50l11.88-11.88 2.13 2.13L44 48.5z"
    />
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(90 0 50)scale(46.6224)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EED2FF" />
        <stop offset={1} stopColor="#EED2FF" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
export default SvgArrow;
