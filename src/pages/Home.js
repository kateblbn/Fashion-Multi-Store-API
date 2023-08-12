import React from 'react'
import header from '../css/header.module.css'

function Home() {
    return (
        <div>
            <div className={header.container}>
                <div className={header.background}>
                    <h1 className={header.title}>NEW COLLECTION</h1>
                    <h2 className={header.descr}>Buy what you love - easy and fast</h2>
                </div>
            </div>
        </div>

    )
}

export default Home