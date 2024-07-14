

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
let stand2 = function () {
    console.log('walking fast...');
}


stand2();


// parameterised function

function sum(a, b) {
    return a + b;
}

// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,'b'));


// FUNCTION FOR MULTIPLE PARAMETERs

function sum2(a, b,) {
    let total = 0;
    for (let value of arguments) {
        total = total + value;
    }
    return total;
}



console.log(sum2(1, 2, 3, 4, 5, 6));



// REST OPERATOR
// rest operator is used to collect all the remaining arguments into an array
// ...args

function add(...args) {
    console.log(args);
}
add(1, 2, 3, 4, 5, 6);

// function that print full anem from array of object 
let person2 = {
    fname: 'mohd ',
    lname: 'shahbaz'

};

function fullName() {
    return `${person2.fname}${person2.lname}`;

}
 
// console.log(fullName());


//--------------------------------------------------GETTER AND SETTER ------------------------------------------------------------//

let person = {
    fname: 'mohd ',
    lname: 'shahbaz',

    get fullName(){
        return `${person.fname} ${person.lname}`;

    },

    set fullName(value){
        // if(typeof value !== String){
        //     throw new Error ("You have not sent string");
        // }
        let parts = value.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];

    }

};

console.log(person.fullName);
person.fullName = 'mohd kasif';
console.log(person.fullName);



// -----------------------------------------------TRY AND CATCH BLOCK ------------------------------------------------------------------\

// try{
//     person.fullName = 1;
// }
// catch (e){
//     alert(e);
// }

// console.log(person.fullName)

// -------------------------------------------------------- SCOPE -------------------------------------
{

    let a =5;
    console.log(a);
    var b = 10;


}
// console.log(a)
console.log(b)


// ---------------------------------------------------REDUCING IN ARRAY ----------------------------------

