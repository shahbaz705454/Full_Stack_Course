const API_KEY ="4050ae8ab0a4d34aba4a2b3b3299e866";
console.log("api is running");
const print = document.querySelector('.temp');



async function fetchWeatherDetail() {


    try{
        let city ="goa";
        const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
    
        console.log("weather Data :-> ",data);

    }catch(err){

        print.innerText = 'error failed',err;
    }

   

   



}



function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        console.log("error location not found");

    }
}


function showPosition(position){
   let lat= position.coords.latitude;
   let lon =position.coords.longitude;

   console.log(lat);
   console.log(lon);

}



