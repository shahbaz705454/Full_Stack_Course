function myFunction(){

    console.log("hello this is new function");
    console.log("hello this is me shahbaz!");
}

myFunction()


// paramaneter function

function myParameter(msg){
    console.log(msg)

}

myParameter("hello this is parameter")


// function sum(num1,num2){
//     return num1+num2
   
// }

// let ans = sum(2,10)
// console.log(ans)




// ------>arrow function
const sum =(a,b)=>{return a+b}
// console.log(sum);

// Question return the number of vowels are presnet inn the string 
const vovelReturn = (word)=>{
    let ans=0;
    for (const element of word) {
        if(element === "a" || element === "e" || element === "i" || element === "o" || element=== "u"){
            ans +=1;
          
        }
        
    }
    return ans;
}

// console.log(vovelReturn("aeiou"));




// //-------FOR EACH LOOP IN ARRAY  it is a CallBack Function

let calcSqur = [1,3,5,7,9,11,13];

calcSqur.forEach((val,idx)=>{
    console.log(val*val,idx);
})


// MAP created a new array with the result of some opertaion.


let square = calcSqur.map((val)=>{
    return val+2;
})

console.log(calcSqur)
console.log(square)



// filter create  a new array that give true condition on filter

let arr= [1,2,3,4,5,6,7,8,9,10,11,12,13];

let filterd=arr.filter((value)=>{
    return value%2==0;
})

console.log(filterd)




// reduced perform some opertation to reduce array to sing evalue 

let reduced= arr.reduce((result,currValue)=>{
    // return result+currValue;
    // to find largest number 
    return result>currValue?result:currValue;

})

console.log(reduced)


//  question -- marks of student filter out more then 90 marks 

let marks = [70,90,91,67,78,99,93,56,95,90,24,91,94,94,65,86,96,45,86,96];

let result = marks.filter((value)=>{
    return value>90;
})

console.log(result)



// quest-2-- take n input from user create array from  1 to n 
// use reduce to calcultae sum of all 

let n = parseInt(prompt("Enter number you want array size"));

let arrN=[];
for (let i = 1; i <= n; i++) {
    arrN.push(i)
    
}

let sumN= arrN.reduce((res,curVal)=>{
    return res+curVal;
})

let prodN=arrN.reduce((res,val)=>{
    return res*val;
})

console.log(sumN)
console.log(prodN)



