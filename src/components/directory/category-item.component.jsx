import React from 'react'
import { StyledCategoryItem } from '../../styled/elements/directory/category-item.styled'

export default function CategoriesItem({title, image}) {
  return (
    <StyledCategoryItem image={image}>
      <div className='background-image'>
        <p className='title'>
          {title}
          <br/>
          <span>SHOP NOW</span>
        </p>
      </div>
    </StyledCategoryItem>
  )
}
