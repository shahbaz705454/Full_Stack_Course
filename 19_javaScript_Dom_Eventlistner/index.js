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
