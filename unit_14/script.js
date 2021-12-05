let apid = 'f010616987a0390eeaa3d9f4fdf24eac';

//ввод текста в инпут
// let input = document.querySelector('.form-control input');
// input.addEventListener('keydown', function () {
//     console.log(input.value);
// });

let selectedCity = 703448;
let fetched = `http://api.openweathermap.org/data/2.5/weather?id=${selectedCity}&appid=${apid}`;

document.querySelector('#city')
    .addEventListener('click', function () {
        fetched = `http://api.openweathermap.org/data/2.5/weather?id=${this.value}&appid=${apid}`;
        getResp(fetched);
    });

function getResp(fetched) {
    fetch(fetched)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });

}

