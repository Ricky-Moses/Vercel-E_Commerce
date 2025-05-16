import { createContext, useEffect, useState } from "react"
import axios from 'axios'

const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchingData = async () => {
    try {
      const response = await axios.get(`/data.json`);
      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log('Error fetching data:', err.message);
      setIsLoading(false);
    }
  };

  fetchingData();
  }, [isLoading])

  console.log(data);

  return (
    <MenuContext.Provider value={{ data, isLoading }}>
      {children}
    </MenuContext.Provider>
  )
}

