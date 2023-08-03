import React, { useState } from 'react'
import net from '../css/netside.module.css'

function TemplateCard({ id, img, price, title, rating }) {
  const [count, setCount] = useState(1)
  return (
    <div>
      <div className={net.wrap}>
        <p className={net.title}>{title}</p>
        <img className={net.img} src={img} alt='img' />
        <p className={net.rating} >{rating}</p>
        <p className={net.price} >{price}$</p>
        <div>
          <span>{count}</span>
          <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => {
              if (count > 1)
                setCount(count - 1)
              // else {
              //   localStorage.removeItem('item')
              // }
            }}>-</button>

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
  const get = JSON.parse(localStorage.getItem('item',))
  const getArr = Object.values(get)
  console.log(getArr);
  // const filtredData = getArr.filter( el = )
  const getSavedData = getArr.map((el, i) => {
    return <TemplateCard id={el.id} key={i} title={el.title} img={el.img} price={el.price} rating={el.rating} />
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