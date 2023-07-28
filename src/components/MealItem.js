import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function MealItem(props) {
    const { strMeal, strMealThumb, idMeal } = props;
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={strMealThumb} alt={strMeal} />
                </div>
                <div className="card-content">
                    <span className="card-title"><b>{strMeal}</b></span>
                </div>
                <div className='card-action'>
                    <Link to={`/meals/${idMeal}`} className="btn" >
                        Watch Recipe
                    </Link>
                </div>
            </div>
        </>

    )
}
