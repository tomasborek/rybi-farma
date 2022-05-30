import React from "react";
//Next
import Head from "next/head";
//Components
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import MotionDiv from "../../components/MotionDiv";
//Utils
import { getBlogPost, getBlogPosts } from "../../utils/api";
import { pnp } from "../../utils/input";
const BlogPostPage = ({ content }) => {
  return (
    <>
      <Head>
        <title>{content.fields.title} | Rybí zahrada</title>
      </Head>
      <Layout>
        <MotionDiv>
          <div className="small-container prose prose-img:w-full prose-img:mx-auto prose-img:max-w-[600px]  prose-img:object-cover">
            <h1 className="h1">{content.fields.title}</h1>
            <img
              src={content.fields.image.fields.file.url}
              alt={content.fields.image.title}
              className="w-full rounded-lg !max-w-full"
            />
            {pnp(content.fields.content)}
          </div>
        </MotionDiv>
        <Footer />
      </Layout>
    </>
  );
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const content = await getBlogPost(slug);
  return {
    props: {
      content,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getBlogPosts();
  const paths = posts.map((post) => ({
    params: {
      slug: post.fields.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default BlogPostPage;
