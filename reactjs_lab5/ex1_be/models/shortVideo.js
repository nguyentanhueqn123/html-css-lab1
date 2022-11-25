const mongoose = require('mongoose');


// video schema
const ShortVideoSchema = new mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    shares: String,
    messages: String
});
module.exports = new mongoose.model('shortVideos', ShortVideoSchema);