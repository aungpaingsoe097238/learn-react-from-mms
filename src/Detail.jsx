import axios from 'axios';
import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams();
  const [ meal, setMeal ] = useState({});

  const fatchSingleMeal = async () => {
    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`) 
    setMeal(data.meals[0])
    console.log(data.meals[0])
  }

  useEffect(() => {
    fatchSingleMeal();
  }, []);

  return (
    <div>
      <div>
      <img src={ meal.strMealThumb } className="h-[400px] rounded-lg shadow-sm " />
      </div>
      <div className="badge">
        { meal.strCategory }
      </div>
      <div className=" text-sm text-gray-700">
        { meal.strInstructions }
      </div>
    </div>
  )
}

export default Detail