import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {selectedCourse} from '../../redux/actions/CourseActions'

const Coursedetails = () => {

const {courseId}=useParams();
console.log(courseId)



  const course = useSelector((state) => state.course);

  console.log(course);
  const dispatch = useDispatch()
 

  const getCourse = async()=>{

    const response = await axios.get(`http://fakestoreapi.com/products/${courseId}`).catch ((error)=>{
      console.log(error)
    })

    // console.log("courses",response)
     dispatch(selectedCourse(response.data))

  }

  useEffect(()=>{
    if(courseId)

    getCourse();
  },[])

  return <div>

      <p>
      Line 23:17:  'Axios' is defined but never used                                                                              no-unused-vars
  Line 49:5:   React Hook useEffect has a missing dependency: 'getCourses'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

webpack 5.66.0 compiled with 1 warning in 694 ms
      </p>
  </div>;
};

export default Coursedetails;
