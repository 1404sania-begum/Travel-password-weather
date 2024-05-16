const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8d423e34b3msh9cdbab97694460bp1bc59ejsn7e2d120655b4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const cityName = document.getElementById('cityName'); // Get reference to the cityName element
const cityInput = document.getElementById('city'); // Get reference to the city input field

const getWeather = (city) => {
	cityName.innerHTML = city; // Update the city name in the heading
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			// Update weather information
			temp.innerHTML = response.temp;
			temp2.innerHTML = response.temp;
			feels_like.innerHTML = response.feels_like;
			humidity.innerHTML = response.humidity;
			humidity2.innerHTML = response.humidity;
			min_temp.innerHTML = response.min_temp;
			max_temp.innerHTML = response.max_temp;
			wind_speed.innerHTML = response.wind_speed;
			wind_speed2.innerHTML = response.wind_speed;
			wind_degrees.innerHTML = response.wind_degrees;
			sunrise.innerHTML = response.sunrise;
			sunset.innerHTML = response.sunset;
		})
		.catch(err => console.error(err))
}

const submit = document.getElementById('submit'); 

submit.addEventListener("click", (e)=>{
	e.preventDefault();
	const city = cityInput.value; 
	getWeather(city);
});


getWeather("Delhi");



const getCityWeather = (city) => {
    return fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            return response; // Return the weather data
        })
        .catch(err => console.error(err));
}

// Define an array of common places with their names and corresponding row IDs
const commonPlaces = [
    { name: "Hyderabad", rowId: "hyderabad" },
    { name: "Seoul", rowId: "seoul" },
    { name: "Delhi", rowId: "delhi" },
    { name: "Boston", rowId: "boston" },
    { name: "Istanbul", rowId: "istanbul" },
    { name: "Shanghai", rowId: "shanghai" }
];

// Iterate through each common place
commonPlaces.forEach(place => {
    // Fetch weather data for the current place
    getCityWeather(place.name)
        .then(data => {
            // Update the table cells with weather information
            document.getElementById(place.rowId).innerHTML = `
                <th></th>
                <td>${data.cloud_pct}</td>
                <td>${data.feels_like}</td>
                <td>${data.humidity}</td>
                <td>${data.max_temp}</td>
                <td>${data.min_temp}</td>
                <td>${data.sunrise}</td>
                <td>${data.sunset}</td>
                <td>${data.temp}</td>
                <td>${data.wind_degrees}</td>
                <td>${data.wind_speed}</td>
            `;
        });
});
