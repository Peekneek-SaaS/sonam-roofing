import { cn } from "@/lib/utils";
import * as React from "react";

const Icon = ({ className }: { className?: string }) => (
  <svg
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    id="home"
    data-name="Flat Line"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("icon flat-line size-5", className)}
  >
    <path
      id="secondary"
      d="M19,10V20.3a.77.77,0,0,1-.83.7H14.3V14.1H9.7V21H5.83A.77.77,0,0,1,5,20.3V10l7-7Z"
      style={{
        fill: "rgb(253 186 116)",
        strokeWidth: 2,
      }}
    />
    <path
      id="primary"
      d="M19,10V20.3a.77.77,0,0,1-.83.7H14.3V14.1H9.7V21H5.83A.77.77,0,0,1,5,20.3V10"
      style={{
        fill: "none",
        stroke: "rgb(246, 96, 70)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <polyline
      id="primary-2"
      data-name="primary"
      points="21 12 12 3 3 12"
      style={{
        fill: "none",
        stroke: "rgb(246, 96, 70)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);
export default Icon;
