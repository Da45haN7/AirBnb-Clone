import React from "react";
import "./searchresult.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

export default function SearchResult({Img, location,
    title,
    description,
    star,
    price,
    total, }){
    return(
        <div className="searchResult">
            <img src={Img} alt=""/>
            <FavoriteBorderIcon className="searchresult__heart"/>
            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// \Country, City, Name, Summary, Description, Host_Name, Price}