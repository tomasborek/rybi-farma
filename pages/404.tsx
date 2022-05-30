import React from "react";
//Components
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <Layout>
      <div className="main-container min-h-screen ">
        <h2 className="h1">Tuto stránku jsme nenalezli...</h2>
        <p className="h3">Error 404</p>
      </div>
      <Footer />
    </Layout>
  );
};

export default NotFound;
