// const Apikey = '8d19f834fee6f5ee5a0141a527dcc528 '  ;
// const uri ='http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='8d19f834fee6f5ee5a0141a527dcc528';
import {
    createCard,
    updateCard
} from "./utils.js";
const getCitiesNames = () => {
    const allCity = [];
    const selectCities = document.getElementById('city');
    for(let indice = 0; indice < selectCities.children.length; indice++) {
        const valueOptionSelezionata = selectCities.children[indice].value;
        allCity.push(valueOptionSelezionata);
    }
    return allCity;
}
const createCitiesCards = (cities) => {
    cities.map((city) => {
        getAPIdata(city).then((city) => {
            createCard(
                city.name,
                city.weather[0].description,
                city.weather[0].main,
                city.weather[0].icon,
            );
        });
    });
};

const getAPIdata = async (city) => {
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d19f834fee6f5ee5a0141a527dcc528&lang=en`)
    const res = await api.json();
    return res
}
const call = document.querySelector("#city");
const cities = getCitiesNames();
call.addEventListener('change', () => {
    let city = call.value;

    if (city === 'tutte') {
        createCitiesCards(cities);
        return;
    } 

    getAPIdata(city).then((city) => {
        updateCard(city.name, city.weather[0].description, city.weather[0].main, city.weather[0].icon); 
    });
}); 

getAPIdata(call.value).then((city) => {
    if(city === 'tutte') return;
    createCard(city.name, city.weather[0].description, city.weather[0].main, city.weather[0].icon); 
});


// const call = document.querySelector("#city");
// getAPIdata(call.value).then((city) => {

//     createCard(city.name, city.weather[0].description, city.weather[0].main, city.weather[0].icon);
// })

// call.addEventListener('change', () => {
//     let city = call.value;
//     getAPIdata(city).then((city) => {
//         createCard(city.name, city.weather[0].description, city.weather[0].main, city.weather[0].icon);
//         const card = document.querySelector(".card");
//         document.querySelector(".cardsWrapper").removeChild(card);
//     });
// });

