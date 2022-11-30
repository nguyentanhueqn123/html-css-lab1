import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import Ticker from 'react-ticker';

const VideoFooter = ({ channel, description, song})=>{
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    <i className="fa-solid fa-heart"></i>
                    {/* <MusicNoteIcon className="videoFooter__icon"/> */}
                    <Ticker mode="smooth">
                        {({index})=>{
                            <>
                                <p>{song}</p>
                            </>
                        }}
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter__record" src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/512/external-cd-event-and-party-xnimrodx-lineal-xnimrodx.png" alt="video footer" />

        </div>
    )
    
}


export default VideoFooter;