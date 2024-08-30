import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Main.css"

export default function Main() {
    return (
        <>
            <nav className="navbar">
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/signup">SignUp</Link>
                    </li>
                    <li>
                        <Link to="/signin">SignIn</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}