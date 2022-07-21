import React from 'react'
import { useFetchStoreService } from '../../custom-hooks/useDirectoryData'
import { StyledDirectoryContainer } from '../../styled/elements/directory//directory-container.styled'
import Loader from '../loader/loader-component'
import ErrorIndicator from '../error-indicator/error-indicator.component'
import CategoryItem from './category-item.component'

export default function Directory() {
  const fetchState = useFetchStoreService();
  const { directoryData, isLoading, isError } = fetchState;
  
  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <ErrorIndicator />
  }

  return (
    <StyledDirectoryContainer>
      {directoryData.map(({title, image, id}) => {
        return <CategoryItem key={id} title={title} image={image}/>
      })}
    </StyledDirectoryContainer>
  )
}
