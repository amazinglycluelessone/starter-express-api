const express = require('express');
const fs = require('fs');

const app = express();

const axios = require('axios').default;
axios.defaults.timeout = 50000;
const tough = require('tough-cookie');
const cookieJar = new tough.CookieJar(); 

require('axios-cookiejar-support').wrapper(axios);
//axiosCookieJarSupport(axios);


// axios
//   .get('https://www.nseindia.com', {
//     jar: cookieJar,
//     withCredentials: true,
//   })
//   .then(() => {
//     console.log(cookieJar);
//   });

app.get('/', async (req, res) => {
    try{
		var config = {
			method: 'get',
			url: 'https://www.nseindia.com/',
			jar: cookieJar, // tough.CookieJar or boolean
			withCredentials: true
		};

		axios(config)
			.then(function (response) {
				res.send(response.data)
		})
		.catch(function (error) {
			console.log(error);
		});

    }catch(err){
        res.status(500).send(err);
    }
})  

app.get('/banknifty', async (req, res) => {
    try{
		var config = {
			method: 'get',
			url: 'https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY',
			jar: cookieJar, // tough.CookieJar or boolean
			withCredentials: true
		};

		axios(config)
			.then(function (response) {
				res.send(response.data)
		})
		.catch(function (error) {
			console.log(error);
		});

    }catch(err){
        res.status(500).send(err);
    }
})

app.get('/nifty', async (req, res) => {
    try{
		var config = {
			method: 'get',
			url: 'https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY',
			jar: cookieJar, // tough.CookieJar or boolean
			withCredentials: true
		};

		axios(config)
			.then(function (response) {
				res.send(response.data)
		})
		.catch(function (error) {
			console.log(error);
		});

    }catch(err){
        res.status(500).send(err);
    }
})

app.listen(process.env.PORT || 3000)
