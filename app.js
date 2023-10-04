// declare and define function, input output machine
//we can pass in arguments or parameters
/*
function test(mess) {
    console.log(mess);
}
//run the function
test(true);

//String ""
const x = "String";
//declaring a variable, defining a variable
test(x);

//Numer/Integer
const y = 98
test(y);

//Boolean true or false
const z = true
test(z);

function add(x,y) {
    console.log(x + y);
}
//Need to convert the string to a number
let a = Number(prompt("enter a number"));
let b = Number(prompt("enter another number"));
add(a, b)


function add(x, y) {
    //creates an output
    return x + y;
}
const sum = add(45, 34);

function calc() {
    const sum = add(45, 34);
    console.log(sum);
}
calc();
*/

let weight = Number(prompt("enter weight"));
let height = Number(prompt("enter height"));
console.log(calcBMI)
function calcBMI (x){
let BMI = (weight / height **2) * 703;
return BMI;
}
