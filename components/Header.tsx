import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { useRouter } from "next/router";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center md:justify-center py-4 text-text mb-8 bg-white shadow-sm">
      <div className="hidden md:mr-8 md:block">
        <ul className="flex space-x-4">
          <LinkItem link="/nase-farma">Naše farma</LinkItem>
          <LinkItem link="/novinky">Novinky</LinkItem>
        </ul>
      </div>
      <div className="cursor-pointer -order-1 md:order-none">
        <Link href="/">
          <div>
            <Logo width={80} />
          </div>
        </Link>
      </div>
      <div className="hidden md:ml-8 md:block">
        <ul className="flex space-x-4">
          <LinkItem link="/recepty">Recepty</LinkItem>
          <LinkItem link="https://rybizahrada.cz">Nákupy</LinkItem>
        </ul>
      </div>
      <div className="md:hidden text-sm">
        <ul className="flex space-x-4">
          <LinkItem link="/nase-farma">Naše farma</LinkItem>
          <LinkItem link="/novinky">Novinky</LinkItem>
          <LinkItem link="/recepty">Recepty</LinkItem>
          <LinkItem link="https://rybizahrada.cz">Nákupy</LinkItem>
        </ul>
      </div>
    </header>
  );
};

const LinkItem = ({
  children,
  link,
  acceptedLinks = [],
}: {
  children: ReactNode;
  link: string;
  acceptedLinks?: Array<any>;
}) => {
  const accepted = () => {
    let isAccepted = false;
    acceptedLinks.forEach((link) => {
      if (path.includes(link)) {
        isAccepted = true;
      }
    });
    return isAccepted;
  };
  const router = useRouter();
  const path = router.pathname;
  const isActive = path.includes(link) || accepted();
  const [hover, setHover] = useState(false);

  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative py-2 cursor-pointer`}
    >
      <Link href={link} passHref>
        <a {...(link.includes("https://") && { target: "_blank" })}>
          {children}
        </a>
      </Link>
      <div
        className={`absolute  left-1/2 bottom-0 transition-all duration-500 h-[2px] bg-main ${
          hover || isActive ? "w-1/2" : "w-0"
        }`}
      ></div>
      <div
        className={`absolute  right-1/2 bottom-0 transition-all duration-500 h-[2px] bg-main ${
          hover || isActive ? "w-1/2" : "w-0"
        }`}
      ></div>
    </li>
  );
};

export default Header;
