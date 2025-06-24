import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={122}
    height={123}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="var(--myemerald-400)"
        d="m93.172 61.365 28.693-16.703-16.086-28.094-28.692 16.703V0H44.91v33.271L16.22 16.568.133 44.662l28.693 16.703L.133 78.068l16.086 28.094L44.91 89.458V123h32.176V89.458l28.692 16.704 16.086-28.094-28.693-16.703Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="var(--mywhite)" d="M0 0h122v123H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent