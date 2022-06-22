import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const index = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">News</Link>
                </li>
                <li>
                    <Link to="/">Stores</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
                <li>
                    <Link to="/">Catalogue</Link>
                </li>
                <li>
                    <Link to="/">Travel Retail</Link>
                </li>
                <li>
                    <Link to="/">COCOA HORIZONS</Link>
                </li>
                <li>
                    <Link to="/">CORPORATE SOLUTIONS</Link>
                </li>
            </ul>
        </nav>
    );
};

export default index;
