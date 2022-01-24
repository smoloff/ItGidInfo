let apid = 'f010616987a0390eeaa3d9f4fdf24eac';
let api7days = '4ef60d156739863d8d9f5d2b198605d2';
let cityName = '';
let lat = '50.4333';
let lon = '30.5167';
let selectedCity = 703448;


const cities = [
    {
        "id": 703448,
        "name": "Київ",
        "lat": 50.4333,
        "lon": 30.5167
    },
    {
        "id": 702550,
        "name": "Львів",
        "lat": 49.8383,
        "lon": 24.0232
        

    },
    {
        "id": 709930,
        "name": "Дніпро",
        "lat": 49.45,
        "lon": 34.9833 
    },
    {
        "id": 706483,
        "name": "Харків",
        "lat": 50,
        "lon": 36.25
    }
];

let select = document.querySelector('#city');


for (let key in cities) {
    let option = document.createElement("option");
    option.text = cities[key].name;
    option.value = cities[key].id;
    select.appendChild(option);
    }



let date = new Date;
let time = date.getHours();
let day = dayOfWeek(date.getDay());

function dayOfWeek(num) {
    let dayArr = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четверг', 'Пятниця', 'Суббота'];
    return dayArr[num];
}

let fetched = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apid}&lang=ua&units=metric`;

document.querySelector('#city')
    .addEventListener('change', function () {
        selectedCity = document.querySelector('#city').value;
        for (let key in cities) {
           if (cities[key].id == selectedCity) {
               lat = cities[key].lat;
               lon = cities[key].lon;  
                   }
        }
        fetched = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apid}&lang=ua&units=metric`;
        getResponse(fetched);
    });

function getResponse(fetched) {
    fetch(fetched)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let currentTime = `${day}  ${time}:${date.getMinutes()}`;
            document.querySelector('.date').innerHTML = currentTime;
            document.querySelector('#Celsius').innerHTML = `${Math.round(data.current.temp)}`;
            document.querySelector('#feels_like').innerText = Math.round(data.current.feels_like);
            document.querySelector('#humidity').innerText = data.current.humidity;
            document.querySelector('#wind').innerText = Math.round(data.current.wind_speed * 3);
            document.querySelector('.clouds').innerHTML = data.current.weather[0].description;
            document.querySelector('#icon').innerHTML = `<img style="vertical-align:middle" src = "http://openweathermap.org/img/w/${data.current.weather[0].icon}.png" width="70">`;
            lat = data.lat;
            lon = data.lon;
            allWeather(data);

        });
}



function allWeather(data) {
    
            let ulHourly = document.querySelector('.hourly');
            ulHourly.innerHTML = '';
            let ulDay = document.querySelector('.daily');
            ulDay.innerHTML = '';

            //рассчет темперауры по часам
            for (let a in data.hourly) {
                time++;
                if (time >= 24) { time = 0; }
                if (a > 0 && a < 14 && a % 2 == 0) {
                    let li = document.createElement('li');
                    li.style.cssText += 'color:gray;text-align:center';
                    li.innerHTML = `${Math.round(data.hourly[a].temp)}<br>
            <img style="vertical-align:middle" src="http://openweathermap.org/img/w/${data.hourly[a].weather[0].icon}.png" width="50"> <br> ${time}:00`;
                    ulHourly.appendChild(li)
                }
            }
            
            //рассчет темперауры по дням          
            for (let i = 1; i <= 5; i++) {
                let nextDay = date.getDay()+ i;                
                if (nextDay > 7) {
                    nextDay = nextDay - 7;
                    nextDay = dayOfWeek(nextDay);
                } else {
                    nextDay = dayOfWeek(nextDay); 
                }                                
                let li = document.createElement('li');
                let icon = data.daily[i].weather[0].icon;
                icon = `<img style="vertical-align:middle" src="http://openweathermap.org/img/w/${icon}.png" width="40">`;

                li.innerHTML = `${nextDay} ${icon} <span><b>${Math.round(data.daily[i].temp.day)}</b> /  ${Math.round(data.daily[i].temp.night)}</span>`;
                ulDay.appendChild(li);                
            }

            
            


        
};


getResponse(fetched)

