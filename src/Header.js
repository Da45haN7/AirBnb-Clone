import React from "react";
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';


export default function Header(){

    let menuRef = React.useRef()

    const [Open, setOpen] = React.useState(false)
    function handleOpen(){
        setOpen(!Open)
    }

        
    React.useEffect(() => {
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
                setOpen(false)
            }
       }
        document.addEventListener("mousedown", handler)

        return() => {
            document.removeEventListener("mousedown", handler)
        }
    })




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
                        <IconButton aria-label="menu" className="dropbtn" >
                            <div className="dropdown" ref={menuRef}>
                                {
                                    Open ? (
                                            <div className="dropdown-content" >
                                                <Link to="/register">Register</Link>   
                                                <Link to="/signup">Log In</Link>
                                                <a>AirBnb Your Home</a>
                                                <a>Help</a>
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