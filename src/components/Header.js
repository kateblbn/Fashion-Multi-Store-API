import React, { useContext } from 'react'
import header from '../css/header.module.css'
import { Link } from 'react-router-dom';
import cardLogo from '../img/bkt.png'
import { ContextCategories } from '../api/ContextApi';

function Template({ id }) {
    return (
        <div className={header.category__items}>
            <Link to={`/category/${id}`}>{id}</Link>
        </div>
    )
}

function Nav() {
    const { category } = useContext(ContextCategories)
    const getCategories = category.map((el, i) => {
        return <Template key={i} id={el} />
    })

    return (
        <div>
            <div className={header.nav__menu}>
                <div className={header.nav}>
                    <Link className={header.home} to={'/'}>Home</Link>
                    <div className={header.bucket}>
                        <Link to={'/shopping-card'}>
                            <img src={cardLogo} alt='shopping Card' />
                        </Link>
                    </div>
                </div>
                <div className={header.category}>{getCategories}</div>
            </div>

        </div>
    )
}

export default Nav