import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function TemplateNetSide({img, price, title, rating}) {
    return (
        <div>
            <p>{title}</p>
            <img src={img} alt='img'/>
            <p>{rating}</p>
            <p>{price}</p>
            <button>ADD</button>
        </div>
    )
}
function NetSide() {
    // const {category} = useParams()
// console.log(category);
    const [elem, setElem] = useState([])
    console.log(elem);
    const elCategory = elem.category;
    console.log(elCategory);
    useEffect( () => {
        try {
            const getDetails = async () => {
                await axios.get('https://fakestoreapi.com/products')
                .then(response => setElem(response.data))
            }
            getDetails()
        } catch (error) {
            console.log(error);
        }
    }, [])
    const filterCateg = elem.filter( (el) =>  el.category === elCategory)
    const categoryItems = filterCateg.map( (e, i) => {
        return <TemplateNetSide img={e.image} price={e.price} title={e.title} rating={e.rating.rate} />
    })
    console.log(categoryItems);
  return (
    <div>{categoryItems}</div>
  )
}

export default NetSide