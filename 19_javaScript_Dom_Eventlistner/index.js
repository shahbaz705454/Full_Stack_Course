// EVent listner is used to listen like click scroll and rect on that trigerr event


function event() {
    console.log("This is event  listener function ")
    
}


// document.addEventListener('click', function(){
//     console.log("this is event listener call");

// })


document.addEventListener('click', event);

//---------- Remove eventListner Function is used to remove Event on that funtion
document.removeEventListener('click',event);

// =-----------------------------> PHASES OF EVENTS
// ----->Capturing phase 
// ------>At Target Phase
// ------>BuBBling Phase


const content = document.querySelector('#wrapper');

content.addEventListener('click', function(event) {
    console.log(event);
    
})

// --------THE DEFAULT ACTION
 let link= document.querySelector('#link');

 link.addEventListener('click', function (event) {
    
    event.preventDefault();
    console.log("maza aya");
 })



//  funtion that create 100 p elelment with event listener

// let myDiv = document.createElement('div');

// function paraStatus(event){
//     console.log("I have clicked on para");
// }

// myDiv.addEventListener('click', paraStatus);

// for (let i = 1; i <=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent='This is para' + 1;
    

//     myDiv.appendChild(newElement);
   
// }
// document.body.appendChild(myDiv);

// --------> IN the abpve function event lisner added on div so if we click any where in div event called 
// --------> so make new target spefic event listner  

// let myDiv2 = document.createElement('div');

// function paraStatus(event){
//     console.log('para' + event.target.textContent);
// }

// myDiv2.addEventListener('click', paraStatus);

// for (let i = 1; i <=100; i++){
//     let newElement2 = document.createElement('p');
//     newElement2.textContent='This is para' + i;
    

//     myDiv2.appendChild(newElement2);
   
// }
// document.body.appendChild(myDiv2);


// CREATED svent listner on differnet elemnt on same element

let element = document.querySelector('#element');

element.addEventListener('click', function (event) {

    // Adeed this if condition if we want to print only pan tag not para tag
    if(event.target.nodeName==='SPAN')
    console.log(' click kia hai ' + event.target.textContent+ " par");
    
});