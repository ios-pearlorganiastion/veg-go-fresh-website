import React from "react";
import logo from "../assets/images/logo.png";

export function VegGoLogo({
  className = "h-14 w-auto",
}: {
  className?: string;
}) {
  return (
    <div className="flex items-center select-none cursor-pointer">
      <img
        src={logo}
        alt="VegGo Fresh"
        className={className}
        draggable={false}
      />
    </div>
  );
}

export default VegGoLogo;