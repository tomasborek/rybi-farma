import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="min-h-screen">{children}</div>
);

export default Layout;
