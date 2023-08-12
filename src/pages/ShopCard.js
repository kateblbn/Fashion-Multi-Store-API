import React, { useEffect, useState } from 'react'
import net from '../css/netside.module.css'
import cart from '../css/cart.module.css'
import EmptyCart from '../templates/EmptyCart'

function TemplateCard({ id, title, total, img, rating, price, quantity }) {
  const getProducts = JSON.parse(localStorage.getItem('item'))
  const [count, setCount] = useState(getProducts)
  const [qtity, setQtity] = useState(quantity)

  const updateQty = (id) => {
    setCount((prevState) =>
      prevState.map((el) =>
        (el.id === id) ? { ...el, quantity: qtity + 1, total: ((price * quantity) + price).toFixed(2) } : el
      )
    )
    setQtity(qtity + 1)
    window.location.reload(true);
  }
  const decrQty = (id) => {
    if (qtity>1) {
    setCount((prevState) =>
      prevState.map((el) =>
        (el.id === id)? { ...el, quantity: qtity - 1, total: ((price * quantity) - price ).toFixed(2) } : el
        )
    ) 
    setQtity(qtity - 1)
    window.location.reload(true);
  }
  }
  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(count))
  }, [count])
  
  const totalStars = 5;
  const ratingProcent = (rating / totalStars) * 100

  const deleteItem = (id) => {
    const saveItem = JSON.parse(localStorage.getItem('item') ?? '[]').filter((el) => el.id !== id)
    const parseItem = JSON.stringify(saveItem)
    localStorage.setItem('item', parseItem)
    window.location.reload(true);

  }
  return (
    <>
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
        <p className={net.price} >{total}$</p>
        <div>
          <span>{quantity}</span>
          <div>
            <button onClick={() => updateQty(id)}>+</button>
            <button onClick={() => decrQty(id)}>-</button>

          </div>
        </div>
        <button onClick={() => deleteItem(id)} className={net.btn}>REMOVE</button>
      </div>
    </>
  )
}

function ShopCard() {
  let get = JSON.parse(localStorage.getItem('item'))
  console.log(get);
  if (get == null || get.length === 0) {
    return EmptyCart();
  }
  const getSavedData = get.map((el, i) => {
    return <TemplateCard key={i} title={el.title} img={el.img} price={el.price} total={el.total} rating={el.rating} quantity={el.quantity} id={el.id} />
  })
  const totalPrice = get.reduce((acc, prev) => {
    return acc + (prev.price * prev.quantity)
  }, 0)

  return (
    <div className={cart.mrg}>
      <div className={cart.flex}>
        <div>
          <button onClick={() => { localStorage.clear(); window.location.reload(true) }} className={net.clear}>CLEAR</button>
        </div>
        <div>
          <p className={cart.total}>Total: {totalPrice.toFixed(2)} $</p>
        </div>
      </div>
      <div className={cart.container}>
        {getSavedData}
      </div>
    </div>
  )
}

export default ShopCard
