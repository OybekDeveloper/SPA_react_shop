import React from 'react'
import MealItem from './MealItem'

export default function MealList({meals}) {
  return (
    <div className='list'>
        {meals.map(item=>(
            <MealItem key={item.idMeal}{...item}/>
        ))}
    </div>
  )
}
