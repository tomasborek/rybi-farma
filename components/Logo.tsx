import React from "react";
//Next
import Image from "next/image";

const Logo = ({ width, white }: { width: number; white?: boolean }) => {
  return (
    <Image
      src={`/img/logos/rybizahrada-logo-transparent${white ? "-bile" : ""}.png`}
      width={width}
      height={width / 1.31}
    />
  );
};

export default Logo;
