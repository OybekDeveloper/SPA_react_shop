import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function CategoryItem({ isCategories, strCategory, strCategoryThumb, strCategoryDescription }) {
  return (
    <div class="card">
      <div class="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div class="card-content">
        <span class="card-title"><b>{strCategory}</b></span>
        <p>{strCategoryDescription.slice(0, 80)}...</p>
      </div>
      <div className='card-action'>
        <Link to={`/categories/${strCategory}`} className="btn" >
          Watch Categories
        </Link>
      </div>
    </div>
  )
}
