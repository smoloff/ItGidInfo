let apid = 'f010616987a0390eeaa3d9f4fdf24eac';
let api7days = '4ef60d156739863d8d9f5d2b198605d2';
let cityName = '';
let lan = '';
let lon = '';
let selectedCity = 703448;
let date = new Date;
let time = date.getHours();
let day = dayOfWeek(date.getDay())


let fetched = `http://api.openweathermap.org/data/2.5/weather?id=${selectedCity}&appid=${apid}&lang=ua&units=metric`;

// change city
document.querySelector('#city')
    .addEventListener('change', function () {
        selectedCity = document.querySelector('#city').value;
        fetched = `http://api.openweathermap.org/data/2.5/weather?id=${selectedCity}&appid=${apid}&lang=ua&units=metric`;
        getResponse(fetched);
    });

function getResponse(fetched) {
    fetch(fetched)
        .then(response => response.json())
        .then(data => {
            let currentTime = `${day}  ${time}:${date.getMinutes()}`
            document.querySelector('.date').innerHTML = currentTime;
            document.querySelector('#Celsius').innerHTML = `${Math.round(data.main.temp)} `;
            document.querySelector('#feels_like').innerText = Math.round(data.main.feels_like);
            document.querySelector('#humidity').innerText = data.main.humidity;
            document.querySelector('#wind').innerText = Math.round(data.wind.speed * 3);
            document.querySelector('.clouds').innerHTML = data.weather[0].description;
            document.querySelector('#icon').innerHTML = `<img style="vertical-align:middle" src = "http://openweathermap.org/img/w/${data.weather[0].icon}.png" width="50">`
            lat = data.coord.lat;
            lon = data.coord.lon;
            allWeather(lat, lon)
            console.log(data);

        });
}

function dayOfWeek(num) {
    let dayArr = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четверг', 'Пятниця', 'Суббота'];
    return dayArr[num];
};


function allWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apid}&lang=ua&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let i = 0; i < data.daily.length; i++) {
                console.log(` вдень: ${data.daily[i].temp.day}, вночі: ${data.daily[i].temp.night}`)
            }

            let ul = document.querySelector('.hourly');

            for (let a in data.hourly) {
                time++;
                if (time >= 24) { time = 0 }
                if (a > 0 && a < 14 && a % 2 == 0) {
                    let li = document.createElement('li');
                    li.style.cssText += 'color:gray;text-align:center';
                    li.innerHTML = `${Math.round(data.hourly[a].temp)}<br>
            <img style="vertical-align:middle" src = "http://openweathermap.org/img/w/${data.hourly[a].weather[0].icon}.png" width="50"> <br>
            ${time}:00
           `
                    ul.appendChild(li)
                }
            }
        })
};


getResponse(fetched)

