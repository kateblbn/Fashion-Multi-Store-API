import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import net from '../css/netside.module.css'
import { ContextCategories } from '../api/ContextApi'


function TemplateNetSide({ id, quantity, img, price, title, rating }) {
    const totalStars = 5;
    const ratingProcent = (rating / totalStars) * 100

    const addProduct = (id) => {
        const addProducts = JSON.parse(localStorage.getItem('item')) || [];
        const productExist = addProducts.some((el) => el.id === id);
        console.log(productExist);
        if (!productExist) {
            addProducts.push({
                id: id,
                title: title,
                img: img,
                rating: rating,
                price: price,
                total: price,
                quantity: 1
            })
            if (addProducts.push()) {
                alert(`Product ${title} added in cart`)
            }    
        } else {
            alert(`Product ${title} already exist`)
        }
        localStorage.setItem('item', JSON.stringify(addProducts))
    }

    return (
        <div className={net.wrap}>
            <h2 className={net.title}>{title}</h2>
            <div className={net.parentImg}>
                <img className={net.img} src={img} alt='img' />
            </div>
            <div className={net.flexRating}>
                <div className={net.wrapRating}>
                    <div style={{ width: ratingProcent }} className={net.outerStar}>
                    </div>
                    <div style={{ width: ratingProcent }} className={net.innerStar}></div>
                </div>
                <p className={net.rating} >{rating}</p>
            </div>
            <p className={net.price} >{price}$</p>
            <button onClick={() => addProduct(id)} className={net.btn}>BUY</button>
        </div>
    )
}

function NetSide() {
    const { category } = useParams()
    const { products } = useContext(ContextCategories)
    const filterCateg = products.filter((el) => el.category === category)
    const categoryItems = filterCateg.map((e, i) => {

        return <TemplateNetSide key={i} img={e.image} price={e.price} title={e.title} rating={e.rating.rate} id={e.id} />
    })


    return (
        <div className={net.wrapper}>{categoryItems}</div>
    )
}

export default NetSide