# Weather App

A simple weather app that fetches real-time weather data for any city using the [OpenWeather API](https://openweathermap.org/). Users can search for a city, and the app displays the temperature, humidity, wind speed, and an icon representing the current weather.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Demo
![Weather App Demo](img/demo.png)

## Features
- Search for a city to view its current weather.
- Displayed weather information includes:
  - Temperature (in Celsius)
  - Humidity percentage
  - Wind speed (in Km/h)
  - Weather icon based on current conditions
- Responsive design with a visually appealing card interface.

## Technologies Used
- HTML5, CSS3, and JavaScript
- [OpenWeather API](https://openweathermap.org/) for weather data

## Setup Instructions

1. **Clone the Repository**  
   Clone this repository to your local machine using:
   ```bash
   git clone https://github.com/abidsarkar/javascript-mini-learning-project.git
2. **Install node package**
 npm install dotenv
 <!-- did not work as dotenv is not a clit-side it is only for node.js -->
## API Key Setup
Obtain an API key from OpenWeather and replace the placeholder in weatherAppSrc.js:
const apiKey = "YOUR_API_KEY";
## Open the App
Open weatherAApp.html in your browser to start using the app.
## Usage

    Enter the name of the city you want to check the weather for in the search input.
    Click the search button to fetch and display the weather data.
## License

This project is licensed free.
### Notes:
1. Make sure to update `YOUR_API_KEY` in `weatherAppSrc.js` with the actual API key from OpenWeather.
2. Update `https://github.com/your-username/weather-app.git` with your actual GitHub repository URL.
3. Replace the demo image URL `img/demo.png` with the path to an actual screenshot if you have one. 

Let me know if you need any further customization!
