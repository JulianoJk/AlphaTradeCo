import { SVGProps } from "react";
const GreeceIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "3em"}
    height={props.height || "2em"}
    viewBox="0 0 27 18"
    {...props}
  >
    <path fill="#0d5eaf" d="M0 0h27v18H0z" />
    <path
      fill="none"
      stroke="#fff"
      strokeWidth={2}
      d="M5 0v11M0 5h10m0-2h17M10 7h17M0 11h27M0 15h27"
    />
  </svg>
);
export default GreeceIllustration;
