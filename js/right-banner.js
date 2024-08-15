document.addEventListener('DOMContentLoaded', function () {
    getWeather();
    setInterval(getWeather, 60000);
    getDateAndTime();
    setInterval(getDateAndTime, 1000);
});

function getDateAndTime() {
    const now = new Date();
    
    // Get the day of the week
    const dayOfWeek = now.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById('day-of-week').innerText = dayNames[dayOfWeek] + ", ";
    
    // Get the time of day
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    let AM_or_PM = " AM";

    if (hours >= 12) {
        AM_or_PM = " PM";
        if (hours > 12) {
            hours -= 12;
        }
    } else if (hours === 0) {
        hours = 12;
    }

    const time_of_day = `${hours}:${minutes}:${seconds} ${AM_or_PM}`;
    document.getElementById('local-time').innerText = time_of_day + " ";

    // Get the full date
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = now.getDate().toString().padStart(2, '0');
    document.getElementById('full-date').innerText = `${year}-${month}-${day}`;
    
    // Determine day or night logo
    const is_it_day = hours >= 6 && hours < 19;
    const day_or_night_logo = document.getElementById('day-or-night').className;
    if (!is_it_day && day_or_night_logo === 'fa-solid fa-cloud-sun') {
        document.getElementById('day-or-night').classList.remove("fa-cloud-sun");
        document.getElementById('day-or-night').classList.add("fa-cloud-moon");
    } else if (is_it_day && day_or_night_logo === 'fa-solid fa-cloud-moon') {
        document.getElementById('day-or-night').classList.remove("fa-cloud-moon");
        document.getElementById('day-or-night').classList.add("fa-cloud-sun");
    }
}

function getWeather(){
    const apiKey = '7bc7643c59fa0d6963b4df70a9c05ded';
    const lat = '33.745159';
    const lon = '-118.402397';

// Example API endpoint for current weather
    const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

// Make API request
    fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
        // Access weather information from the data object
        const temperature_kelvin = data.main.temp; //LOL THE DEFAULT TEMPERATURE METRIC IS IN KELVIN? 
        const weather_icon = data.weather[0].icon;
        const previous_weather_icon = document.getElementById('weather-icon').className;
        if (previous_weather_icon != weather_icon){
            document.getElementById('weather-icon').classList.remove(previous_weather_icon);
            document.getElementById('weather-icon').classList.add(weather_icon);
            document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${weather_icon}.png`;
        }
        const temperature_fahrenheit = (((9/5)*(temperature_kelvin - 273.15)) + 32).toFixed(2);
        const weatherDescription = data.weather[0].description;
        document.getElementById('temperature').innerText = `${temperature_fahrenheit}°F`;
        document.getElementById('weather').innerText = weatherDescription;
        // Use the weather information as needed
    })
    .catch(error => console.error('Error fetching weather:', error));
}