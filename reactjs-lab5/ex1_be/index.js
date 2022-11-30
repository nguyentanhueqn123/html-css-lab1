const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Cors = require('cors');
require('dotenv').config();
const booksRoute = require('./routes/videos');

const PORT = process.env.PORT || 3000


//middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(Cors());


// routes
app.use('/api/books', booksRoute);

// connect mongodb
mongoose.connect(
    process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("mongdb is connected");
    }
)


app.listen(PORT, () => {
    console.log("Server started at PORT", PORT);

})