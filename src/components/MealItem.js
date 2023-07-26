import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function MealItem(props) {
    const { strMeal, strMealThumb, idMeal } = props;
    return (
        <div class="card">
            <div class="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div class="card-content">
                <span class="card-title"><b>{strMeal}</b></span>
            </div>
            <div className='card-action'>
                <Link to={`/meals/${idMeal}`} className="btn" >
                    Watch Recipe
                </Link>
            </div>
        </div>
    )
}
