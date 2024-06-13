import { SVGProps } from "react";
const GermanyIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "3em"}
    height={props.height || "1.8em"}
    viewBox="0 0 5 3"
    {...props}
  >
    <path d="M0 0h5v3H0z" />
    <path fill="#D00" d="M0 1h5v2H0z" />
    <path fill="#FFCE00" d="M0 2h5v1H0z" />
  </svg>
);
export default GermanyIllustration;
