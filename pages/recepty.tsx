import React from "react";
//Next
import Image from "next/image";
//Components
import Layout from "../components/Layout";
//Fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Recipes = () => {
  return (
    <Layout>
      <div className="main-container">
        <div className="w-full rounded-lg bg-gray-200 h-[400px]"></div>
        <section className="my-8">
          <h2 className="h2 mb-4">Nejnovější recepty</h2>
          <div className="flex space-x-4">
            <Recipe
              date={"2.5.2022"}
              duration={30}
              name={"JARNÍ SUMEČEK S POLENTOU A ZELENINOU"}
            />
            <Recipe
              date={"12.4.2022"}
              duration={20}
              name={
                "KAPR NA GRILU S PETRŽELÍ, SALÁTEM A MEDOVO-HOŘČIČNÝM DRESINKEM"
              }
            />
            <Recipe
              date={"4.4.2022"}
              duration={20}
              name={"GREEN-UP, EGGS-UP"}
            />
            <Recipe
              date={"4.4.2022"}
              duration={20}
              name={"GREEN-UP, EGGS-UP"}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

const Recipe = ({
  date,
  duration,
  name,
}: {
  date: String;
  duration: Number;
  name: String;
}) => (
  <div className="max-w-1/4 h-auto rounded-lg overflow-hidden bg-white shadow-md cursor-pointer">
    <img src="/img/placeholder-food.jpeg" className="w-full" />
    <div className="p-4">
      <div className="flex items-center justify-between w-full text-sm pb-2 text-textLight">
        <p className="">{date}</p>
        <div className="flex items-center">
          <FontAwesomeIcon className="mr-2" icon={"clock"}></FontAwesomeIcon>
          <p>{duration} min</p>
        </div>
      </div>
      <h4 className="h4">{name}</h4>
    </div>
  </div>
);

export default Recipes;
