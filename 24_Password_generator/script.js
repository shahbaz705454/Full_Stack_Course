const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyMsg = document.querySelector("[data-copyMsg]");
const copyBtn = document.querySelector("[data-copy]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateBtn");
const allCheckbox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
// set strength color to grey

function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;

}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0, 10);
}


function generateLowerCase() {
    return String.fromCharCode(getRndInteger(97, 123));
}


function generateUpperCase() {
    return String.fromCharCode(getRndInteger(65, 91));
}



function generateSymbol() {
    const symbolArr = Array.from(symbols);
    const randIndx = getRndInteger(0, symbolArr.length);
    return symbolArr[randIndx];
  }

function calcStrength() {
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


async function copyContent() {

    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";

    } catch (e) {

        copyMsg.innerText = "Failed";

    }
    // to make copy button text visible
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");

    }, 2000);



}

function shufflePassword(array){
    // Fisher YAtes MEthod

    for(let i=array.length-1;i>0 ; i--){
        const j= Math.floor(Math.random()*(i+1));
        const temp = array[i];
        array[i]=array[j];
        array[j]=temp;

    
    }

    let str ="";
    array.forEach((el)=>(str +=el));
    return str;
     




}



function handleCheckBoxChange(){
    checkCount =0;
    allCheckbox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkCount++;
        }
    });

    // special condition for all check box but passord length is 1

    if(passwordLength<checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}


allCheckbox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange);
});



inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
});


copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value) {
        copyContent();
    }

});

generateBtn.addEventListener('click',()=>{
    // none of the checkbox are sleected
    if(checkCount==0){
        return;
    }

    if(passwordLength<checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    // lets start journey to find bnew password 

    // remove old password
    password ="";

    // lets put the stuff mentoned by checkbox 

    // if(uppercaseCheck.checked){
    //     password +=generateUpperCase();
    // }
    // if(uppercaseCheck.checked){
    //     password +=generateLowerCase();
    // }
    // if(uppercaseCheck.checked){
    //     password +=generateRandomNumber();
    // }
    // if(uppercaseCheck.checked){
    //     password +=generateSymbol();
    // }


    let funArr = [];
  if (uppercaseCheck.checked) funArr.push(generateUpperCase);
  if (lowercaseCheck.checked) funArr.push(generateLowerCase);
  if (numbersCheck.checked) funArr.push(generateRandomNumber);
  if (symbolCheck.checked) funArr.push(generateSymbol);

    // compulsory addition  

    for(let i =0 ;i<funArr.length;i++){
        password +=funArr[i]();
    }

    // remaining addition 
    for (let i = 0; i < passwordLength - funArr.length; i++) {

        let randIndx = getRndInteger(0, funArr.length);
        console.log("randomINDX" + randIndx);
        password += funArr[randIndx]();
      }


    // shuffle the password 
    password = shufflePassword(Array.from(password));
    console.log(password);


    // show in ui

    passwordDisplay.value =password;

    // calculate strength
    calcStrength();
  











});


