import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css"

const index = () => {
    return (
        <nav>
            <Link to="/">News</Link>
            <Link to="/">Stores</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Catalogue</Link>
            <Link to="/">Travel Retail</Link>
            <Link to="/">COCOA HORIZONS</Link>
            <Link to="/">CORPORATE SOLUTIONS</Link>
        </nav>
    )
}

export default index