import React, { useState } from 'react'
import net from '../css/netside.module.css'

function TemplateCard({ id, title, img, rating, price, quantity }) {
  const getProducts = JSON.parse(localStorage.getItem('item'))
  const [count, setCount] = useState(getProducts)
  console.log(quantity);
  const updateQty = () => {
    // setCount(
     const mapCount = 
     count.map( (el, i) => {
      if ( el.id === id) {
       el.quantity++;
      } 
        return el
    }
    ) 
    // ) 
  
  console.log(mapCount);
    // localStorage.setItem('item', JSON.stringify(count));
  }
  
  return (
    <div>
      <div className={net.wrap}>
        <p className={net.title}>{title}</p>
        <img className={net.img} src={img} alt='img' />
        <p className={net.rating} >{rating}</p>
        <p className={net.price} >{price}$</p>
        <div>
          <span>{quantity}</span>
          <div>
            <button onClick={updateQty()}>+</button>
            <button onClick={updateQty()}>-</button>

          </div>
        </div>
        <button onClick={() => {
          localStorage.removeItem('item')
        }} className={net.btn}>remove</button>

      </div>
    </div>
  )
}

function ShopCard() {
  const get = JSON.parse(localStorage.getItem('item'))
  const getSavedData = get.map((el, i) => {
    return <TemplateCard key={i} title={el.title} img={el.img} price={el.price} rating={el.rating} quantity={el.quantity} id={el.id}/>
  })
  // console.log(getSavedData);
  return (
    <div>
      <div>
        <button onClick={() => localStorage.clear()} className={net.btn}>CLEAR</button>
      </div>
      <div>
        {getSavedData}
      </div>
    </div>
  )
}

export default ShopCard
