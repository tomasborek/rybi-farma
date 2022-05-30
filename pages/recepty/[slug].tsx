import React from "react";
//Next
import Head from "next/head";
//Components
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
//Next
import Image from "next/image";
//Utils
import { getRecipe, getRecipes } from "../../utils/api";
import { pnp } from "../../utils/input";
import Link from "next/link";
import MotionDiv from "../../components/MotionDiv";

const Recipe = ({ recipe }) => {
  return (
    <>
      <Head>
        <title>{recipe.fields.name} | Rybí zahrada</title>
      </Head>
      <Layout>
        <MotionDiv>
          <div className="main-container">
            <h1 className="h1 mb-4 mt-8">{recipe.fields.name}</h1>
            <p className="text-sm text-textLight mb-8">
              {new Date(recipe.fields.date).toLocaleDateString("cs-CZ")}
            </p>
            <div className="md:flex space-y-4 md:space-x-4 md:space-y-0">
              <div className="flex-[2]">
                <img
                  className="w-full rounded-lg"
                  src={recipe.fields.image.fields.file.url}
                  alt={recipe.fields.image.fields.title}
                />
              </div>
              <div className="flex-[1] p-4 border-[1px] border-textLighter rounded-lg flex flex-col justify-between">
                <div className="space-y-2">
                  <p>
                    <b>Doba přípravy: </b> {recipe.fields.duration} min
                  </p>
                  <p>
                    <b>Počet porcí: </b> {recipe.fields.servings}
                  </p>
                  <p>
                    <b>Bez chemie mikroplastů</b>
                  </p>
                  <p>
                    <b>Udržitelné a ekologické</b>
                  </p>
                  <p>
                    <b>Lokální a čerstvé</b>
                  </p>
                  {recipe.fields.fishBoxLink && (
                    <Link href={recipe.fields.fishBoxLink} passHref>
                      <a target={"_blank"}>
                        <button className="flex items-center py-2 px-4 bg-gold rounded-lg text-white font-bold !my-4">
                          <i className="fas fa-fish mr-2 "></i>
                          Chci si uvařit
                        </button>
                      </a>
                    </Link>
                  )}
                </div>
                <div className="flex flex-wrap gap-y-2">
                  {recipe.fields.tags?.map((tag, index) => (
                    <div
                      className="rounded-full px-2 mr-2 bg-main text-white cursor-pointer"
                      key={index}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <section className="my-8">
              <h2 className="h2 mb-4">Ingredience</h2>
              <ul className="flex flex-col space-y-2">
                {recipe.fields.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-check-circle text-main mr-2"></i>
                    {ingredient.split("$").length > 1 ? (
                      <p>
                        <Link href={ingredient.split("$")[1]} passHref>
                          <a className="text-main underline" target="_blank">
                            {ingredient.split("$")[0]}
                          </a>
                        </Link>
                      </p>
                    ) : (
                      <p className="text-lg">{ingredient}</p>
                    )}
                  </li>
                ))}
              </ul>
              {recipe.fields.ingredientsTip && (
                <p className=" text-textLight mt-4">
                  {recipe.fields.ingredientsTip}
                </p>
              )}
            </section>
            <section className="my-8 prose">
              <h2 className="h2 mb-4">Recept</h2>
              {pnp(recipe.fields.process)}
              {recipe.fields.alergies && (
                <p className="text-sm text-textLight mt-4">
                  Alergeny: {recipe.fields.alergies}
                </p>
              )}
            </section>
          </div>
        </MotionDiv>
        <Footer />
      </Layout>
    </>
  );
};

export default Recipe;

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const recipe = await getRecipe(slug);
  return {
    props: {
      recipe,
    },
  };
}

export async function getStaticPaths() {
  const recipes = await getRecipes();
  return {
    paths: recipes.map((recipe) => ({
      params: {
        slug: recipe.fields.slug,
      },
    })),
    fallback: false,
  };
}
