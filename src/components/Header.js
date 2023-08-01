import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import header from '../css/header.module.css'
import { ContextCategories } from '../context/ContextApi'

export function Template({ id }) {
    return (
        <div className={header.category__items}>
            {/* <a className='category__item' href='/'>{categ}</a> */}
            <Link to={`/category/${id}`}>{id}</Link>
        </div>
    )
}

function Header() {
// const {data} = useContext(ContextCategories)

    const [data, setData] = useState([]);
    useEffect(() => {
        try {
            const getDataCategory = async () => {
                await axios.get('https://fakestoreapi.com/products/categories')
                    .then(response => setData(response.data))
            }
            getDataCategory()
        } catch (error) {
            console.log(error);
        }
    }, [])
    const getCategories = data.map((el, i) => {
        return <Template id={el} />
    })
    return (
        <div>
            <div className={header.container}>
                {/* <div className={header.nav__menu}>
                    <div className={header.nav}>
                        <Link className={header.home} to={'/'}>Home</Link>
                        <div className='bucket'>
                            <a href='/'>
                                <img src='../img/bkt.png' alt='shopping Card' />
                            </a>
                        </div>
                    </div>
                    <div className={header.category}>{getCategories}</div>
                </div> */}
                <div className={header.background}>
                    <h1 className={header.title}>NEW COLLECTION</h1>
                    <p className={header.descr}>
                    Shop what you love—faster and easier.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header