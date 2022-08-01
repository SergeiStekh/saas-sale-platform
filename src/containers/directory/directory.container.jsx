import { DirectoryItem } from '../../components/directory-item'
import { Loader } from '../../components/loader'
import { ErrorIndicator } from '../../components/error-indicator'
import { useFetchStoreService } from '../../hooks/useDirectoryData'

function DirectoryContainer() {
  const fetchStoreServiceHook = useFetchStoreService();
  const { directoryData, isLoading, isError } = fetchStoreServiceHook;
  
  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <ErrorIndicator />
  }

  return (
    <>
      {directoryData.map(({title, image, id}) => {
        return <DirectoryItem key={id} title={title} image={image}/>
      })}
    </>
  )
}
export { DirectoryContainer }


