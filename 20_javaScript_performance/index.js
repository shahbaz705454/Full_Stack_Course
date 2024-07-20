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

merapromise2.then((value) => { console.log(value) }), (error) => { console.log(error) };

console.log('Pehla');





//    ASYNCHRONOUS api 
let waada1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Set timeout Started ');
    }, 2000);
    resolve(true)
});

waada1.then(() => {
    let waada2 = new Promise(function (resolve, reject) {
        resolve("waada 2 resolved ");
    })
    return waada2;
}).then((value) => console.log(value));


// ASYNC-AWAIT
// Special syntex used to word with promises for multiple functions

async function weatherUtility() {
    let delhiMausam = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('delhi me bhot garmi hai')

        }, 1000);
    });

    let hydMausam = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hydrabad mausam isa cool ");
        }, 2000);
    });

    let upMausam = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('up me barish ho rhi hai');
        }, 3000);
    });

    let dM = delhiMausam;
    let hM = hydMausam;
    let upM = upMausam;

    return [dM, hM, upM];

}

//-----------------------------> FETCH API <---------------------
// send-->network
// retrieve<--network 


//   Get APi 
// async function utility() {


//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);

// };

// utility();


// POST API

async function helper() {



    let options = {
        method: 'POST',
        body: JSON.stringify({
            title: 'shahbaz',
            body: 'acchi body',
            userId: 2003,
            weight : 70,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    };

    let content2 = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = await content2.json();

    return response;

}

async function utility2() {

    let ans =await helper();
    console.log(ans);

}

utility2();