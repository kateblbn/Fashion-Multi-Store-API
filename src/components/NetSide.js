import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import net from '../css/netside.module.css'
import { ContextCategories } from '../api/ContextApi'
function TemplateNetSide({ id, img, price, title, rating }) {
    localStorage.setItem('id', id)

    return (
        <div className={net.wrap}>
            <p className={net.title}>{title}</p>
            <img className={net.img} src={img} alt='img' />
            <p className={net.rating} >{rating}</p>
            <p className={net.price} >{price}$</p>
            <button onClick={() => localStorage.setItem('id', id)} className={net.btn}>ADD</button>
        </div>
    )
}
function NetSide() {
    const { category } = useParams()
    const { products } = useContext(ContextCategories)
    console.log(products);
    const filterCateg = products.filter((el) => el.category === category)
    const categoryItems = filterCateg.map((e, i) => {
        return <TemplateNetSide key={i} img={e.image} price={e.price} title={e.title} rating={e.rating.rate} id={e.id} />
    })
    console.log(categoryItems);


    return (
        <div className={net.wrapper}>{categoryItems}</div>
    )
}

export default NetSide