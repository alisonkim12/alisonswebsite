document.addEventListener('DOMContentLoaded', function () {
    getWeather();
    setInterval(getWeather, 60000);
    getDateAndTime();
    setInterval(getDateAndTime, 1000);
    // fetchLastCommitDate();

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

async function fetchLastCommitDate() {
    const response = await fetch('https://api.github.com/repos/alisonkim12/alisonkim12/commits/main');
    const data = await response.json();
    const lastCommitDate = new Date(data.commit.committer.date);
    document.getElementById('last-updated-website"').innerText = `${lastCommitDate.toLocaleDateString()} ${lastCommitDate.toLocaleTimeString()}`;
}

fetchLastCommitDate();


// function getDateAndTime(){
//     // Make API request to WorldTimeAPI
//     fetch('https://worldtimeapi.org/api/timezone/America/Los_Angeles')
//         .then(response => response.json())
//         .then(data => {
//         // Getting date and day of week: 
//         const dateTime= data.datetime;
//         const dayOfWeek = data.day_of_week;
//         if (dayOfWeek == "1"){
//             document.getElementById('day-of-week').innerText = "Monday, ";
//         } else if (dayOfWeek == "2") {
//             document.getElementById('day-of-week').innerText = "Tuesday, ";
//         } else if (dayOfWeek == "3") {
//             document.getElementById('day-of-week').innerText = "Wednesday, ";
//         } else if (dayOfWeek == "4") {
//             document.getElementById('day-of-week').innerText = "Thursday, ";
//         } else if (dayOfWeek == "5") {
//             document.getElementById('day-of-week').innerText = "Friday, ";
//         } else if (dayOfWeek == "6") {
//             document.getElementById('day-of-week').innerText = "Saturday, ";
//         } else if (dayOfWeek == "0") {
//             document.getElementById('day-of-week').innerText = "Sunday, ";
//         }
//         let AM_or_PM = " AM";
//         let time_of_day = dateTime.slice(11,16); 
//         let is_it_day = true; 
//         if (Number(dateTime.slice(11,13)) >= 19 || Number(dateTime.slice(11,13)) <= 6){
//             is_it_day = false; 
//         }
//         const day_or_night_logo = document.getElementById('day-or-night').className;
//         if (is_it_day == false && day_or_night_logo == 'fa-solid fa-cloud-sun') {
//             document.getElementById('day-or-night').classList.remove("fa-cloud-sun");
//             document.getElementById('day-or-night').classList.add("fa-cloud-moon");
//         }
//         // set AM or PM 
//         if (Number(dateTime.slice(11,13)) > 11){
//             AM_or_PM = " PM";
//         }
//         // I hate 24hr military time 
//         if (Number(dateTime.slice(11,13)) > 12){
//             time_of_day = (Number(dateTime.slice(11,13)) - 12).toString()+ ":"+ dateTime.slice(14,16);
//         }
//         time_of_day += ":" + dateTime.slice(17,19);
//         document.getElementById('local-time').innerText = time_of_day + AM_or_PM + " ";
//         document.getElementById('full-date').innerText = dateTime.slice(0,10);
//         })
        
//         .catch(error => console.error('Error fetching time:', error));   
// }

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