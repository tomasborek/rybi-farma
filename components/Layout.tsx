import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
  noHeader?: boolean;
};

const Layout = ({ children, noHeader = false }: Props) => (
  <div className="min-h-screen text-text">
    {!noHeader && <Header />}
    {children}
  </div>
);

export default Layout;
