import React from 'react'
import "./style.css"
import Navbar from "../../content/Navbar"
import { Link } from 'react-router-dom'


const index = () => {
    return (
        <div className='home'>
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