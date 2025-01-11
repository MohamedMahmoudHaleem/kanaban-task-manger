import { useState } from "react";

const BoardIcon = ({ width = 16, height = 16, color = "#828FA3" }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <path
        fill={hovered ? "#fff" : color}
        d="M0 2.889A2.89 2.89 0 0 1 2.889 0H13.11A2.89 2.89 0 0 1 16 2.889V13.11A2.89 2.89 0 0 1 13.111 16H2.89A2.89 2.89 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89v4.22zm4.889-1.333H11.11v4.444h3.556zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
      ></path>
    </svg>
  );
};

export default BoardIcon;
