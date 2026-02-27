let cart=[]
cart.push("mobile")
cart.push("keyboard")
cart.push("laptop")
cart.push("monitor")
let removeitem=cart.pop()
let original=cart;
console.log(removeitem)
console.log(original);




 let array= [10, 20, 30, 40];
  let re=array.shift()


 console.log(re)
 array.unshift(100,1000,10000)
 console.log(array);



let skills=["java","css","java script"]
if(!skills.includes("react")){
    skills.push("react")
}
console.log(skills);

let arr1=[10,11,12,13,14,15,16]
let middle=arr1.slice(1, 4)
console.log("middle array",middle)


 let  sp=[1, 2, 3, 4, 5]
  sp.splice(0,2,100,1000)
  console.log(sp);


  let n=[1,2]
  let n1=[3,4]
  let newone=n.concat(n1)
  console.log(newone);
  

  let spe =["JS", "React", "Node"] 
  let final =spe.join("-")
  console.log(final);


//   let numbers=[10,100,20,50,40]
//  const newnum=numbers.sort((a,b)=>a-b)
//  console.log(newnum);
 
// let numbers=[1,2,3,4,5]
// const num=numbers.map((num)=>num*5)
// console.log("multiple by 5:",num);


 let students=[
 { name: "Sudhan", age: 22 },
 { name: "Ravi", age: 25 }
]
let user=students.map((e)=>e.name)
console.log("students name:",user);

// let num=[10, 15, 20, 25, 30]
// const newarray=num.filter((e)=> e=>20)
// console.log(newarray);


// let nu=[100, 200, 300]

// const num=nu.reduce((sum,value)=>sum+value,0)
// console.log(num);

let newarr=[1,2,2,3,4,4,5]
const unique=newarr.filter((number,value)=>newarr.indexOf(number)===value)
console.log(unique);














  
  






 
 
 