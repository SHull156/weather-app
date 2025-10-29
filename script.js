let inputBox = document.getElementById("cityInput");
let searchBtn = document.getElementById("searchBtn");
let resultContainer = document.getElementById("weatherResult"); 

searchBtn.addEventListener("click", function(){
    let city = inputBox.value;
    let apiKey = "API_KEY";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then (data => {
            resultContainer.innerHTML = `
            <p>Temperature: ${data.main.temp} °C </p>
            <p> Description: ${data.weather[0].description}</p>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon" class="weather-icon">
            `;
            console.log(data);
        })
        .catch(error => {
            console.error(error);
            resultContainer.innerHTML = "<p>Could not fetch data. Try again.</p>";
        });
});