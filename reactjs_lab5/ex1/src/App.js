
import React, {useState, useEffect} from 'react'
import './App.css';
import Video from './components/Video';
import axios from './components/axios' ;

function App() {
  const [videos, setVideos]=useState([])
 

useEffect(()=>{
  axios.get('http://localhost:3069/v2/ports')
  .then((res)=>{setVideos(res.data) 
    console.log(res)})
},[])
return(
  <div className="app">
    <div className="app_videos">
      {
        videos.map(({ url,channel,description,song,likes,shares,messages})=>(
          <Video
          key={url}
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          shares={shares}
          messages={messages}
          />
        ) ) }

    </div>

  </div>
);
        }
export default App;