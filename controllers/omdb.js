const express = require('express')
const router = express.Router()

// axios library for calling API's
const axios = require('axios');

// loads environment variables from a .env file
require('dotenv').config();
const API_KEY = process.env.API_KEY

router.get('/starwars', function(req, res) {
     const queryOptions = {
        params: {
             s: 'star wars',
            apikey: API_KEY
        }
     };

    axios.get('http://www.omdbapi.com', queryOptions)
        .then(function (response) {
            // handle success
            // res.send(response.data)
            let context = {starWarsData: response.data.Search}
            // console.log(context) this console log allows you to see what is in the object you queried from the database
            res.render('index.ejs', context)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
    })
});

module.exports = router 