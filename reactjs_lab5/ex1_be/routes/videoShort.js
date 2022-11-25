const express = require('express');
const router = express.Router();
const Video = require('../models/shortVideo');

// Post: creat a new book
router.post("/", (req, res) =>{
    videoss = new Video({
        url: req.body.url,
        channel: req.body.channel,
        description: req.body.description,
        song: req.body.song,
        likes: req.body.likes,
        shares: req.body.shares,
        messages: req.body.messages,
    });

    // videoss.save()
    // .then((videoss) => {
    //     res.send(videoss);
    // })
    // .catch((error) =>{
    //     res.status(500).send("Video was not stored in DB");
    // });

    
});
router.get("/", (req, res)=>{
    videoss.find((err, data) =>{
        if(err){
            res.status(500).send(err);

        }
        else{
            res.status.send(200).send(data)
        }
    })
})

module.exports = router;