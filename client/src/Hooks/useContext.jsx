import { createContext, useEffect, useState } from "react"
import axios from 'axios'

export const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await axios.get("/data.json", {
          baseURL: window.location.origin,
        });
        setData(response.data);
        setError(null); // Clear error if fetch successful
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load menu data."); // ✅ Set error
      } finally {
        setIsLoading(false); // Finish loading in both success & error
      }
    };

    fetchingData();
  }, []);

  // console.log(data);

  return (
    <MenuContext.Provider value={{ data, isLoading, error }}>
      {children}
    </MenuContext.Provider>
  )
}

