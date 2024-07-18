//--------------------------> PERFORMANCE ------------------

// 1.Measure SPeed of Code
// 2.How to Work Efficient & Performing Code
// 3.Event Loop

//Adding 100 para
let t1 = performance.now();

let mydiv = document.createElement('div');
for (let i = 1 ; i <=100  ; i++) {
    let newElement= document.createElement('p');
    newElement.textContent="This is para " + i;
    mydiv.appendChild(newElement);
    
    
}
document.body.appendChild(mydiv);

const t2 = performance.now();
console.log('this took ' + (t2-t1) + 'ms');
