import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Meals = () => {

  const [meals,setMeals] = useState([])

  const frashMeals = async () => {
    const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    setMeals(data.meals)
  }

  useEffect(()=>{
    frashMeals()
  },[])

  return (
    <div>
        { meals?.map( meal => <div className='text-xl font-bold' key={meal.idMeal} > { meal.strMeal } </div> ) }
    </div>
  )
}

export default Meals