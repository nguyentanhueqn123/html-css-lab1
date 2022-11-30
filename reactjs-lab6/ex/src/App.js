import './App.css';
import Post from './components/Post';
import React,{ useState, useEffect} from 'react';
import {makeStyles} from "";
import Modal from "";
import {Button, Input} from "";
import {auth} from ".firebase";
import ImageUpload from "./components/ImageUpload"
import axios from "./axios";
import Pusher from "pusher-js";


const pusher = new Pusher ('5601e06d285cef4e6836',{
  cluster:'ap2'
});

function getModalStyle(){
  const top =50;
  const left= 50;
  return{
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%,-${left}%`,
  };
}
const useStyles = makeStyles ((theme)=> ({
  paper:{
    position:'absolute',
    width:400,
    backgroundColor:theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadow[5],
    padding: theme.spacing(2,4,3),
  }
}));
function App(){
  const classes= useStyles();
  const [modalStyle]= React.useState(getModalStyle);
  const [open,setOpen]=useState(false)
  const [username, setUsername]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]= useState('')
  const [user, setUser]=useState('')
  const [openSignIn, setOpenSignIn]=useState(false)
  const [posts,setPosts]=useState([])
  useEffect (()=>{
    const unsubscribe= auth.onAuthStateChanged(authUser=>{
      if(authUser){
        setUser(authUser)

      }
      else{
        setUser(null)
      }
    })
    return ()=>{
      unsubscribe()

    }
  },[user,username])

  const fetchPosts = async ()=> {
    await axios.get("/sync").then(response=> setPosts(response.data))
  }
  useEffect(()=>{
    const channel = pusher.subscribe('posts');
    channel.bind('inserted',(data)=>{
      fetchPosts()
    });
  },[])

  useEffect(()=>{
    fetchPosts()
  
  },[])
  const signUp=(e)=>{
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email,password)
    .then(authUser=>authUser.user.updateProfile({displayName:username}))
    .catch(error => alert(error.message))
    setOpen(false)
  }
  const signIn = e =>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password)
    .catch(error => alert(error.message))
    setOpenSignIn(false)
  }
  return(
    <div className="app">
      <Modal open={open} onClose={()=>setOpen(false)}>
        <div style ={modalStyle} className ={classes.paper}>
          <form className="app__signup">
            <center>
              <img className="app__headerImage" src="logo192.png" alt="Header"/>

            </center>
            <Input placeholder="username"
            type ="text"
            value={username}
            onChange={e=> setUsername(e.target.value)}
            />
            <Input placeholder="email"
            type ="text"
            value={email}
            onChange={e=> setEmail(e.target.value)}
            />
            <Input placeholder="password"
            type ="text"
            value={password}
            onChange={e=> setPassword(e.target.value)}
            />
            <Button type="submit" onclick={signUp}>Sign Up</Button>
          </form>
        </div>
      </Modal>
    {/* <Modal open={ openSignIn} onClose={()} */}
      <Modal open={openSignIn} onClose={()=> setOpenSignIn(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img className ="app__headerImage"
              src="logo192.png"
              alt="Header"/>
            </center>
            <Input placeholder="email"
            type="text"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
            <Input placeholder="password"
            type="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
            <Button type ="submit "onClick={signIn}>Sign In</Button>
          </form>
        </div>
      </Modal>

      <div className="app__header">
        <img className="app__headerImage" src ="logo192png" alt ="Header" />
        {user ? <Button onclick={() => auth.signOut()}>Logout</Button> : (
          <div className="app__loginContainer">
            <Button onclick={()=> setOpenSignIn(true)}>Sign In</Button>
            <Button onclick={()=> setOpen(true)}>Sign Up</Button>
          </div>
        )}
      </div>
    <div className="app__posts">
      {posts.map(post=>(
        <Post
        key={post._id}
        username={post.user}
        caption={post.caption}
        imageUrl={post.image}
      />
      ))}
    </div>
    {user?.displayName ? <ImageUpload username={user.displayName} />: <h3 className="app__notLogin"> Need to login to</h3> }
    
      
    </div>
  );
  
}

// export default App;
export default App;
