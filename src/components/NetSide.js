import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import net from '../css/netside.module.css'
import { ContextCategories } from '../api/ContextApi'

export function TemplateNetSide({ id, img, price, title, rating }) {
    return (
        <div className={net.wrap}>
            <p className={net.title}>{title}</p>
            <img className={net.img} src={img} alt='img' />
            <p className={net.rating} >{rating}</p>
            <p className={net.price} >{price}$</p>
            <button onClick={() => {
                localStorage.setItem('id', id);
                const item = {
                    'title': {title},
                    'img': {img},
                    'rating': {rating},
                    'price': {price}
                }
                localStorage.setItem('item', JSON.stringify(item))
            //     const getItem = JSON.parse( localStorage.getItem('item') )
            //    console.log(getItem);
            } 
        } className={net.btn}>ADD</button>
        </div>
    )
}
function NetSide() {
    const { category } = useParams()
    const { products } = useContext(ContextCategories)
    console.log(products);
    const filterCateg = products.filter((el) => el.category === category)
    console.log(filterCateg);
    const categoryItems = filterCateg.map((e, i) => {
        return <TemplateNetSide key={i} img={e.image} price={e.price} title={e.title} rating={e.rating.rate} id={e.id} />
    })
    console.log(categoryItems);


    return (
        <div className={net.wrapper}>{categoryItems}</div>
    )
}

export default NetSide