console.log("hello shahbaz");

// object creation

// const rectangle={

//     length:10,
//     breadth:5,

//     draw: function(){
//         console.log("drawing...")
//     }
// };

// there are two types of object creation meratoh 
// 1.Factory Function 
// 2.Constructor Function



// 1.Factory Function

function createRectangle() {
    return rectangle = {

        length: 20,
        breadth: 10,

        draw() {
            console.log("drawing...");
        }
    }
};

let obj1 = createRectangle();
console.log(obj1.length);
console.log(obj1.breadth);
obj1.draw();

// make parameter funvtion

function createRectangle(len, bred) {
    return rectangle = {

        length: len,
        breadth: bred,

        draw() {
            console.log("drawing...");
        }
    }
};


let obj2 = createRectangle(59, 44);

console.log(obj2.length);
console.log(obj2.breadth);
obj2.draw();




// 2.constructor Function

// CamelCase->numberofStudent
// construction-> PascalCase-> first letter of every word is capital

function Rectangle() {

    this.length = 5;
    this.breadth = 2;

    this.draw = function () {
        console.log("drawing square....");
    }



}

// object creation 
let obj3 = new Rectangle();

console.log(obj3.length);
console.log(obj3.breadth);

obj3.draw();




// DYNAMIC Nature of objct

function Cube(len, bred) {

    this.length = len;
    this.breadth = bred;

    this.draw = function () {
        console.log("drawing cube...");
    }
}

// object creation 
let obj4 = new Cube('shahbaz', 6);

obj4.color = "yellow"

console.log(obj4.length);
console.log(obj4.breadth);
console.log(obj4.color);

obj4.draw();

delete obj4.length;



// Object cloning
// 1.Iteration
// 2. Object.assign() method
// 3. Spread operator

// 1.Iteration 
let src ={value:10};
let dest ={};

for (const key in src) {
    dest[key] = src[key];
   
    }
console.log(dest);


// 2.Assigm method

let destt = Object.assign({},src);
console.log(destt);


// 3.Spread operation

let desttt ={...src}
console.log(desttt);


