const url = "https://api.github.com/users/";
const avatar = document.querySelector("#avatar");
const userName = document.querySelector(".name");
const userid = document.querySelector("#user");
const date = document.querySelector(".date");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const bio = document.querySelector(".bio");
const repos = document.querySelector("#repos");
const follower = document.querySelector("#follower");
const following = document.querySelector("#following");
const userlocation = document.querySelector("#location");
const page = document.querySelector("#page");
const twitter= document.querySelector("#twitter");
const company= document.querySelector("#company");
const btnsubmit = document.querySelector("#submit");
const input = document.querySelector("#input");
const btnmode = document.querySelector("#btn-mode");
const modetext = document.querySelector("#mode-text");
const modeicon = document.querySelector("#mode-icon");
const root = document.documentElement.style;
const profileContainer =document.querySelector(".main-container");
const noresult = document.querySelector("#no-results");
const mainContainer = document.querySelector(".main-container");

let darkMode = false;





getUser("shahbaz705454")
async function getUser(username){

    const response = await fetch(url + username);
    console.log(response);
    const data = await response.json();
    console.log(data);

    try{
        const response = await fetch(url + username);
        console.log(response);
        const data = await response.json();
        console.log(data);
        fetchuser(data);
        mainContainer.style.opacity = 1;

    }catch(err){
        alert("Please Enter Valid User Name..");
        mainContainer.style.opacity = 0;




    }
  



}


btnsubmit.addEventListener("click",function(){
    if(input.value !== ""){
        getUser("error found");
       

    }

});

input.addEventListener(
    "keydown",
    function (e) {
      if (!e) {
        var e = window.event;
      }
      if (e.key == "Enter") {
        if (input.value !== "") {
          getUser(input.value);
        }
      }
    },
    false
  );




//   dark mode button event listener
btnmode.addEventListener("click",function(){
    if(darkMode==false){
        darkModeProperties();
    }else{
        lightModeProperties();
    }
});

// Check if there is a value for "dark-mode" in the user's localStorage
if (localStorage.getItem("dark-mode") === null) {
    // If there is no value for "dark-mode" in localStorage, check the device preference
    if (prefersDarkMode) {
      // If the device preference is for dark mode, apply dark mode properties
      darkModeProperties();
    } else {
      // If the device preference is not for dark mode, apply light mode properties
      lightModeProperties();
    }
  } else {
    // If there is a value for "dark-mode" in localStorage, use that value instead of device preference
    if (localStorage.getItem("dark-mode") === "true") {
      // If the value is "true", apply dark mode properties
      darkModeProperties();
    } else {
      // If the value is not "true", apply light mode properties
      lightModeProperties();
    }
  }










function fetchuser(data){
    avatar.src = data.avatar_url;
    userName.innerText = data.name;
    userid.href = data.html_url;
    userid.innerText=`@${data.login}`;
    datesegments = data.created_at.split("T").shift().split("-");
    date.innerText = `Joined ${datesegments[2]} ${months[datesegments[1] - 1]} ${datesegments[0]}`;
    bio.innerText = data.bio == null ? "This profile has no bio" : data.bio;
    repos.innerText = data.public_repos;
    follower.innerText= data.followers;
    following.innerText = data.following;
    userlocation.innerText =data.location ==null ? "Not Available" : data.location;
    page.innerText = data.blog == null ? "Not Avalable " : data.blog ;
    page.href = data.blog == null ? "#" : data.blog ;
    twitter.innerText = data.twitter_username == null ? "Not Available " :data.twitter_username;
    twitter.href = data.twitter_username == null ? "#" :data.twitter_username;
    company.innerText = data.company ==null ? "Not Available " :data.company;










}


// dark mode and light mode function



function darkModeProperties() {
    root.setProperty("--lm-bg", "#141D2F");
    root.setProperty("--lm-bg-content", "#1E2A4");
    root.setProperty("--lm-text", "white");
    root.setProperty("--lm-text-alt", "white");
    root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
    modetext.innerText = "Light";
    modeicon.src = "./asset/sun-icon.svg";
    root.setProperty("--lm-icon-bg", "brightness(1000%)");
    darkMode = true;
    localStorage.setItem("dark-mode", true);
   
  }
  function lightModeProperties() {
    root.setProperty("--lm-bg", "#F6F8FF");
    root.setProperty("--lm-bg-content", "#FEFEFE");
    root.setProperty("--lm-text", "#4B6A9B");
    root.setProperty("--lm-text-alt", "#2B3442");
    root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
    modetext.innerText = "DARK";
    modeicon.src = "./asset/moon-icon.svg";
    root.setProperty("--lm-icon-bg", "brightness(100%)");
    darkMode = false;
    localStorage.setItem("dark-mode", false);
    
  }




