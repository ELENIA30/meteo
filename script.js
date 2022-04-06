// const Apikey = '8d19f834fee6f5ee5a0141a527dcc528 '  ;
// const uri ='http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='8d19f834fee6f5ee5a0141a527dcc528';
import {
    createCard
} from "./utils.js";

const call = document.querySelector("#city");
call.addEventListener('change', () => {
    let city = call.value;
    
    console.log(city)
    getAPIdata(city);
});



const getAPIdata = async (city) => {
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d19f834fee6f5ee5a0141a527dcc528`)
    const res = await api.json();
    return res
}
getAPIdata("roma").then((city) => {
    console.log(city);
    createCard(city.name, city.weather[0].description, city.weather[0].main, city.weather[0].icon);



  
});

