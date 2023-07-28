import React from 'react'
import MealItem from './MealItem'
import {useHistory} from "react-router-dom";

export default function MealList({meals}) {
  const {goBack}=useHistory()
  return (
      <>
          <button className='btn' onClick={goBack}>Go Back</button>
        <div className='list'>

          {meals.map(item=>(
              <MealItem key={item.idMeal}{...item}/>
          ))}
        </div>
      </>

  )
}
