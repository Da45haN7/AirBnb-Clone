import React from "react";
import './banner.css'
import Button from '@mui/material/Button';
import Search from "./Search";
import {useNavigate} from "react-router-dom";

export default function Banner(){
    const history = useNavigate()
    const [showSearch, setShowSearch] = React.useState(false);
    return(
    <div className="banner">
        <div className="banner__search">
            {showSearch && <Search/>}
            <Button onClick={()=>setShowSearch(!showSearch)} variant="outlined">{showSearch ? "Hide":"Search Dates"}</Button>
        </div>
        <div className="banner__info">
            <h1>Go out and Strech your Imagination</h1>
            <h5>
                Explore the hidden gems near you and plan a different kinda gateway
            </h5>
            <Button onClick={() => history('/search')} variant="outlined">Explore Nearby</Button>
        </div>
    </div>
    )
}



// search dates