import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import Navbar from '../../content/Navbar/Navbar'


const index = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='home_first'>
                <strong>OVER 400 BEAN-TO-BAR CHOCOLATES FROM<br />
                    WORLD RENOWNED CRAFT CHOCOLATE MAKERS</strong><br />
            </div>
            <p>We ship worldwide!</p>
            <button>
                <Link to="/pages">Shop now</Link>
            </button>
        </div>
    )
}

export default index;