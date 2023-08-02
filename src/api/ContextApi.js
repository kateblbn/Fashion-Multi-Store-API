import React from "react"
import axios from 'axios';
import { createContext, useEffect, useState } from 'react'
import { LINK_GET_CATEGORIES, LINK_GET_PRODUCTS } from "./ApiLinks";

export const ContextCategories = createContext()

function ContextApi(props) {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      const getDataCategory = async () => {
        await axios.all([
          axios.get(LINK_GET_CATEGORIES),
          axios.get(LINK_GET_PRODUCTS)
        ])
          .then(
            axios.spread((categ, prod) => {
              setCategory(categ.data)
              setProducts(prod.data)
            })
          )
      }
      getDataCategory()
    } catch (error) {
      console.log(error);
    }
  }, [])
  const sendCategory = { category, products }
  return (
    <div>
      <ContextCategories.Provider value={sendCategory}>
        {props.children}
      </ContextCategories.Provider>
    </div>
  )
}

export default ContextApi