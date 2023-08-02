import React from 'react'
import header from '../css/header.module.css'
function Home() {
    return (
        <div>
            <div className={header.container}>
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

export default Home