import { SVGProps } from "react";

const ItalyIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "3em"}
    height={props.height || "1.8em"}
    viewBox="0 0 3 2"
    {...props}
  >
    <path fill="#009246" d="M0 0h1v2H0z" />
    <path fill="#fff" d="M1 0h1v2H1z" />
    <path fill="#ce2b37" d="M2 0h1v2H2z" />
  </svg>
);
export default ItalyIllustration;
