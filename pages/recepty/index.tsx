import React from "react";
//Next
import Head from "next/head";
import Link from "next/link";
//Components
import Layout from "../../components/Layout";
import BlogPost from "../../components/BlogPost";
import Footer from "../../components/Footer";
import MotionDiv from "../../components/MotionDiv";
//Utils
import { getRecipes } from "../../utils/api";

const Recipes = ({ recipes }) => {
  return (
    <>
      <Head>
        <title>Recepty | Rybí zahrada</title>
      </Head>
      <Layout>
        <div className="main-container min-h-screen">
          {recipes.length ? (
            <section>
              <MotionDiv>
                <Link href={`/recepty/${recipes[0].fields.slug}`}>
                  <div className="w-full cursor-pointer relative rounded-lg overflow-hidden h-[250px] md:h-[400px] flex flex-col justify-center my-8">
                    <img
                      src={recipes[0].fields.image.fields.file.url}
                      className="w-full h-full object-cover absolute top-0 bottom-0"
                      alt=""
                    />
                    <div className="black-gradient absolute w-full top-0 bottom-0"></div>
                    <div className="relative z-20 text-white px-8">
                      <p className="px-2 bg-white text-black w-min rounded-md mb-2 font-bold">
                        Nejnovější
                      </p>
                      <h1 className="h2 md:text-4xl md:w-1/2 mb-2">
                        {recipes[0].fields.name}
                      </h1>
                      <p>
                        <i className="fas fa-clock mr-2"></i>
                        {recipes[0].fields.duration} min
                      </p>
                    </div>
                  </div>
                </Link>
              </MotionDiv>
            </section>
          ) : (
            <></>
          )}
          <section>
            <MotionDiv>
              <h2 className="h2 mb-4">Nejnovější recepty</h2>
              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 md:flex items-stretch">
                {recipes?.map((recipe, index) => (
                  <>
                    {index < 4 && (
                      <div className="w-full md:w-1/4">
                        <BlogPost
                          date={recipe.fields.date}
                          duration={recipe.fields.duration}
                          title={recipe.fields.name}
                          img={recipe.fields.image}
                          link={`/recepty/${recipe.fields.slug}`}
                          key={index}
                        />
                      </div>
                    )}
                  </>
                ))}
              </div>
              {!recipes.length && (
                <p className="text-sm text-textLight w-full text-center">
                  Omlouváme se, nic jsme nenašli
                </p>
              )}
            </MotionDiv>
          </section>
          <section>
            <MotionDiv>
              <h2 className="h2 mb-4">Recepty</h2>
              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 md:flex items-stretch">
                {recipes.map((recipe, index) => (
                  <>
                    {index > 3 && index < 8 && (
                      <div className="w-full md:w-1/4">
                        <BlogPost
                          date={recipe.fields.date}
                          duration={recipe.fields.duration}
                          title={recipe.fields.name}
                          img={recipe.fields.image}
                          link={`/recepty/${recipe.fields.slug}`}
                          key={index}
                        />
                      </div>
                    )}
                  </>
                ))}
                {recipes.length < 5 && (
                  <p className="text-sm text-textLight text-center w-full">
                    Omlouváme se, nic jsme nenašli
                  </p>
                )}
              </div>
              <Link href="/recepty/vsechny">
                <p className="text-mainDark underline cursor-pointer mt-2">
                  Zobrazit všechny recepty...
                </p>
              </Link>
            </MotionDiv>
          </section>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const recipes = await getRecipes();
  return {
    props: {
      recipes,
    },
  };
};

export default Recipes;
