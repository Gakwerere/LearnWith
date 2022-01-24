import {combineReducers} from 'redux'
import { courseReducer,selectedCourseReducer,filteredCourseReducer } from './CourseReducers'

const reducers = combineReducers({

    allCourses:courseReducer,
    course:selectedCourseReducer,
    filter:filteredCourseReducer
})
export default reducers
