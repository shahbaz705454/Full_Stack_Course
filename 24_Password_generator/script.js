const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyMsg = document.querySelector("[data-copyMsg]");
const copyBtn = document.querySelector("[data-copy]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbol");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateBtn");
const allCheckbox = document.querySelectorAll("input[type=checkbox]");
const symbols = '`~!@#$%^&*()_+-={[}]|;:"<,>.?/';


let paswword = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider();
// set strength color to grey

function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = 10;

}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;

}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (min - max)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0, 9);
}


function generateLowerCase() {
    return String.fromCharCode(getRndInteger(97, 123));
}


function generateUpperCase() {
    return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol() {
    const RndNum = getRndInteger(0, symbols.length);
    return symbols.charAt(RndNum);
}

function calcStrngth() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if (lowercaseCheck.checked) hasLower = true;
    if (uppercaseCheck.checked) hasUpper = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolCheck.checked) hasSym = true;


    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if (
        (hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6) {
        setIndicator("#ff0");
    } else {
        setIndicator("#0f00");
    }

}


async function copyContent(){

    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText= "copied";

    }catch(e){

        copyMsg.innerText ="Failed";

    }
    // to make copy button text visible
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
        
    }, 2000);

   

}



inputSlider.addEventListener('input',(e)=>{
    passwordLength =e.target.value;
    handleSlider();
})


