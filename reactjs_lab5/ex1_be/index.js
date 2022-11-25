const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Cors = require('cors');
// import Cors from 'cors';
// const Videos = require();
require('dotenv').config();
const videoRoute = require('./routes/videoShort');

const PORT = process.env.PORT || 3069


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(Cors());


// routes
app.use('/v2/posts', videoRoute);


// connect mongodb
mongoose.connect(
    process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("mongdb is connected");
    }
  )


app.get("/", (req, res) => res.status(200).send("hellllooo hue"));

app.listen(PORT, ()=>{
    console.log("Server started at PORT", PORT);
    
})
