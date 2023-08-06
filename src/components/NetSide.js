import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import net from '../css/netside.module.css'
import { ContextCategories } from '../api/ContextApi'
// localStorage.clear()

function TemplateNetSide({ id, img, price, title, rating }) {
    console.log(id);
    return (
        <div className={net.wrap}>
            <p className={net.title}>{title}</p>
            <img className={net.img} src={img} alt='img' />
            <p className={net.rating} >{rating}</p>
            <p className={net.price} >{price}$</p>
            <button onClick={() => {
                const addProducts = JSON.parse(localStorage.getItem('item')) || [];
                addProducts.push({
                    id: id,
                    title: title,
                    img: img,
                    rating: rating,
                    price: price,
                    quantity: 1
                })
                localStorage.setItem('item', JSON.stringify(addProducts))
            }
            } className={net.btn}>ADD</button>
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