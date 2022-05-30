import React from "react";
//Next
import Head from "next/head";
//COmponents
import BlogPost from "../../components/BlogPost";
import Layout from "../../components/Layout";
import { getBlogPosts } from "../../utils/api";
import Footer from "../../components/Footer";

const NewsFull = ({ blogPosts }) => {
  return (
    <>
      <Head>
        <title>Všechny novinky | Rybí zahrada</title>
      </Head>
      <Layout>
        <div className="main-container min-h-screen">
          <h2 className="h2 mb-4">Novinky</h2>
          <div className="space-y-4 ">
            {blogPosts.map((post, index) => (
              <BlogPost
                title={post.fields.title}
                img={post.fields.image}
                date={post.fields.date}
                link={`/novinky/${post.fields.slug}`}
                alternative
                key={index}
              />
            ))}
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default NewsFull;

export const getStaticProps = async () => {
  const blogPosts = await getBlogPosts();
  return {
    props: {
      blogPosts,
    },
  };
};
