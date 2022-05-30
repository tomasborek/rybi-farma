import React from "react";

const Logo = ({ width, white }: { width: number; white?: boolean }) => {
  return (
    <img
      src={`/img/logos/rybizahrada-logo-transparent${white ? "-bile" : ""}.png`}
      width={width}
      height={width / 1.31}
    />
  );
};

export default Logo;
