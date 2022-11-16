import React from 'react'
// import './SwipeButtons.css'
import ReplayIcon from '@mui/icons-material/Replay'
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton"
const SwipeButtons = () =>{
    return (
        <div className="swipeButtons">
            <IconButton className='swipeButtons__repeat'>
                <ReplayIcon fontSize="large"></ReplayIcon>
            </IconButton>
            <IconButton className='swipeButtons__left'>
                <CloseIcon fontSize="large"></CloseIcon>
            </IconButton>
            <IconButton className='swipeButtons__repeat'>
                <StarRateIcon fontSize="large"></StarRateIcon>
            </IconButton>
            <IconButton className='swipeButtons__repeat'>
                <FavoriteIcon fontSize="large"></FavoriteIcon>
            </IconButton>
            <IconButton className='swipeButtons__repeat'>
                <FlashOnIcon fontSize="large"></FlashOnIcon>
            </IconButton>

        </div>
    )
}
 export default SwipeButtons