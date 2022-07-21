import {useState, useEffect} from "react";
import { StoreApi } from "../services/store-api";
const store = new StoreApi();

export function useDirectoryData() {
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