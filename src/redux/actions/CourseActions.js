

import { Actiontypes } from "../constants/ActionsTypes";


export const setCourses = (courses)=>{

    return{
        type:Actiontypes.SET_COURSES,
        payload:courses,
       
    }
}
export const selectedCourse = (course)=>{

    return{
        type:Actiontypes.SELECTED_COURSE,
        payload:course,
       
     
    }
}

export const filterCourse = (filter)=>{


    return{
        type:Actiontypes.SET_FILTER,
        payload:filter,
       
     
    }
}

export const removeCourses = (course)=>{

    return{
        type:Actiontypes.REMOVE_SELECTED_COURSE,
        payload:course,
       
      
    }
}    