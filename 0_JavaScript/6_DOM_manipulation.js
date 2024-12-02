let text = document.querySelector("#heading");
let countBox = document.querySelector("#countBox");
let btnP = document.querySelector("#btnP")
let btnM = document.querySelector("#btnM")
let body = document.querySelector("body")
let mode = document.querySelector("#mode")
let currMode ="light";
body.classList.add(currMode);

function changeHandler(){

     if (text.innerHTML === "This is original") {
                text.innerHTML = "Text has been changed";
            } else {
                text.innerHTML = "This is original";
            }
}
let count =0;

// const plusHandler=(()=>{
    
//     count++;
//     countBox.innerText = count;
//     console.log(count)
    

// })

// const minHandler=((e)=>{
//     count--;
//     countBox.innerText = count;
//     console.log(count)
//     console.log(e)

// })
// // console.log(countBox)



btnP.addEventListener('click', ((e)=>{
    count++;
    countBox.innerText = count;
    console.log(e)


}))


btnM.addEventListener('click', ((e)=>{
    count--;
    countBox.innerText = count;
    console.log(e)


}))

// btnP.removeEventListener("click",)

mode.addEventListener('click',(()=>{
    if(currMode ==="light"){
        currMode="dark";
        body.classList.add("light");
        body.classList.remove("dark")

    }else{
        currMode="light";
        body.classList.add("dark");
        body.classList.remove("light");
    }
}))

console.log(body)






