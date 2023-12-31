import React from 'react'
import CategoryItem from './CategoryItem'

export default function CategoryList({catalog=[]}) {
  return (
    <div className='list'>
        {catalog.map(item=>(
          <CategoryItem key={item.isCategories} {...item}/>
        ))}
    </div>
  )
}
