import React from "react";
//Next
import Head from "next/head";
//Components
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import MotionDiv from "../components/MotionDiv";
//Utils
import { getJobs, getPage } from "../utils/api";
import { pnp } from "../utils/input";
import Link from "next/link";
const Farm = ({ content, jobs }) => {
  return (
    <>
      <Head>
        <title>Naše farma | Rybí zahrada</title>
      </Head>
      <Layout>
        <div className="main-container">
          <MotionDiv>
            <div className="relative w-full h-min md:h-[400px] rounded-lg overflow-hidden">
              <img
                className="w-full h-auto md:h-full  object-cover"
                src={content.fields.mainBanner.fields.file.url}
                alt={content.fields.mainBanner.fields.title}
              />
            </div>
          </MotionDiv>
          <div>
            {content.fields.sections.map((section, index) => (
              <>
                {section.fields.content && section.fields.image && (
                  <>
                    <Section
                      key={index}
                      title={section.fields.title}
                      sectionContent={section.fields.content}
                      img={section.fields.image}
                      {...(index % 2 && { alternative: true })}
                    />
                  </>
                )}
              </>
            ))}
          </div>

          <section>
            <MotionDiv>
              <h2 className="h2 text-center mb-4">Fakta o farmě</h2>
              <div className="md:grid md:grid-cols-2 md:gap-2 space-y-4 md:space-y-0 w-full max-w-[800px] mx-auto">
                {content.fields.sections.map((section, index) => (
                  <>
                    {section.fields.title == "Fakta o farmě" && (
                      <>
                        {section.fields.list.map((fact, index) => (
                          <FactBox
                            key={index}
                            fact={fact.split(",")[0]}
                            data={fact.split(",")[1]}
                            icon={fact.split(",")[2]}
                          />
                        ))}
                      </>
                    )}
                  </>
                ))}
              </div>
            </MotionDiv>
          </section>
          <div className="md:flex md:items-start md:space-x-4">
            <div className="flex-[2]">
              <Section
                title={
                  content.fields.sections[content.fields.sections.length - 2]
                    .fields.title
                }
                sectionContent={
                  content.fields.sections[content.fields.sections.length - 2]
                    .fields.content
                }
              />
            </div>
            <div className="flex-[1]">
              <Section
                title={
                  content.fields.sections[content.fields.sections.length - 1]
                    .fields.title
                }
                sectionContent={
                  content.fields.sections[content.fields.sections.length - 1]
                    .fields.content
                }
              />
            </div>
          </div>
          {jobs && (
            <MotionDiv>
              <h2 className="h2 mb-4">Pracovní příležitosti</h2>
              <div className="flex flex-col items-center sm:items-start sm:flex-row w-full  gap-4 flex-wrap">
                {jobs.map((job, index) => {
                  return (
                    <Job
                      title={job.fields.title}
                      icon={job.fields.icon}
                      link={job.fields.link}
                      key={index}
                    />
                  );
                })}
              </div>
            </MotionDiv>
          )}
        </div>
        <Footer />
      </Layout>
    </>
  );
};

const Section = ({
  title,
  sectionContent,
  img,
  alternative,
}: {
  title: string;
  sectionContent: string;
  img?: any;
  alternative?: boolean;
  ref?: any;
  inView?: any;
}) => {
  return (
    <MotionDiv>
      <section>
        <div
          className={`md:flex md:items-center md:justify-between w-full my-8 ${
            alternative ? "flex-row-reverse" : ""
          }`}
        >
          <div className="flex-[2] prose !prose-stone ">
            <h2>{title}</h2>
            {pnp(sectionContent)}
          </div>
          {img && (
            <div className={`flex-[1] ${alternative ? "md:mr-8" : "md:ml-8"}`}>
              <img
                src={img.fields.file.url}
                alt={img.fields.title}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </section>
    </MotionDiv>
  );
};

const FactBox = ({ fact, data, icon }) => {
  return (
    <div className="bg-white shadow-lg text-mainDark flex items-center justify-between p-8 rounded-lg w-full">
      <div>
        <h3 className="h3">{data}</h3>
        <p className="text-lg">{fact}</p>
      </div>
      <i className={`${icon} text-2xl`}></i>
    </div>
  );
};

const Job = ({ title, link, icon }) => {
  return (
    <div className="w-[250px] border-t-4 border-main bg-white py-8 px-4 shadow-lg  cursor-pointer">
      <Link
        href={link.includes("https://") ? link : "https://" + link}
        passHref
      >
        <a target={"_blank"}>
          <i className={`fas fa-${icon} mb-2 text-3xl text-mainDark`}></i>
          <h3 className="h3 mb-2">{title}</h3>
          <button className="px-4 py-2 bg-mainDark transition-all hover:bg-main rounded-lg text-white">
            Více
          </button>
        </a>
      </Link>
    </div>
  );
};

export const getStaticProps = async () => {
  const page = await getPage("O farmě");
  const jobs = await getJobs();
  return {
    props: {
      content: page,
      jobs,
    },
  };
};

export default Farm;
