const mongoose = require('mongoose');


// Book schema
const BookSchema = new mongoose.Schema({
    url: {
        type: String,
    },
    channel: {
        type: String,
    },
    description: {
        type: String,
    },
    song: {
        type: String,
    },
    likes: {
        type: String,
    },
    shares: {
        type: String,
    },
    messages: {
        type: String,
    }
});
module.exports = new mongoose.model('Book', BookSchema);