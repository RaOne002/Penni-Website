import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1920}
    height={861}
    fill="none"
    {...props}
  >
    <path fill="#262626" d="M0 0h1920v861H0z" />
    <g stroke="#B3B3B3" strokeOpacity={0.1}>
      <path d="M0 100h1920M0 200h1920M0 300h1920M0 400h1920M0 500h1920M0 600h1920M0 700h1920M0 800h1920M100 0v861M200 0v861M300 0v861M400 0v861M500 0v861M600 0v861M700 0v861M800 0v861M900 0v861M1000 0v861M1100 0v861M1200 0v861M1300 0v861M1400 0v861M1500 0v861M1600 0v861M1700 0v861M1800 0v861M1900 0v861" />
    </g>
  </svg>
)
export default SvgComponent
