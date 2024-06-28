

// HOISTING we can call funstion before declaring it shift the function to top before executing
run();



// function
function run() {
console.log('running ....');

}




// FUNCTION Assignmetn are two types

// 1. Named function assigmnetn 
let stand = function walk() {
    console.log('walking...');
}

// we can not call named function before executing
stand();

// 2. Anonymous fucntion assignment
let stand2 = function(){
    console.log('walking fast...');
}


stand2();


// parameterised function

function sum(a,b){
    return a+b;
}

// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,'b'));


// FUNCTION FOR MULTIPLE PARAMETERs

function sum2(a,b,){
    let total = 0;
    for (let value of arguments){
        total = total+value;
    }
    return total;
}



console.log(sum2(1,2,3,4,5,6));



// REST OPERATOR
// rest operator is used to collect all the remaining arguments into an array
// ...args

function add(...args){
    console.log(args);
}
add(1,2,3,4,5,6);