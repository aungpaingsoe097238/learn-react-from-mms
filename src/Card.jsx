import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({meal}) => {
  return (
    <div className=' shadow-md hover:scale-105 transition duration-200 rounded-lg border-2 flex justify-center flex-col p-5 w-60'>
        <img 
        src={meal.strMealThumb} 
        className=" rounded-lg " />
        <div className=' text-sm font-bold'>
        { meal.strMeal }
        </div>
        <Link to={`detail/${meal.idMeal}`}>
        <button className=' bg-blue-500 rounded-lg p-1 text-white' >Detail</button>
        </Link>
    </div>
  )
}

export default Card