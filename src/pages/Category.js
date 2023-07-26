import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import {  getFilterCategories } from '../api';
import Loader from '../components/Loader';
import MealList from '../components/MealList';
export default function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilterCategories(name).then(data => setMeals(data.meals))
  }, [name])
  console.log(meals.length)
  return (
    <>
      {!meals.length ? <Loader/>:<MealList meals={meals} />}
    </>
  )
}
