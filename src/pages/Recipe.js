import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getMealById } from '../api';
import Loader from '../components/Loader';



export default function Recipe() {
  const { id } = useParams();
  const { goBack } = useHistory();
  const [recipe, setRecipe] = useState([]);
  const [showRecipe,setShowRecipe]=useState(false);
  const handleShowRecipe=()=>{
   setShowRecipe(!showRecipe);
  }
  console.log(recipe)
  useEffect(() => {
    getMealById(id).then(data => setRecipe(data.meals[0]));
  }, [id]);
  return (
    <>
      <button className='btn' onClick={goBack}>Go Back</button>
      {!recipe.idMeal ? <Loader /> : (
        <div className='recipe'>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h3><b>Category:</b>{recipe.strCategory}</h3>
          {recipe.strArea ? <h3><b>Area:</b>{recipe.strArea}</h3> : null}
          <p>{recipe.strInstructions}</p>
          <button style={{margin:"10px"}} className='btn' onClick={handleShowRecipe}>Show Recipe</button>
          {showRecipe?(
              <table className='tableMeals'>
              <thead>
                <tr>
                  <th>
                    Ingredient
                  </th>
                  <th>
                    Measure
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map(key => {
                  if (key.includes('Ingredient') && recipe[key]) {
                    return (
                      <tr>
                        <td>
                          {recipe[key]}
                        </td>
                        <td>
                          {recipe[`strMeasure${key.slice(13)}`]}
                        </td>
                      </tr>
                    ) 
                  }
                })}
              </tbody>
            </table>
          ):null}
        
          {recipe.strYoutube ? (
            <div className='VideoRecipe'>
              <h4>Video Recipe</h4>
              <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen title={id} />
            </div>) : null
          }
        </div>
      )}
    </>
  )
}
