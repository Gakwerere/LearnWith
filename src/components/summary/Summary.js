import React from "react";
import Filter from "../filter/Filter";
import classes from'../summary/Summary.module.css'

const Summary = () => {
  return (
    <div>
      <section className="" className={classes.summary}>
        <h1 className="font-bold md:text-4xl sm:text-sm my-4 text-gray-900  ">Get The Best Online Courses</h1>
        <p className="my-4 text-gray-700 ">
        Education refers to the discipline that is concerned with methods of teaching and learning in schools or
         school-like environments, as opposed to various nonformal and informal means of socialization
        </p>
        <Filter />
      </section>
    </div>
  );
};

export default Summary;
