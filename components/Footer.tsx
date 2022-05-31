import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-4 mt-28 bg-mainDark">
      <div className="main-container">
        <div className="flex justify-center mb-4">
          <Logo width={80} white />
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-start space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <FooterSection heading={"O rybí zahradě"}>
            <p>
              Jsme profíci na pěstování zeleniny a chov ryb. Dopřáváme jim
              nadstandartní péči v souladu s přírodou. Díky aquaponickému
              farmaření u nás nakoupíte čerstvé a lokální produkty v každém
              ročním období.
            </p>
          </FooterSection>
          <FooterSection middle heading={"Navigace"}>
            <ul className="w-full flex flex-col items-center">
              <li>
                <Link href="/nase-farma">Naše farma</Link>
              </li>
              <li>
                <Link href="/novinky">Novinky</Link>
              </li>
              <li>
                <Link href="/recepty">Recepty</Link>
              </li>
              <li>
                <Link href="/nakupy">Nákupy</Link>
              </li>
            </ul>
          </FooterSection>
          <FooterSection heading={"Kontakt"} last>
            <p className="text-center md:text-right">
              <b>Aqaponia s.r.o</b>
            </p>
            <p className="mb-4 text-center md:text-right">
              Lážovice 52 <br /> 257 24
            </p>
            <div className="flex items-center  mb-2">
              <i className="fas fa-phone mr-2"></i>
              <p>
                <a href="tel:+420775885626"></a>(+420) 775 885 626
              </p>
            </div>
            <div className="flex items-center ">
              <i className="fas fa-envelope mr-2"></i>
              <p>
                <a href="mailto:info@rybizahrada.cz">info@rybizahrada.cz</a>
              </p>
            </div>
          </FooterSection>
        </div>
      </div>
      <div className="flex justify-center py-4 md:py-2 text-white font-extralight">
        <p>Rybí zahrada 2022 &copy; Všechna práva vyhrazena</p>
      </div>
    </footer>
  );
};

const FooterSection = ({
  heading,
  children,
  middle = false,
  last = false,
}: {
  heading: string;
  children: React.ReactNode;
  middle?: boolean;
  last?: boolean;
}) => {
  return (
    <div
      className={`flex-[1] text-white text-center md:text-left ${
        last && "flex flex-col items-center md:items-end"
      }`}
    >
      <h3
        className={`heading mb-4 ${middle && "md:text-center"} ${
          last && "text-right"
        }`}
      >
        {heading}
      </h3>
      <div className="text-proseLight text-sm">{children}</div>
    </div>
  );
};

export default Footer;
