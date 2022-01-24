import React, { Fragment,useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {setCourses} from "../../redux/actions/CourseActions"

import {
 
  BsFillArrowRightCircleFill,
 
  BsPersonCheckFill,
} from "react-icons/bs";
import { FcAssistant, FcClock } from "react-icons/fc";
import { FaComments} from "react-icons/fa";
import {

  AiFillStar,
  AiFillNotification,
} from "react-icons/ai";
import classes from "./CourseList.module.css";
import educ from "../../assets/educa.png";
import Summary from "../summary/Summary";
import SingleCourse from "./SingleCourse";
import axios, { Axios } from "axios";



const Courselists = () => {

  



  const courses = useSelector((state) => state.allCourses);
  console.log("courses",courses)

  const dispatch = useDispatch()
  //  console.log(courses);

  const getCourses = async()=>{

    const response = await axios.get("http://fakestoreapi.com/products").catch ((error)=>{
      console.log(error)
    })
     dispatch(setCourses(response.data))

  }

  useEffect(()=>{

    getCourses();
  },[])

  
  
  return (
    <Fragment>
     
      <div className={classes["main-image"]}>
        <img src={educ} alt="shoes store" />
      </div>
      <Summary/>
      <main>
        <div className=" w-full pt-20 sm:px-6 lg:px-8  bg-gray-200">
          <h1 className="font-bold md:text-4xl sm:text-sm my-4  ">
            {" "}
            PoPulor Courses
            
          </h1>
          <div className="    ">
                   <SingleCourse/>
                
          </div>
        </div>
      </main>

      <main>
        <div className=" w-full pt-20 sm:px-6 lg:px-20  bg-gray-200">
          <h1 className="font-bold md:text-4xl sm:text-sm my-4  ">
            {" "}
            All Courses
          </h1>
          
      
            <div class=" grid grid-cols-4 gap-2 items-center pb-5">
            <div class="bg-white transition duration-150 ease-in-out rounded shadow border p-6 w-64 h-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <span className=" bg-educ h-4 mt-0 flex justify-around items-center"></span>
                  <h5 class="text-xl font-bold my-1 mt-2">React js & Redux</h5>
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
                    <BsFillArrowRightCircleFill className="text-2xl -mt-8 float-right transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                  </div>
                </div>
                <div class="bg-white transition duration-150 ease-in-out rounded shadow border p-6 w-64 h-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <span className=" bg-educ h-4 mt-0 flex justify-around items-center"></span>
                  <h5 class="text-xl font-bold my-1 mt-2">React js & Redux</h5>
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
                    <BsFillArrowRightCircleFill className="text-2xl -mt-8 float-right transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                  </div>
                </div>
                <div class="bg-white transition duration-150 ease-in-out rounded shadow border p-6 w-64 h-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <span className=" bg-educ h-4 mt-0 flex justify-around items-center"></span>
                  <h5 class="text-xl font-bold my-1 mt-2">React js & Redux</h5>
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
                    <BsFillArrowRightCircleFill className="text-2xl -mt-8 float-right transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                  </div>
                </div>
                <div class="bg-white transition duration-150 ease-in-out rounded shadow border p-6 w-64 h-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <span className=" bg-educ h-4 mt-0 flex justify-around items-center"></span>
                  <h5 class="text-xl font-bold my-1 mt-2">React js & Redux</h5>
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
                    <BsFillArrowRightCircleFill className="text-2xl -mt-8 float-right transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                  </div>
                </div>
                <div class="bg-white transition duration-150 ease-in-out rounded shadow border p-6 w-64 h-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <span className=" bg-educ h-4 mt-0 flex justify-around items-center"></span>
                  <h5 class="text-xl font-bold my-1 mt-2">React js & Redux</h5>
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
                    <BsFillArrowRightCircleFill className="text-2xl -mt-8 float-right transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                  </div>
                </div>
                <div class="bg-white transition duration-150 ease-in-out rounded shadow border p-6 w-64 h-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <span className=" bg-educ h-4 mt-0 flex justify-around items-center"></span>
                  <h5 class="text-xl font-bold my-1 mt-2">React js & Redux</h5>
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
                    <BsFillArrowRightCircleFill className="text-2xl -mt-8 float-right transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                  </div>
                </div>
                <div class="bg-white transition duration-150 ease-in-out rounded shadow border p-6 w-64 h-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <span className=" bg-educ h-4 mt-0 flex justify-around items-center"></span>
                  <h5 class="text-xl font-bold my-1 mt-2">React js & Redux</h5>
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
                    <BsFillArrowRightCircleFill className="text-2xl -mt-8 float-right transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                  </div>
                </div>
                <div class="bg-white transition duration-150 ease-in-out rounded shadow border p-6 w-64 h-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <span className=" bg-educ h-4 mt-0 flex justify-around items-center"></span>
                  <h5 class="text-xl font-bold my-1 mt-2">React js & Redux</h5>
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
                    <BsFillArrowRightCircleFill className="text-2xl -mt-8 float-right transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                  </div>
                </div>
                <div class="bg-white transition duration-150 ease-in-out rounded shadow border p-6 w-64 h-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <span className=" bg-educ h-4 mt-0 flex justify-around items-center"></span>
                  <h5 class="text-xl font-bold my-1 mt-2">React js & Redux</h5>
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
                    <BsFillArrowRightCircleFill className="text-2xl -mt-8 float-right transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                  </div>
                </div>
                <div class="bg-white transition duration-150 ease-in-out rounded shadow border p-6 w-64 h-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <span className=" bg-educ h-4 mt-0 flex justify-around items-center"></span>
                  <h5 class="text-xl font-bold my-1 mt-2">React js & Redux</h5>
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
                    <BsFillArrowRightCircleFill className="text-2xl -mt-8 float-right transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                  </div>
                </div>
                <div class="bg-white transition duration-150 ease-in-out rounded shadow border p-6 w-64 h-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <span className=" bg-educ h-4 mt-0 flex justify-around items-center"></span>
                  <h5 class="text-xl font-bold my-1 mt-2">React js & Redux</h5>
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
                    <BsFillArrowRightCircleFill className="text-2xl -mt-8 float-right transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                  </div>
                </div>
                <div class="bg-white transition duration-150 ease-in-out rounded shadow border p-6 w-64 h-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <span className=" bg-educ h-4 mt-0 flex justify-around items-center"></span>
                  <h5 class="text-xl font-bold my-1 mt-2">React js & Redux</h5>
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
                    <BsFillArrowRightCircleFill className="text-2xl -mt-8 float-right transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                  </div>
                </div>
            </div>
      
        </div>
      </main>


    </Fragment>
  );
};

export default Courselists;
