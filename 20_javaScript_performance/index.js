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

for (let i = 0; i <= 30; i++) {
    let element = document.createElement('p');
    element.textContent= 'This is new paragraph ' + i;

    fragment.appendChild(element);
   
}
document.body.appendChild(fragment); // REFLOW ,REPAINT





// -------------------  The Call Statck ------------------------->

// A CALL STACK MAKE TRACK OF FUNCTION CALLS  




// ----------------------------EVENT LOOP ---------------------------->
// Synchronous->occuring at same time



// ------------------->  TIME OUT LOOPs------------------

setTimeout(function timeout(){
    console.log("welcome back")
},5000);

setTimeout();