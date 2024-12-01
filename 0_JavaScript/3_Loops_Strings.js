let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// -------> for each loop
// arr.forEach((elem)=>{
//     console.log(elem  )
// })



// --------> for loop 
for (let i = 0; i < arr.length; i++) {
    //    console.log(arr[i])

}
//--------> while loop
let num = 10;
// while (num<=20) {
//     console.log(num)
//     num++;

// }


// ------->  do while loop

do {
    console.log(num)
} while (num < 10);


let name = "my name is shahbaz "
// for-of-Loop used in iterating in Strings

for (const element of name) {
    // console.log(element)

}



// For-in loop used for array objects


let student = 
    {
        name: 'shahbaz',
        age: 20,
        cgpa: 8.5,
        isPass: true
    }



for (const key in student) {
//    console.log(key)
}



// quest 2 -  creaet a game user guess number btw 0 to 10 if number is right the user win 
// game 


// let gameNum =9;
// let userNum = prompt("enter Number between 0 to 10")
// while(gameNum!=userNum){
//     userNum = prompt("Enter number again ");
// }

// alert("you won the game");




// ------------->STRINGS 


let str1 = "   this is string created using double cout  "
let str2 ='this is new string using single cout'

// Here is some function on strings

let lenght = str1.length
console.log(str1[1])

// Template Literals
let specialString = `this is special string using template literals`;


let upperCase = str1.toUpperCase();
// console.log(upperCase)

let lowerCase = str1.toLowerCase();
console.log(lowerCase)

let trim = str1.trim()
console.log(trim)

let join = str1.concat(str2).trim()
console.log(join)


let slice = str2.slice(0,6);
console.log(slice)

let replace = str1.replaceAll('string','array').trim();
console.log(replace)


let include = str1.includes('string');
console.log(include)



// question -> create a user name using start with @ and last user the lenght of the charachter 
// let tempName  = prompt("enter a your Name  ");

// let newName = `@${tempName}${tempName.length} `;
// newName = newName.split(" ").join("");
// alert(`your user New user Name is ${newName}`);


let splitString = str2.split(" ");
console.log(splitString)







