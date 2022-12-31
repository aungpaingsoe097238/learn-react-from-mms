import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Loading from "./Loading"

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const frashMeals = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    setMeals(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    frashMeals();
  }, []);

  return (
    <>
    {
      isLoading ? 
      <Loading/> :       
      <div className=" flex flex-wrap gap-5 ">
      {meals?.map((meal) => (
        <Card key={meal.idMeal} meal={meal} />
      ))}
    </div>
    }

    </>
  );
};

export default Meals;
