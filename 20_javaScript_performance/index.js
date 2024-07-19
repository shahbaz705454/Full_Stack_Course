//--------------------------> PERFORMANCE ------------------

// 1.Measure SPeed of Code
// 2.How to Work Efficient & Performing Code
// 3.Event Loop

//Adding 100 para
// let t1 = performance.now();

// let mydiv = document.createElement('div');
// for (let i = 1 ; i <=100  ; i++) {
//     let newElement= document.createElement('p');
//     newElement.textContent="This is para " + i;
//     mydiv.appendChild(newElement);
// }

// document.body.appendChild(mydiv);

// const t2 = performance.now();
// console.log('this took ' + (t2-t1) + 'ms');

// -----------------------> FRAGMENTATION ------------------->

let fragment = document.createDocumentFragment();

// for (let i = 0; i <= 30; i++) {
//     let element = document.createElement('p');
//     element.textContent= 'This is new paragraph ' + i;

//     fragment.appendChild(element);

// }
document.body.appendChild(fragment); // REFLOW ,REPAINT





// -------------------  The Call Statck ------------------------->

// A CALL STACK MAKE TRACK OF FUNCTION CALLS  




// ----------------------------EVENT LOOP ---------------------------->
// Synchronous->occuring at same time



// ------------------->  TIME OUT LOOPs------------------

// setTimeout(function timeout(){
//     console.log("welcome back")
// },5000);

// setTimeout();





// --------------------> API ------------------.>
// APi have two state resolve and reject

// let merapromise = new Promise(function(resolve,reject){

//     setTimeout(function() {
//         console.log("I am inside promise 1 ")

//     }, 5000);
//     resolve(2233);
//     // reject(new Error('Bhaisabh Error aaye hai'))
// });

let merapromise2 = new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log("I am inside promise 2 ")

    }, 3000);
    resolve(2233);
    // reject(new Error('Bhaisabh Error aaye hai'))
});

// merapromise2.then((value) => { console.log(value) });
// merapromise2.catch((error) => { console.log(error) });

//                        OR

merapromise2.then((value) => { console.log(value) }) ,(error) => { console.log(error) };

console.log('Pehla');





//    ASYNCHRONOUS api 
let waada1 = new Promise (function(resolve,reject){
    setTimeout(() => {
        console.log('Set timeout Started ');
    }, 2000);
    resolve(true)
});

waada1.then(()=>{
    let waada2= new Promise(function(resolve,reject){
        resolve("waada 2 resolved ");
    })
    return waada2;
}).then((value)=>console.log(value));


