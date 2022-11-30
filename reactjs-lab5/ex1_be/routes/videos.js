const express = require('express');
const router = express.Router();
const Book = require('../models/videos');

// Post: creat a new book
router.post("/", (req, res) => {
    book = new Book({
        url: req.body.urlName,
        channel: req.body.channelName,
        description: req.body.desName,
        song: req.body.songName,
        likes: req.body.likeItem,
        shares: req.body.shareItem,
        messages: req.body.messageItem,
    });

    book.save()
        .then((book) => {
            res.send(book);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send("Video was not stored in DB");
        });

});
router.get("/", (req, res) => {
    Book.find()
        .then((books) => res.send(books))
        .catch((error) => {
            res.status(500).send("Wrong");
        })
})

module.exports = router;