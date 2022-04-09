import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-danger" >Müzik Dükkanım</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" >Anasayfa</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link" >Ürünlerimiz</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" >Hakkımızda</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </nav>
    )
}

export default Navbar