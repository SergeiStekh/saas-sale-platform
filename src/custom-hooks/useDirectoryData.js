import {useState, useEffect} from "react";
import FetchStoreService from "../services/fetch-store-service";
const store = new FetchStoreService();

export function useFetchStoreService() {
  const [directoryData, setDirectoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    store.getCategories()
    .then(data => {
      setDirectoryData(data);
      setIsLoading(false);
      setIsError(false);
    })
    .catch(err => {
      setDirectoryData([]);
      setIsLoading(false);
      setIsError(true);
    })
  }, []);

  return {
    directoryData,
    isLoading,
    isError
  };
}