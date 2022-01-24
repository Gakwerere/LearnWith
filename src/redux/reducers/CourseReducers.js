import { Actiontypes } from "../constants/ActionsTypes"



const initailState ={
courses:[]
}

export const courseReducer =(state = initailState,{type,payload}) =>{

    switch( type){


        case Actiontypes.SET_COURSES:

        return {...state,courses:payload};
         default:
            return state;
    }
}

export const selectedCourseReducer =(state ={},{type,payload}) =>{

    switch( type){


        case Actiontypes.SELECTED_COURSE:

        return {...state,...payload};

         default:

        return state;

    }
}

export const filteredCourseReducer =(state ={},{type,payload}) =>{

    switch( type){


        case Actiontypes.SELECTED_COURSE:

            return {...state,filter:payload};

         default:

        return state;

    }
}