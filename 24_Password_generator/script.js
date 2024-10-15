const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay =document.querySelector("[data-lengthNumber]");
const passwordDisplay =document.querySelector("[data-passwordDisplay]");
const copyMsg =document.querySelector("[data-copyMsg]");
const copyBtn =document.querySelector("[data-copy]");
const uppercaseCheck =document.querySelector("#uppercase");
const lowercaseCheck =document.querySelector("#lowercase");
const numbersCheck =document.querySelector("#numbers");
const symbolCheck =document.querySelector("#symbol");
const indicator =document.querySelector("[data-indicator]");
const generateBtn =document.querySelector(".generateBtn");
const allCheckbox =document.querySelectorAll("input[type=checkbox]");
const symbols = '`~!@#$%^&*()_+-={[}]|;:"<,>.?/';


let paswword = "";
let passwordLength = 10;
let checkCount =1;
handleSlider();
// set strength color to grey

function handleSlider(){
    inputSlider.value= passwordLength;
    lengthDisplay.innerText =10;

}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    //shadow

}


function getRndInteger(min,max){
    return Math.floor(Math.random() * (min-max)) + min ;
}

 function generateRandomNumber(){
    return getRndInteger(0,9);
 }


 function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123));
 }

 
 function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));
 }
