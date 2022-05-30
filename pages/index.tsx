import React from "react";
//Next
import Link from "next/link";
//Components
import Logo from "../components/Logo";
import Layout from "../components/Layout";
//Utils
import { getMainPageImages } from "../utils/api";

const IndexPage = ({ aboutImage, newsImage, shopImage, recipesImage }) => {
  return (
    <Layout noHeader>
      <div className="h-screen grid grid-cols-2 grid-rows-2 bg-black text-white">
        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] flex justify-center items-center rounded-full backdrop-blur-sm bg-black bg-opacity-10 pointer-events-none">
          <Logo white width={120} />
        </div>
        <LinkItem name="Naše farma" img={aboutImage} link="/nase-farma" />
        <LinkItem name="Novinky" img={newsImage} link="/novinky" />
        <LinkItem name="Nákupy" img={shopImage} link="https://rybizahrada.cz" />
        <LinkItem name="Recepty" img={recipesImage} link="/recepty" />
      </div>
    </Layout>
  );
};

export default IndexPage;

const LinkItem = ({
  name,
  img,
  link,
}: {
  name: string;
  img: string;
  link?: string;
  exLink?: string;
}) => {
  return (
    <Link href={link ? link : "/"} passHref>
      <a {...(link.includes("https://") && { target: "_blank" })}>
        <div className="w-full h-full relative cursor-pointer group">
          <h2 className="h1 absolute z-20 text-center w-full top-1/2 -translate-y-1/2">
            {name}
          </h2>
          <img
            src={img}
            className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-all"
          />
        </div>
      </a>
    </Link>
  );
};

export async function getStaticProps() {
  const aboutImage = await getMainPageImages("z-farmy");
  const recipesImage = await getMainPageImages("recepty");
  const newsImage = await getMainPageImages("novinky");
  const shopImage = await getMainPageImages("nakupy");

  return {
    props: {
      aboutImage: aboutImage.fields.file.url,
      recipesImage: recipesImage.fields.file.url,
      newsImage: newsImage.fields.file.url,
      shopImage: shopImage.fields.file.url,
    },
  };
}
