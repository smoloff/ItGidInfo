let apid = 'f010616987a0390eeaa3d9f4fdf24eac';
let cityName = '';
let selectedCity = 703448;
let fetched = `http://api.openweathermap.org/data/2.5/weather?id=${selectedCity}&appid=${apid}&lang=ua&units=metric`;

document.querySelector('#city')
    .addEventListener('change', function () {
        selectedCity = document.querySelector('#city').value;
        fetched = `http://api.openweathermap.org/data/2.5/weather?id=${selectedCity}&appid=${apid}&lang=ua&units=metric`;
        getResponse (fetched);
    });

function getResponse (fetched) {
    fetch(fetched)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#Celsius').innerHTML = `${Math.round(data.main.temp)} &deg;C`;
            document.querySelector('#feels_like').innerText = data.main.feels_like ;
            document.querySelector('#humidity').innerText = data.main.humidity;
            document.querySelector('.clouds').innerHTML = data.weather[0].description;
            document.querySelector('#icon').innerHTML = `<img src = "http://openweathermap.org/img/w/${data.weather[0].icon}.png" width="100">`
            cityName = data.name
            console.log(data.name);
            
        });
}

getResponse(fetched)

let weatherButton = document.querySelector('#five_days_weather')
.addEventListener("click", function() {
 fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=7&appid=${apid}&lang=ua&units=metric`)
 .then(response => response.json())
 .then (data => {  
    console.log(data)


        //  for(let i = 0; i == 6; i++ ) {
        //     console.log(data.list[i])
        //  }
     
 })
})

