import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import header from '../css/header.module.css'

function Template({ id }) {
    console.log(id);
    return (
        <div className={header.category__items}>
            {/* <a className='category__item' href='/'>{categ}</a> */}
            <Link to={`/category/${id}`}>{id}</Link>
        </div>
    )
}

function Header() {

    const [data, setData] = useState([]);
    console.log(data);
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
                <div className={header.nav__menu}>
                    <div className={header.nav}>
                        <Link className={header.home} to={'/'}>Home</Link>
                        <div className='bucket'>
                            <a href='/'>
                                <img src='../img/Card.png' alt='shopping Card' />
                            </a>
                        </div>
                    </div>
                    <div className={header.category}>{getCategories}</div>
                </div>
                <div className={header.background}>
                    <h1>NEW COLLECTION</h1>
                    <p>We know how large objects will act, but things on a
                        small scale just do not act that way.</p>
                </div>
            </div>
        </div>
    )
}

export default Header