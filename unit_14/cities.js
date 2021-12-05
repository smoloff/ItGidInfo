
const cities = [
    {
        "id": 703448,
        "name": "Київ"
    },
    {
        "id": 702550,
        "name": "Львів"
    },
    {
        "id": 709930,
        "name": "Дніпро"
    },
    {
        "id": 706483,
        "name": "Харків"
    }
];

let select = document.querySelector('#city');


for (let key in cities) {
    let option = document.createElement("option");
    option.text = cities[key].name;
    option.value = cities[key].id;
    select.appendChild(option);
    }
