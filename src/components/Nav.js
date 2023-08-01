import React, { useEffect, useState } from 'react'
import header from '../css/header.module.css'
import axios from 'axios';
import { Template } from './Header';
import { Link } from 'react-router-dom';

function Nav() {
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
            <div className={header.nav__menu}>
                <div className={header.nav}>
                    <Link className={header.home} to={'/'}>Home</Link>
                    <div className='bucket'>
                        <Link to={'/shopping-card'}>
                            <img src='../img/bkt.png' alt='shopping Card' />
                        </Link>
                    </div>
                </div>
                <div className={header.category}>{getCategories}</div>
            </div>

        </div>
    )
}

export default Nav