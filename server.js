const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();
// Mongoose is a Object Data Modeling (ODM) library for 
// MongoDB distributed as an npm package.
const mongoose = require("mongoose");

// configures and gives access to .env file object
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
    .then( () => {
        console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`);
    })
    .catch( (error) => {
        console.log('MongoDB connection error 😥', error)
})

// We're working on a project together!!!

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    const queryOptions = {
        params: {
            s: 'star wars',
            apikey: process.env.KEY
        }
    };

    axios.get('http://www.omdbapi.com', queryOptions)
        .then(function (response) {
            console.log(`I love Github!`)
            let context = {
                starWarsData: response.data.Search
            }
            // handle success
            console.log(context.starWarsData[0].Title)
            res.render('index', context);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
});

app.listen(3012, function() {
    console.log(`I am listening on port 3000`)
});
// app.listen(3000);
