import React from "react";
import { useParams, useLocation } from "react-router-dom";
import './ProductPage.css'

const ProductPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const {name, price, img, para} = location.state || {}
    return(
        <div>
        <h1 className="details-heading">Product Details</h1>
        <div className="details-img">
        <img src={img} className="img-src"/>
        <div className="details-content">
        <p>Product Id: {id}</p>
        <p>Product Name :{name}</p>
        <p>Price: {price}</p>
        <p>{para}</p>
        </div>
        </div>
        </div>
    )
}

export default ProductPage