import React, { useEffect, useState } from 'react'
import net from '../css/netside.module.css'
import logo from '../img/icons/bag.png'
import cart from '../css/cart.module.css'
import { Link } from 'react-router-dom'

function TemplateCard({ id, title, total, img, rating, price, quantity }) {
  const getProducts = JSON.parse(localStorage.getItem('item'))
  const [count, setCount] = useState(getProducts)
  // console.log(total);
  const [qtity, setQtity] = useState(quantity)
  console.log(total);

  const updateQty = (id) => {
    setCount((prevState) =>
      prevState.map((el) =>
        (el.id === id) ? { ...el, quantity: qtity + 1, total: ((price * quantity) + price).toFixed(2) } : el
      )
    )
    setQtity(qtity + 1)
    window.location.reload(true);
  }
  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(count))

  }, [count])

  const deleteItem = (id) => {
    const saveItem = JSON.parse(localStorage.getItem('item') ?? '[]').filter((el) => el.id !== id)
    const parseItem = JSON.stringify(saveItem)
    localStorage.setItem('item', parseItem)
    window.location.reload(true);

  }
  // localStorage.setItem(
  //   'todoList',
  //   JSON.stringify(
  //     JSON
  //       .parse(localStorage.getItem('todoList') ?? '[]')
  //       .filter((item) => item.id !== id),
  //   ))
  return (
    <div>
      <div className={net.wrap}>
        <p className={net.title}>{title}</p>
        <img className={net.img} src={img} alt='img' />
        <p className={net.rating} >{rating}</p>
        <p className={net.price} >{total}$</p>
        <div>
          <span>{quantity}</span>
          <div>
            <button onClick={() => updateQty(id)}>+</button>
            {/* <button onClick={updateQty()}>-</button> */}

          </div>
        </div>
        <button onClick={() => deleteItem(id)} className={net.btn}>REMOVE</button>
      </div>
    </div>
  )
}
function NoItems() {
  return (
    <div className={cart.wrapper}>
      <div className={cart.wrap__img}>
        <img src={logo} alt='cart' />
      </div>
      <div className={cart.text}>
        <h2 className={cart.title}>Cart is empty</h2>
        <p className={cart.descr}>Look at the main page to
          select products or <br /> Find what
          you need in the catalog</p>
      </div>
      <Link to={'/'} className={cart.btn}>GO TO HOME</Link>
    </div>
  )
}

function ShopCard() {
  let get = JSON.parse(localStorage.getItem('item'))
  console.log(get);
  if (get == null || get.length === 0) {
    return NoItems();
  }
  const getSavedData = get.map((el, i) => {
    return <TemplateCard key={i} title={el.title} img={el.img} price={el.price} total={el.total} rating={el.rating} quantity={el.quantity} id={el.id} />
  })
  const totalPrice = get.reduce((acc, prev) => {
    return acc + (prev.price * prev.quantity)
  }, 0)

  return (
    <div>
      <div className={cart.flex}>
        <div>
          <button onClick={() => { localStorage.clear(); window.location.reload(true) }} className={net.clear}>CLEAR</button>
        </div>
        <div>
          <p className={cart.total}>Total: {totalPrice} $</p>
        </div>
      </div>
      <div className={cart.container}>
        {getSavedData}
      </div>
    </div>
  )
}

export default ShopCard
