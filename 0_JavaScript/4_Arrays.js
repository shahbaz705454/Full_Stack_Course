let arr = [44,34,49,26,47];
let arr2= ["ironman", "hulk", "DoctorStrange", "spiderman"];


const sort = arr.sort();
console.log()

arr2.forEach((ele)=>{
    // console.log(ele)
})


for (let city of arr2) {
    console.log(city)
}

arr.push(99);
arr.push(100)

for (const key of arr) {
    console.log(key)

    
}
arr.pop();

for (const key of arr)  {
    console.log(key)
    
}

// convert array to string 
console.log(arr.toString())
console.log(arr2.toString())

// concat add to arrays

let newarr = arr.concat(arr2);
for (const element of newarr) {
    console.log(element)

}

//----delete first element and add new element  

newarr.unshift("new element added ");

for (const element of newarr) {
    console.log(element)
}

//----- slice return a piece of the array 

let slice  = arr.slice(1,3);
console.log(slice)



//------- splice change original array add, remove, replace 
// splice(startIndx,DelCount,newEl1)


arr2.splice(2,0,"new hero superman");
console.log(arr2)
