import React from "react";
import Layout from "../../components/Layout";
import { getRecipes } from "../../utils/api";
import Link from "next/link";
import BlogPost from "../../components/BlogPost";
import Footer from "../../components/Footer";

const AllRecipes = ({ recipes }) => {
  return (
    <Layout>
      <div className="main-container min-h-screen">
        <h1 className="h1 mb-8">Recepty</h1>
        <div className="space-y-4">
          {recipes.map((recipe, index) => (
            <BlogPost
              key={index}
              date={recipe.fields.date}
              duration={recipe.fields.duration}
              title={recipe.fields.name}
              img={recipe.fields.image}
              link={`/recepty/${recipe.fields.slug}`}
              alternative
            />
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default AllRecipes;

const Recipe = ({
  date,
  duration,
  name,
  img,
  slug,
}: {
  date: Date;
  duration: number;
  name: string;
  img: string;
  slug: string;
}) => {
  const dateString = new Date(date).toLocaleDateString("cs-CZ");
  return (
    <div className="w-full h-auto rounded-lg overflow-hidden bg-white shadow-md cursor-pointer my-4">
      <Link href={`/recept/${slug}`}>
        <div className="flex">
          <img src={img} className="w-[200px] h-full object-cover" />
          <div className="p-4 w-full">
            <div className="flex items-center space-x-4 w-full text-sm pb-2 text-textLight">
              <p className="">{dateString}</p>
              <div className="flex items-center">
                <i className="fas fa-clock mr-2"></i>
                <p>{duration} min</p>
              </div>
            </div>
            <h4 className="h4 w-1/2">{name}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const recipes = await getRecipes();
  return {
    props: {
      recipes,
    },
  };
};
