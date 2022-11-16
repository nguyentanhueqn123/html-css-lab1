import React from "react"
import PersonIcon from '@mui/icons-material/Person';
import IconButton from "@mui/material/IconButton"
import ForumIcon from '@mui/icons-material/Forum';
const Header = () =>{
    return(
        <div className="header">
        <IconButton>
            <PersonIcon fontSize="large" className="header__icon"></PersonIcon>
        </IconButton>
        <img className="header__logo" src="logo192.png" alt="header"></img>
        <IconButton>
            <ForumIcon fontSize="large" className="header__icon"></ForumIcon>
        </IconButton>

        </div>
    )
}
export default Header;