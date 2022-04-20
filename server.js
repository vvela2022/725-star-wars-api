const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();

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
                starWarsData: response.data
            }
            // handle success
            console.log(context.starWarsData.Search[0].Title)
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