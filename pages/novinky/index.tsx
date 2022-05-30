import React from "react";
//Next
import Link from "next/link";
import Head from "next/head";
//Components
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import MotionDiv from "../../components/MotionDiv";
import BlogPost from "../../components/BlogPost";
//Utils
import { getBlogPosts } from "../../utils/api";

const News = ({ blogPosts }) => {
  return (
    <>
      <Head>
        <title>Novinky | Rybí zahrada</title>
      </Head>
      <Layout>
        <div className="main-container min-h-screen">
          <section>
            <MotionDiv>
              <h2 className="h2 mb-4">Nejnovější příspěvy</h2>
              <div className="sm:grid sm:grid-cols-2 sm:gap-4 md:flex items-stretch">
                {blogPosts.map((post, index) => (
                  <>
                    {index < 4 && (
                      <div className="w-full md:w-1/4">
                        <BlogPost
                          title={post.fields.title}
                          img={post.fields.image}
                          date={post.fields.date}
                          link={`/novinky/${post.fields.slug}`}
                          key={index}
                        />
                      </div>
                    )}
                  </>
                ))}
              </div>
            </MotionDiv>
          </section>
          <section>
            <MotionDiv>
              <h2 className="h2 mb-4">Příspěvky</h2>
              <div className="sm:grid sm:grid-cols-2 sm:gap-4 md:flex items-stretch">
                {blogPosts.map((post, index) => (
                  <>
                    {index > 3 && (
                      <div className="w-full md:w-1/4">
                        <BlogPost
                          title={post.fields.title}
                          img={post.fields.image}
                          date={post.fields.date}
                          link={`/novinky/${post.fields.slug}`}
                          key={index}
                        />
                      </div>
                    )}
                  </>
                ))}
              </div>
              {blogPosts.length < 5 && (
                <p className="text-sm text-textLight text-center w-full">
                  Omlouváme se, ale nic jsme nenašli
                </p>
              )}
              <Link href="/novinky/vsechny" passHref>
                <a className="text-mainDark underline">
                  Zobrazit všechny články...
                </a>
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
  const blogPosts = await getBlogPosts();
  return {
    props: {
      blogPosts,
    },
  };
};

export default News;
