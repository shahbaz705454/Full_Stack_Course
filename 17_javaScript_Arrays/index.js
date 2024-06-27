Math.random();
console.log(Math.random())
console.log(Math.round(1.8))
console.log(Math.round(1.4))
console.log(Math.max(1,4,5,6,3,4,7,9,4,6))


// String

let name="Shahbaz";
console.log(name.length);
console.log(name.includes('Sh'));
console.log(name.startsWith('Shah'));
console.log(name.endsWith('az'));
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.trim());
console.log(name.repeat(3));


let message ="This is my first message";
let word= message.split(" ");
console.log(word);
for (const key in word) {
    console.log(key + " " + word[key]);
}

