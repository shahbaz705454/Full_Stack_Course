const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[ data-searchForm]");
const loadingScreen= document.querySelector(".loading-container");
const userInfoContainer=document.querySelector(".user-info-container");
const apiErrorImg = document.querySelector("[data-notFoundImg]");
const apiErrorMessage = document.querySelector("[data-apiErrorText]");

 


// Initial variable neeed
const API_KEY ="4050ae8ab0a4d34aba4a2b3b3299e866";
let currentTab = userTab;
currentTab.classList.add("current-tab");

// ek kaam pending hai
getFromSessionStorage();


function switchTab(clickedTab){ 
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
    }
}


userTab.addEventListener("click", ()=>{
    switchTab(userTab);
});

searchTab.addEventListener("click",()=>{
    switchTab(searchTab);



});

// check if the coordinate are already present in the seession 

function getFromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        grantAccessContainer.classList.add("active");

    }else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);

    }

}


async function fetchUserWeatherInfo(coordinates){
    const {lat,lon} = coordinates;
    // make grantcontainer invisible

    grantAccessContainer.classList.remove("active");

    // make loader visible

    loadingScreen.classList.add("active");


    // api call
    try{
        const response= await fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
        console.log(data);

    }catch(err){
        loadingScreen.classList.remove("active");
    }

}


function renderWeatherInfo(weatherInfo){

    // firstly we need to fetch the element 

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon= document.querySelector("[data-weatherIcon]");
    const temp= document.querySelector("[data-temp]");
    const windSpeed= document.querySelector("[data-windSpeed]");
    const humidity= document.querySelector("[data-humidity]");
    const cloudiness= document.querySelector("[data-cloudiness]");


    // fetch the constrains to the main ui 

    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.main;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp.toFixed(2)} °C`;
    windSpeed.innerText = `${weatherInfo?.wind?.speed.toFixed(2)}m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;



}
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);

    }else{
       
    }
}

function showPosition(position){

    const userCoordinates ={
        lat : position.coords.latitude,
        lon : position.coords.longitude,
    };

    sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);

}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener('click',getLocation);

let searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName==""){
        
        return;
    }else{
        fetchSearchWeatherInfo(cityName);
    }
});


async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }catch(err){
        loadingScreen.classList.remove("active");
        apiErrorContainer.classList.add("active");
        userInfoContainer.classList.remove("active");
        apiErrorMessage.innerText = "City Not Found";


    }
    
}
