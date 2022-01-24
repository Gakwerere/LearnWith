

import React from "react";
import { useSelector } from "react-redux";


import {
 
  BsFillHeartFill,
  BsPersonCheckFill,
} from "react-icons/bs";
import { FcAssistant, FcClock } from "react-icons/fc";
import {  FaShareAlt} from "react-icons/fa";
import {

  AiFillStar,
  AiFillNotification,
} from "react-icons/ai";

import {MdOutlineAddShoppingCart} from "react-icons/md";

import { Link } from "react-router-dom";


const SingleCourse = () => {



  const courses = useSelector((state) => state.allCourses.courses);
  const filterCourses = useSelector((state) => state.filter);
  console.log(filterCourses)
 
    const coursesMap = courses.map((course)=>
    
    <div key={course.id} class="bg-white transition duration-150 ease-in-out rounded shadow border p-6 w-64 
     transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                
         <Link to={`/Coursedetails/${course.id}`}>     
    <span className=" bg-educ h-4 mt-0 flex ">

      <div className="flex float-right">

       <BsFillHeartFill className="text-red-500 mr-2"/>
       <FaShareAlt/>

      </div>

    </span>
    <h5 class="text-xs font-bold my-1 mt-2">{course.title}</h5>
    <div className="flex ">
      <span className=" flex flex-col justify-center items-center">
        <FcAssistant />
        <p className="text-xs ml-1">Benjamin</p>
      </span>{" "}
      <span className=" flex flex-col justify-center items-center">
        <FcClock />
        <p className="text-xs ml-2">40 Lctures</p>
      </span>{" "}
      <span className=" flex flex-col justify-center items-center">
        <BsPersonCheckFill />
        <p className="text-xs ml-2">5k Students</p>
      </span>
    </div>
    <span className="flex  	flex-row ">
      <h1 className="font-bold leading-10 text-3xl">5</h1>
      <span className="ml-2 flex my-2">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </span>
    </span>

    <div className="mb-2 text-blue-900">
      <span className="flex ">
        <AiFillNotification />
        <h3 className="ml-2">$50.00</h3>
      </span>

    
      <MdOutlineAddShoppingCart className="text-2xl -mt-8 float-right transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
    </div>
    
</Link>
  </div>
)
  return <div>
    <div className="grid grid-cols-5 gap-2">

    {coursesMap}
    </div>
  
  </div>;
};

export default SingleCourse;
