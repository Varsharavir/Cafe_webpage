import React from "react";
import image from "./img/cozy-cafe.jpg"
import discount from "./img/discount.jpg"
import delivery from "./img/fast1.jpg"
import quality from "./img/quality.png"
import gifts from "./img/gifts.jpeg"
import './Home.css'

export default function Home(){
    return(
        <>
        <img src={image} className="HomeImage"/>
        <h1 className="heading">WELCOME TO DELICIOUS DELIGHT</h1>

        <div className="ChildImg">
            <img src={quality} />
            <img src={discount} />
            <img src={delivery} />
            <img src={gifts} />
        </div>
        </>
    )
}
