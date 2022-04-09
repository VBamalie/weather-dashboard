const searchHistory = [];
const apiKey = "9d5b499a8ef821e7f280310ca991ce63";
//let weatherApiUrl = "https://openweathermap.org/";

var searchCity = $("#searchCity")

dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

// let latLon = `http://api.openweathermap.org/geo/1.0/direct?q=${searchFormInput}&limit=1&appid=${apiKey}`;

// let weatherApiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}`;


// function weatherData(weatherApi){
//     fetch(weatherApi)
//     .then(function(respond){
//         return respond.json()
//     })
//     .then(function(data){
//         console.log(data)
//     })
// }

var citySubmitHandler = function (event) {
    event.preventDefault();
  
    var cityInput = $("#cityInput").val().trim();
  
    if (cityInput) {
      console.log("success");
  
      $("#cityInput").textContent = '';
      $("#cityInput").value = '';
    } else {
      window.alert('Please enter a city');
    }
  };

  searchCity.on('click', citySubmitHandler);