//-------------------------------------- MATH FUNCTION--------------------------------- 

Math.random();
console.log(Math.random())
console.log(Math.round(1.8))
console.log(Math.round(1.4))
console.log(Math.max(1, 4, 5, 6, 3, 4, 7, 9, 4, 6))


//--------------------------------------- STRINGS--------------------------------

let name = "Shahbaz";
console.log(name.length);
console.log(name.includes('Sh'));
console.log(name.startsWith('Shah'));
console.log(name.endsWith('az'));
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.trim());
console.log(name.repeat(3));


let message = "This is my first message";
let word = message.split(" ");
console.log(word);
for (const key in word) {
    console.log(key + " " + word[key]);
}

let design = `This is my first
messahe and this is back tick function that 
allow your string to desin in any
       way`;

console.log(design);
let names = "shahbaz";


let messages = ` hello my name is ${names},
                  good morning everyone`;


console.log(messages);

//-----------------------------------------------DATE------------------------------------
let date = new Date();
console.log(date);

let date2 = new Date('Aug 28 2003');
console.log(date2);

let date3 = new Date()

console.log(new Date(8.64e15).toString());

let date4 = new Date(2003, 7, 28, 7);
console.log(date4.getTime);



//------------------------------------ARRAYS-------------------------------------------


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const key in arr1) {

    console.log("index : " + key + " element :" + arr1[key]);
}

console.log(arr1);


// INSERTION

// at end
arr1.push(10);

// at begin
arr1.unshift(11);

// at midlle
arr1.splice(5,0,'a');

console.log(arr1);




// searching

console.log(arr1.includes(4));

//------------------------- ARRAY OF OBJECTS---------------------------------------

let course=[
    {no:1 ,name:'shahbaz'},
    {no:2 ,name:'aman'},
    {no:3 ,name:'kasif'},

]

console.log(course);

// searching in object of array

let find = course.find(function(courses){
    return courses.name =='shahbaz';
});

console.log(find);

// ARROW FUNCTION 
let finds = course.find(courses=> courses.name==='kasif');
console.log(finds);

