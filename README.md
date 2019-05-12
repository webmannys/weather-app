# NodeJS with ExpressJS Weather App
Used express generator to create an application skeleton using the twig template.\\
Referenced: https://codeburst.io/build-a-weather-website-in-30-minutes-with-node-js-express-openweather-a317f904897b to incorporate into the structure.

### Installing
Install node.js if not currently installed: https://nodejs.org/en/\
Copy or clone the project into a folder\
Go to folder and run ```npm install``` to install dependencies

### Usage
In the project folder run: ```npm start```\
Open browser and go to your localhost url on port 3000: http://localhost:3000

### Using your own API Key
If there is an API key problem or you want to create your own, go to url:\\
https://openweathermap.org/api\\
and register for an account. Go the the API keys tab to create the API key.\\
Open routes/index.js and replace the API key on line 5 with yours.