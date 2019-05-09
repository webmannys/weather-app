var express = require('express');
var router = express.Router();
var request = require('request');
var apiKey = '3b06482364a722da5644982bf3f788dc';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Weather App'});
});

/* POST home page. */
router.post('/', function (req, res, next) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
				console.log(weather);
				// let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {title: 'Weather App', temp: weather.main.temp, error: null});
      }
    }
  });
})

module.exports = router;
