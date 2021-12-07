let apid = 'f010616987a0390eeaa3d9f4fdf24eac';

//ввод текста в инпут
// let input = document.querySelector('.form-control input');
// input.addEventListener('keydown', function () {
//     console.log(input.value);
// });

let selectedCity = 703448;
let fetched = `http://api.openweathermap.org/data/2.5/weather?id=${selectedCity}&appid=${apid}`;

document.querySelector('#city')
    .addEventListener('change', function () {
        let city = document.querySelector('#city').value;
        fetched = `http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apid}&units=metric`;
        getResponse (fetched);
    });

function getResponse (fetched) {
    fetch(fetched)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#inCity').innerHTML = data.name;
            document.querySelector('#Celsius').innerHTML = `${Math.round(data.main.temp)} &#8451`;
            document.querySelector('.disclaimer').innerHTML = data.weather[0].description;
            document.querySelector('.features li').innerHTML = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
            console.log(data.weather);
            
        });


}

