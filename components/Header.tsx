import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  return (
    <header className="flex justify-center items-center py-4 text-text">
      <div className="mr-8">
        <ul className="flex space-x-4">
          <LinkItem link="/nase-farma">Naše farma</LinkItem>
          <LinkItem link="/Novinky">Novinky</LinkItem>
        </ul>
      </div>
      <div>
        <Link href="/">
          <Image
            src="/img/logos/rybizahrada-logo-transparent.png"
            width={80}
            height={61}
            className="cursor-pointer"
          ></Image>
        </Link>
      </div>
      <div className="ml-8">
        <ul className="flex space-x-4">
          <LinkItem link="/recepty">Recepty</LinkItem>
          <LinkItem link="/nakupy">Nákupy</LinkItem>
        </ul>
      </div>
    </header>
  );
};

const LinkItem = ({ children, link }) => {
  const router = useRouter();
  const path = router.pathname;
  const isActive = path === link;
  const [hover, setHover] = useState(false);
  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative py-2 cursor-pointer`}
    >
      <Link href={link}>{children}</Link>
      <div
        className={`absolute w-0 left-1/2 bottom-0 transition-all duration-500 h-[2px] bg-main ${
          hover || isActive ? "w-1/2" : ""
        }`}
      ></div>
      <div
        className={`absolute w-0 right-1/2 bottom-0 transition-all duration-500 h-[2px] bg-main ${
          hover || isActive ? "w-1/2" : ""
        }`}
      ></div>
    </li>
  );
};

export default Header;
