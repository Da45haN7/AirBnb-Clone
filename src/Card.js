import React from "react";
import './card.css'

export default function Card({img, title, description, price}){
    return(
        <div className="card">
            <img src={img} alt="" height="400px"/>
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                {price && <h3>Rent AirBnb starting at {price}</h3>}
            </div>
            
        </div>
    )
}