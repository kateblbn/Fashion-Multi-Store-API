import React from 'react'
import logo from '../img/icons/bag.png'
import { Link } from 'react-router-dom'
import cart from '../css/cart.module.css'



function EmptyCart() {
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
            <Link to={'https://kateblbn.github.io/Fashion-Multi-Store-API/'} className={cart.btn}>GO TO HOME</Link>
          </div>
        )
      }
      
export default EmptyCart