import React from 'react'
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";

function Breadcrumb() {
    return (
        <div>
            <div className="container">
                <div className="products-home">
                    <h1 className='products-homeh1' >
                        <Link to="/">Home</Link>
                    </h1>
                    <GrNext />
                    <h1 className='products-homeh1' >
                        <Link to="/products">Products</Link>
                    </h1>
                    <GrNext />
                    <h2 className='products-productsh2'>Laptopsinfo</h2>
                </div>
            </div></div>
    )
}

export default Breadcrumb