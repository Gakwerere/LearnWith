import React,{useState} from 'react'
import './Fillter.css'
import { useSelector,useDispatch } from 'react-redux';
import { filterCourse } from '../../redux/actions/CourseActions';

const Fillter = () => {

  const [category,setCategory ]= useState('');
  const dispatch =useDispatch();

  console.log(category);

  // const filterItem = (curcat) => {
  //   const newItem = Data.filter((newVal) => {
  //     return newVal.category === curcat; 
        	
  //   });
  //   setItem(newItem);
  // };

const handleChange =(event)=>{

  dispatch(filterCourse(event.target.value))

  }

  

    return (
      <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by setCategory</label>
        <select name='option' onChange={handleChange}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
</select>

      </div>
    </div>
    )
}

export default Fillter
