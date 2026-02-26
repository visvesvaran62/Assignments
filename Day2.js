// 1️.Declare three variables using var, let, and const. Store your name, age, and a boolean value. Print them.

// var Name="vishva";
// let age=23;
// const student=true;
// console.log("name :", Name);
// console.log("age :", age);
// console.log("student :", student);



2.
 var Name;
 console.log(Name)
 let value=null
 console.log(value)



 3.
let myString = "Visvesvaran";     
let myNumber = 23;                
let myBoolean = true;             
let myBigInt = 1234567890127890n; 
let myNull=null;                
let myUndefined;                  
console.log("string:", typeof myString);
console.log("number:", typeof myNumber);
console.log("boolean:", typeof myBoolean);
console.log("bigint:", typeof myBigInt);
console.log("null:", typeof myNull);
console.log("undefined:", typeof myUndefined);



4.
// let a = "10";
// let b = "hello";

// console.log(a * 2);
// console.log(b * 2);


5.
let a=5;
let b=10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

6.
let x=10;
x+=5
console.log("after +=",x);
x-=10
console.log("after -=",x);
x*=10
console.log("after *=",x);
x/=10
console.log("after +=",x);

7.
console.log(10=="10")
console.log(10==="10")
console.log(10!="10")
console.log(10!=="10")

8.

const age=22;
const hasId=false;
if(age>18&&hasId===true){
    console.log("eligible"); 
}
else if(age<18||hasId===false){
    console.log("not eligible");   
}

9.
// var a;
// console.log(a);

// output: undefined

// a = 5;
// console.log(a);
// op:5

// console.log(typeof NaN);
// op:number
// console.log(typeof null);
// op:object
