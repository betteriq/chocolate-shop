import React from 'react'
import Navbar from '../../content/Navbar/Navbar'
import "./style.css"
const index = () => {
    return (
        <div className='products'>
        <Navbar/>
            <div className="product">

                <img src="images/shokolat.png" alt="" className='slice_shokolat' />
                <img src="images/one1.png" alt="" className='slice_one' />
                <img src="images/two2.png" alt="" className='slice_two' />
            </div>
        </div>
    )
}

export default index