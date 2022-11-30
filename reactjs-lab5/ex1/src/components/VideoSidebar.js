import React, { useState} from "react";
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBoderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

const VideoSidebar =  ({likes, shares, messages})=>{
    const [liked, setLiked] = useState(false);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
        
                {liked ? <i className="fa-solid fa-heart red" onClick={e => setLiked(false)}></i> :<i className="fa-regular fa-heart" onClick={e => setLiked(true)}></i>}
                {/* {liked ? <FavoriteIcon fontSize="large" onClick={e => setLiked(false)}/> : <FavoriteBoderIcon fontSize="large" onClick={e=> setLiked(true)}/>} */}
                <p>{liked ? +likes + 1 :likes}</p>
            </div>
            <div className="videoSidebar__button">
                <i class="fa-solid fa-message"></i>
                {/* <MessageIcon fontSize="large"/> */}
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <i className="fa-solid fa-share-nodes"></i>
                {/* <ShareIcon fontSize="large"/> */}
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar;