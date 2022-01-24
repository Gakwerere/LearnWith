import React from "react";
import "./pagges/landing.css";

import {
  BsFillDisplayFill,
  BsFillArrowRightCircleFill,
  BsBarChartSteps,

  BsPersonCheckFill,
} from "react-icons/bs";
import { FcAssistant, FcClock } from "react-icons/fc";
import { FaComments} from "react-icons/fa";
import {
  AiFillDribbbleCircle,
  AiFillCalculator,
  AiFillStar,
  AiFillNotification,
} from "react-icons/ai";
import classImage from "../../assets/class.jpg";
import classimage from "../../assets/new.jpg";
import jaica from "../../assets/jaic.jpg";
import klab from "../../assets/klab.png";
import ictchamber from "../../assets/ict.png";
import solvit from "../../assets/solvit.png";

const LandingPage = () => {
  return (
    <div className="  pt-1 bottom-0 ">
      <div className="container mx-auto px-6">
        <main className="">
          <div className=" main w-full  pt-2  sm:px-6 lg:px-8 md:h-screen sm:h-screen  ">
            {/* <!-- Replace with your content --> */}
            <div className=" main-section flex px-4 pt-6 sm:px-0  w-full ">
              <div className=" rounded-lg md:h-96 w-1/2">
                <div className=" main-right flex  	flex-col">
                  <div className="experience flex justify-center  ">
                    <span className="flex  	flex-row ">
                      <h1 className="font-bold leading-10 text-3xl">15</h1>
                      <span className="ml-2">
                        <p>yearz of</p>
                        <p>experience</p>
                      </span>
                    </span>
                    <span className="flex  	flex-row md:ml-12 sm:ml-0">
                      <h1 className="font-bold leading-10 text-3xl">2M</h1>

                      <span className="ml-2">
                        <p>Students</p>
                        <p>Joined Us</p>
                      </span>
                    </span>
                  </div>
                          
                  <div className="md:px-20 md:py-10 sm:px-0 sm:py-1 mt-2 ">

                    <h1 className="font-bold md:text-4xl sm:text-sm  mb-10 z-10 relative ">
                      Grouth Your Career With Complete Courses
                    </h1>
                      
                      
                    <p className="my-4  sm:text-xs md:text-xl lg:text-xl relative z-10">
                      t is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content
                    </p>

                 
                  </div>
                  <div className="px-20 mt-4 ">
                    <button className="border-4 border-blue-200 rounded-lg text-white bg-gray-800 sm:w-28 md:w-64 lg:w-64 sm:h-6 sm:p-1 md:h-14 md:p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                      <a href="/courselists " className="text-xs">Explore More</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" main-left rounded-lg h-96 w-1/2">
                {" "}
                {/* <div className=" bg-gray-800 h-24 w-24 z-0  top-20 absolute "></div> */}
                <div className="w-full z-10 relative">
                  <img src={classimage} class="object-cover ml-2"></img>
                </div>
                {/* <div className=" bg-gray-800  sm:h-10 sm:w-10 md:h-28 md:w-24  z-0 absolute bottom-0 sm:right-50 md:right-20"></div> */}
                <div className=" bg-gray-200 sm:h-10 sm:w-10 md:h-48 md:w-48 rounded-full z-0 absolute top-60 left-80"></div>
                <div className=" bg-blue-100 sm:h-10 sm:w-10 md:h-64 md:w-64 rounded-full z-0 absolute top-60 left-40"></div>
              </div>
            </div>
            {/* <!-- /End replace --> */}
          </div>
        </main>

        {/* why us */}
        <main>
          <div className=" w-full pt-20 sm:px-6 lg:px-8  ">
            <div className="bg-gray-200 rounded-lg p-4 mb-8 ">
          
            <h1 className="font-bold md:text-4xl sm:text-sm  text-center">
              {" "}
              What We Offer?
            </h1>
            <p className="my-4  text-center">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at
            </p>
           
            </div>
            <div class=" md:flex-row lg:flex sm:flex-col justify-around items-center pb-5">
              <div class=" flex flex-col   bg-white rounded shadow border p-6 w-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200 duration-300">
                <span className=" flex justify-around items-center">
                  <BsFillDisplayFill className="text-6xl text-blue-300 " />
                </span>
                <h5 class="text-xl font-bold my-4 mt-0">Computer Science</h5>
                <p class="text-gray-700 text-sm">
                  ong established fact that a reader will be distracted by the
                  readable content of a page when looking at
                </p>
                <div className="my-2 text-blue-900">
                  <BsFillArrowRightCircleFill className="text-2xl float-right" />
                </div>
              </div>
              <div class="bg-white rounded shadow border p-6 w-64">
                <span className=" flex justify-around items-center">
                  <AiFillDribbbleCircle className="text-6xl text-blue-300 " />
                </span>
                <h5 class="text-xl font-bold my-4 mt-0">Web Development</h5>
                <p class="text-gray-700 text-sm">
                  ong established fact that a reader will be distracted by the
                  readable content of a page when looking at
                </p>
                <div className="my-2 text-blue-900">
                  <BsFillArrowRightCircleFill className="text-2xl float-right" />
                </div>
              </div>
              <div class="bg-white rounded shadow border p-6 w-64">
                <span className=" flex justify-around items-center">
                  <AiFillCalculator className="text-6xl text-blue-300 " />
                </span>
                <h5 class="text-xl font-bold my-4 mt-0">Data Science</h5>
                <p class="text-gray-700 text-sm">
                  ong established fact that a reader will be distracted by the
                  readable content of a page when looking at
                </p>
                <div className="my-2 text-blue-900">
                  <BsFillArrowRightCircleFill className="text-2xl float-right" />
                </div>
              </div>
              <div class="bg-white rounded shadow border p-6 w-64">
                <span className=" flex justify-around items-center">
                  <BsBarChartSteps className="text-6xl text-blue-300 " />
                </span>
                <h5 class="text-xl font-bold my-4 mt-0">Engineering</h5>
                <p class="text-gray-700 text-sm">
                  ong established fact that a reader will be distracted by the
                  readable content of a page when looking at
                </p>
                <div className="my-2 text-blue-900">
                  <BsFillArrowRightCircleFill className="text-2xl float-right" />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* popular */}
        <main>
          <div className="popular flex flex-col justify-center items-center w-full pt-20 sm:px-6 lg:px-8  bg-gray-200">
            <h1 className="font-bold md:text-4xl sm:text-sm my-4  ">
              {" "}
              PoPulor Courses
            </h1>
            <div className="flex justify-center items-center">
              <div class=" md:flex-row lg:flex sm:flex-col   pb-5">
                <div class=" course-card bg-white transition duration-150 ease-in-out rounded shadow border p-6 w-64 h-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <img src={classImage} className="h-20 w-96"></img>
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
                <div class="bg-white rounded shadow border p-6 w-64 h-64 ml-4">
                  <h5 class="text-3xl font-bold mb-4 mt-0">My Title</h5>
                  <p class="text-gray-700 text-sm">Content goes here</p>
                </div>
                <div class="bg-white rounded shadow border p-6 w-64 h-64 ml-4">
                  <h5 class="text-3xl font-bold mb-4 mt-0">My Title</h5>
                  <p class="text-gray-700 text-sm">Content goes here</p>
                </div>
                <div class="bg-white rounded shadow border p-6 w-64 h-64 ml-4">
                  <h5 class="text-3xl font-bold mb-4 mt-0">My Title</h5>
                  <p class="text-gray-700 text-sm">Content goes here</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* why  us */}

        <main>
          <div className="whyus w-full py-6 sm:px-6 lg:px-8">
            {/* <div className="  lg:flex  md:flex  px-4 py-6 sm:px-0  w-full "> */}
              <div className="whyus-left h-96 ">
              
                  <div className="md:px-20 md:py-10 sm:px-0 sm:py-1 ">
                    <h1 className="font-bold md:text-4xl sm:text-sm mb-10 z-10 relative ">
                      Why You Choose Us ?
                    </h1>
                    <p className="my-4 relative z-10">
                      t is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a
                    </p>
                    <p className="relative z-10">
                      t is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a
                    </p>
                  </div>
                  <div className="px-20 ">
                    <button className="border-4 border-blue-200 rounded-lg text-white bg-gray-800 h-14 p-4">
                      Explore Us
                    </button>
                  </div>
                
              </div>
              <div  className=" whyus-right  bg-blu flex h-96 ">
                {" "}
                <div className=" right-inner  flex flex-col  mx-4">

                  <div class="inner-card bg-white rounded shadow border p-6 w-64 mb-4 pt-1 h-1/2 backdrop-blur-sm bg-white/30">

                    <span className=" flex justify-around items-center">
                      <BsFillDisplayFill className="text-6xl text-gray-800 " />
                    </span>
                    <h5 class="text-xl font-bold my-4 mt-0 text-blue-500">
                      2000+ Best{" "}
                    </h5>
                    <p class="text-gray-900 text-sm font-bold ">
                      ong established fact that a reader will be distracted by
                      the readable content of a page when looking at
                    </p>
                  </div>
                  <div class=" inner-card bg-white rounded shadow border p-6 pt-1 w-64 h-1/2 backdrop-blur-sm bg-white/30">
                    <span className=" flex justify-around items-center">
                      <BsFillDisplayFill className="text-6xl text-gray-800 " />
                    </span>
                    <h5 class="text-xl font-bold my-4 mt-0 text-blue-500">
                      Here !
                    </h5>
                    <p class="text-gray-900 text-sm font-bold ">
                      ong established fact that a reader will be distracted by
                      the readable content of a page when looking at
                    </p>
                  </div>
                </div>
                <div class="bg-white rounded shadow border p-6 w-64 backdrop-blur-sm bg-white/30">
                  <span className=" flex justify-around items-center">
                    <BsFillDisplayFill className="text-6xl text-gray-800 " />
                  </span>
                  <h5 class="text-xl font-bold my-4 mt-0 text-blue-500">
                    Available{" "}
                  </h5>
                  <p class="text-gray-900 text-sm font-bold ">
                    ong established fact that a reader will be distracted by the
                    readable content of a page when looking at
                  </p>
                </div>
              </div>
            {/* </div> */}
          </div>
        </main>

        <main>
          <div className=" w-full sm:px-6 lg:px-8 bg-gray-200 my-4 ">
            <div className="md:px-20 md:py-10 sm:px-0">
              <div className=" trust flex  justify-center items-center">
                <h1 className="font-bold">Trusted by:</h1>
                <div className="trust-inner flex ">
                <div class="bg-white rounded shadow border p-6  w-40 h-20 ml-4">
                    <img src={jaica} className="h-full w-full"></img>
                  </div>
                  <div class="bg-white rounded shadow border p-6  w-40 h-20 ml-4">
                    <img src={klab} className="h-full w-full"></img>
                  </div>
                  <div class="bg-white rounded shadow border p-6  w-40 h-20 ml-4">
                    <img src={solvit} className="h-full w-full"></img>
                  </div>
                  <div class="bg-white rounded shadow border p-6 w-40 h-20 ml-4">
                    <img src={ictchamber} className="h-full w-full"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* testmonials */}

        <main>
          <div className="w-full py-6 sm:px-6 lg:px-8 -mb-6 ">
            <div className=" testmony flex px-4 py-6 sm:px-0 w-full ">
              <div className=" testmony-left flex px-4  h-96 w-1/2">
                {" "}
                <div class="  inner-card  bg-gray-200  rounded-lg shadow  ">
                  <div className=" flex  justify-center items-center p-4">
                    <div className=" w-10 h-10 flex justify-center items-center rounded-full bg-red-800  ">
                    <img src={jaica} className="w-10 h-10 rounded-full  "></img>
                    </div>
                    <h1 className="ml-4 text-sm">tuyisingize Benjamin</h1>
                  </div>
                  <div className="flex  justify-center items-center p-4">
                    <div className=" w-10 h-10 flex justify-center items-center rounded-full bg-red-800  ">
                    <img src={jaica} className="w-10 h-10  rounded-full  "></img>
                    </div>
                    <h1 className="ml-4 text-sm">tuyisingize Benjamin</h1>
                  </div>
                  <div className="flex  justify-center items-center p-4">
                    <div className=" w-10 h-10 flex justify-center items-center rounded-full bg-red-800  ">
                    <img src={klab} className="w-10 h-10  rounded-full  "></img>
                    </div>
                    <h1 className="ml-4 text-sm">tuyisingize Benjamin</h1>
                  </div>
                  
                </div>
                <div className=" message-card  flex flex-col mx-4 ">
                  <div class="bg-gray-200 rounded-tr-3xl rounded-bl-3xl  shadow p-1 px-2  mb-4 h-1/2 ">
                    <div className="flex  justify-center items-center w-64 p-4">
                    <div className=" w-10 h-10 flex justify-center items-center rounded-full bg-red-800  ">
                    <img src={jaica} className="w-10 h-10  rounded-full  "></img>
                    </div>
                    <h1 className="ml-4 text-sm">tuyisingize Benjamin</h1>
                  </div>
                  <p className="-mt-1"><FaComments className="text-xl"/>ong established fact that a reader will be distracted by the
                    readable content of a page when looking at</p>
                  </div>
                  <div class=" bg-gray-200 s rounded-tr-3xl rounded-bl-3xl shadow p-1  h-1/2 ">
                  <div className="flex  justify-center items-center w-64 p-4">
                    <div className=" w-10 h-10 flex justify-center items-center rounded-full bg-red-800  ">
                    <img src={jaica} className="w-10 h-10  rounded-full  "></img>
                    </div>
                    <h1 className="ml-4 text-sm">tuyisingize Benjamin</h1>
                  </div>
                  <p className="-mt-1"><FaComments className="text-xl"/>ong established fact that a reader will be distracted by the
                    readable content of a page when looking at</p>
                  </div>
                </div>
              </div>
              <div className=" testmony-right  border-4 border-dashed border-gray-800 rounded-lg ml-4 h-96 w-1/2">
                
                  <div className="md:px-20 md:py-4 sm:px-0 sm:py-1 ">
                    <h1 className="font-bold md:text-4xl sm:text-sm mb-4 z-10 relative ">
                      What Our customer Says ?
                    </h1>
                    <p className="my-2 relative z-10">
                      t is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at
                    </p>
                    <p className="relative z-10">
                      t is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a
                    </p>
                  </div>
                  <div className="px-20 ">
                    <button className="border-4 border-blue-200 rounded-lg text-white bg-gray-800 h-14 p-4">
                      contact Us
                    </button>
                  </div>
                
              </div>
            </div>
            <div className="h-20 w-full">
              <svg
                width="100%"
                height="100%"
                id="svg"
                viewBox="0 0 1440 400"
                xmlns="http://www.w3.org/2000/svg"
                class="transition duration-300 ease-in-out delay-150"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                  >
                    <stop offset="5%" stop-color="#002bdc88"></stop>
                    <stop offset="95%" stop-color="#32ded488"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M 0,400 C 0,400 0,133 0,133 C 23.010791009254767,162.82727171605268 46.021582018509534,192.65454343210533 77,182 C 107.97841798149047,171.34545656789467 146.92446293521667,120.20909798763142 181,96 C 215.07553706478333,71.79090201236858 244.28056624062373,74.509064617369 268,103 C 291.7194337593763,131.490935382631 309.9532721022885,185.7546435428926 340,175 C 370.0467278977115,164.2453564571074 411.90634535022207,88.47236121106052 439,84 C 466.09365464977793,79.52763878893948 478.42134649682316,146.35591161286527 501,176 C 523.5786535031768,205.64408838713473 556.4082686624849,198.10399233747833 585,177 C 613.5917313375151,155.89600766252167 637.9455788532371,121.22811903722139 668,101 C 698.0544211467629,80.77188096277861 733.8094159245669,74.98353151363605 763,94 C 792.1905840754331,113.01646848636395 814.8167574484951,156.83775490823442 842,167 C 869.1832425515049,177.16224509176558 900.9235542814525,153.6654488534263 931,138 C 961.0764457185475,122.3345511465737 989.489025425695,114.50044967806045 1020,108 C 1050.510974574305,101.49955032193955 1083.1203440157667,96.33275243433188 1112,102 C 1140.8796559842333,107.66724756566812 1166.0295985112377,124.16854058461209 1195,139 C 1223.9704014887623,153.8314594153879 1256.7612619392821,166.9930852272198 1281,157 C 1305.2387380607179,147.0069147727802 1320.9253537316335,113.85911850650861 1346,106 C 1371.0746462683665,98.14088149349139 1405.5373231341832,115.5704407467457 1440,133 C 1440,133 1440,400 1440,400 Z"
                  stroke="none"
                  stroke-width="0"
                  fill="url(#gradient)"
                  class="transition-all duration-300 ease-in-out delay-150 path-0"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                  >
                    <stop offset="5%" stop-color="#002bdcff"></stop>
                    <stop offset="95%" stop-color="#32ded4ff"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M 0,400 C 0,400 0,266 0,266 C 36.02587251228049,258.49937324138466 72.05174502456099,250.99874648276926 96,249 C 119.94825497543901,247.00125351723074 131.81889241403653,250.5043873103076 159,254 C 186.18110758596347,257.4956126896924 228.6726853192929,260.98370427600014 262,272 C 295.3273146807071,283.01629572399986 319.49036630879186,301.5607955856916 344,310 C 368.50963369120814,318.4392044143084 393.3658494455397,316.77311338123366 422,306 C 450.6341505544603,295.22688661876634 483.0462359090494,275.3467508893738 512,257 C 540.9537640909506,238.65324911062618 566.4492069182628,221.8398830612712 594,232 C 621.5507930817372,242.1601169387288 651.1569364178997,279.29371686554146 675,297 C 698.8430635821003,314.70628313445854 716.9230474101383,312.9852494765629 749,308 C 781.0769525898617,303.0147505234371 827.1508739415465,294.7652852282069 855,294 C 882.8491260584535,293.2347147717931 892.4734568236753,299.9536096106094 917,294 C 941.5265431763247,288.0463903893906 980.9552987637524,269.4202763293556 1012,267 C 1043.0447012362476,264.5797236706444 1065.705348121315,278.36528507196823 1094,284 C 1122.294651878685,289.63471492803177 1156.2233087509878,287.1185833827714 1188,290 C 1219.7766912490122,292.8814166172286 1249.401416874734,301.1603813969462 1276,299 C 1302.598583125266,296.8396186030538 1326.171023750076,284.2398910294439 1353,277 C 1379.828976249924,269.7601089705561 1409.914488124962,267.88005448527804 1440,266 C 1440,266 1440,400 1440,400 Z"
                  stroke="none"
                  stroke-width="0"
                  fill="url(#gradient)"
                  class="transition-all duration-300 ease-in-out delay-150 path-1"
                ></path>
              </svg>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
