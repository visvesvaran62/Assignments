// Write a function to reverse a string without using .reverse().
const reverse=(str)=>{
    let value=""
    for(let i=str.length-1;i>=0;i--){
        value+=str[i]

        
    }
    return value
}
    console.log( reverse("vishva"));

    // Find the second largest number in an array without using .sort().

 



// Remove duplicate values from an array using JavaScript methods.

const repeatnum=(arr)=>{

    let values=[]
    for( let i=0;i<arr.length;i++){
        if(!values.includes(arr[i])){
            values.push(arr[i])
           
        }

    
    }
  return values;
}
console.log(repeatnum([1,1,2,2,3,4,]));

// Check whether a given string is a palindrome or not.
const isPalindrome=(str)=>{
let Arry=[]
for(let i=str.length-1;i>=0;i--){
    Arry+=str[i]

}
return Arry===str
}
console.log(isPalindrome("madam"))


// Use .map() to convert an array of numbers into their squares.

// let array=[1,2,3,4,5]

// let result=array.map((num)=>num*2)

// console.log(result)

const product=(a,b,operation)=>{
  
    return  operation(a,b);
}
const add=(x,y)=>x+y;
const multi=(x,y)=>x*y

const num=(a)=>a*a

console.log(product(5,3,add))
console.log(product(5,3,multi));


// Use .filter() to return only even numbers from an array.

let array=[1,2,3,4,5,6,7,8,9,10]

let result=array.filter(num=>num %2==0)
console.log("even numbers are:",result)


// Use .reduce() to find the sum of all elements in an array.

let value=[10,10,20,30,40]

let final=value.reduce((acc,curr)=>acc+curr)
console.log(final)


// Write a function to check if two strings are anagrams.

const isChecking=(arr)=>{

}

// Sort an array of objects based on a specific property (like age).

let person=[{name:"vishva",age:25},
    {name:"barath",age:19},
    {name:"asik",age:24},
    {name:"guru",age:18}
]

const asc=person.sort((a,b)=>a.age-b.age)
console.log("age vise sorting",asc);

// Explain the difference between == and === with examples.

const compare=(a,b,c)=>{
    return c(a,b)

}

const isCompare=(a,b)=>a==b
const isComparee=(a,b)=>a===b


console.log(compare("10",10,isCompare));
console.log(compare("10",10,isComparee));
console.log(compare(null,undefined,isComparee));



// ==  --> this a comparison operator this is check both two are true or false.
// === ---> this is strict opertor this also same like a == but it also check values data types.





