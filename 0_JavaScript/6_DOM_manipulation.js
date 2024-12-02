let text = document.querySelector("#heading");

function changeHandler(){

     if (text.innerHTML === "This is original") {
                text.innerHTML = "Text has been changed";
            } else {
                text.innerHTML = "This is original";
            }
}

console.log(text.innerText);



