import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import net from '../css/netside.module.css'
function TemplateNetSide({ img, price, title, rating }) {
    return (
        <div className={net.wrap}>
            <p className={net.title}>{title}</p>
            <img className={net.img} src={img} alt='img' />
            <p className={net.rating} >{rating}</p>
            <p className={net.price} >{price}$</p>
            <button className={net.btn}>ADD</button>
        </div>
    )
}
function NetSide() {
    const { id } = useParams()
    console.log(id);
    const [elem, setElem] = useState([])
    console.log(elem);
    useEffect(() => {
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
    const filterCateg = elem.filter((el) => el.category === id)
    const categoryItems = filterCateg.map((e, i) => {
        return <TemplateNetSide img={e.image} price={e.price} title={e.title} rating={e.rating.rate} />
    })
    console.log(categoryItems);
    return (
        <div className={net.wrapper}>{categoryItems}</div>
    )
}

export default NetSide