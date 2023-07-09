import React from "react";
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import SignUp from "./SignUp";

export default function Header(){
    const [Open, setOpen] = React.useState(false)
    function handleOpen(){
        setOpen(!Open)
    }

    const [seen, setSeen] = React.useState(false)
    function togglePop(){
        setSeen(!seen)
    }
    return(
        <div className="header">
            <Link to='/'>
                <img className="header__icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt=""/>
            </Link>
            <div className="header__center">
                <input type="text"/>
                <SearchIcon />
            </div>
            <div className="header__right">
                <p>AirBnb Your Home</p>
                <LanguageIcon />    
                <div className="header__avatar">
                        <IconButton aria-label="menu" className="dropbtn">
                            <div className="dropdown">
                                {
                                    Open ? (
                                            <div class="dropdown-content">
                                                <a onClick={togglePop}>Sign up</a>
                                                {seen ? <SignUp toggle={togglePop} /> : null}
                                                <a onClick={togglePop}>Log in</a>
                                                {seen ? <SignUp toggle={togglePop} /> : null}
                                                <a href="#">AirBnb Your Home</a>
                                                <a href="#">Help</a>
                                            </div>
                                    ) : null
                                } 
                                <MenuIcon onClick={handleOpen} className="menu"/>
                                <AccountCircleIcon onClick={handleOpen}  fontSize="large"/>
                            </div>
                        </IconButton>
                </div>
            </div>
        </div>
    )
}