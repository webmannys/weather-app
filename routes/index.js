var express = require('express');
var router = express.Router();
var request = require('request');
var titleText = 'Weather App';
var apiKey = '3b06482364a722da5644982bf3f788dc';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: titleText, city: null, conditions: null, temp: null, temp_min: null, temp_max: null, humidity: null, sunrise: null, sunset: null});
});

/* POST home page. */
router.post('/', function (req, res, next) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body);
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
				console.log(weather);
        res.render('index', {title: titleText, city: weather.name, conditions: weather.weather[0].main,  temp: weather.main.temp, temp_min: weather.main.temp_min, temp_max: weather.main.temp_max, humidity: weather.main.humidity, sunrise: convert_timestamp(weather.sys.sunrise), sunset: convert_timestamp(weather.sys.sunset)});
      }
    }
  });
})

module.exports = router;

function convert_timestamp(unixtimestamp){

 // Convert timestamp to milliseconds
 var date = new Date(unixtimestamp*1000);

 // Hours
 var hours = date.getHours();
 
 //only -12 from hours if it is greater than 12 (if not back at mid night)
 hours = (hours > 12)? hours -12 : hours;
		
 //it is pm if hours from 12 onwards
 var suffix = (hours >= 12)? 'pm' : 'am';

 // Minutes
 var minutes = "0" + date.getMinutes();

 // Display date time in h:m format
 var convdataTime = hours + ':' + minutes.substr(-2) + suffix;
 
 return convdataTime;
 
}