import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ContextCategories = createContext()

function ContextApi(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
      try {
          const getDataCategory = async () => {
              await axios.get('https://fakestoreapi.com/products/categories')
                  .then(response => setData(response.data))
          }
          getDataCategory()
      } catch (error) {
          console.log(error);
      }
  }, [])
  const sendCategory = {data} 
  return (
    <div>
      <ContextCategories.Provider value={sendCategory}>{props.children}</ContextCategories.Provider>
    </div>
  )
}

export default ContextApi