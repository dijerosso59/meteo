import { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Rechercher</Link></li>
                <li><Link to="/list">Liste des villes</Link></li>
            </ul>
        </header>
    )
}

export default Header