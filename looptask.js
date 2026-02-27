// day-1 loop task

// let arr1=[1,2,3,4,5]
// for(let i=0;i<arr1.length;i++){
//     console.log("the numbers are:",arr1[i]);   
// }
// //

// day-------2

let num=[1,2,3,4,5,6,7,8,9,10];
let value=0
for(let i=0;i<num.length;i++){
    if(num[i]% 2===0){
     console.log("even number :",num[i]);
    }
    value+=num[i]
}
console.log(value);



// DAY-------3

let ar1=[1,2,3,4,5]
let sumvalue=0;
for(let i=0;i < ar1.length;i++){

  sumvalue+=ar1[i]
}
console.log("sum value is :",sumvalue);



// day--------4


let number=[10,20,30,40,50]
for(let i=number.length-1;i>=0;i--){
  console.log("reverse array is :",number[i]);
  
}


let x=5;
for(let i=1;i<=x;i++){
  let row=""
  for(let j=1;j<=i;j++){
    row=row+"*";
  }
  console.log(row);
  
}




// const outer = ()=>{

//   let count = 0;

//   return ()=>{
//     count++

//     return count

//   }


// }


// const data = outer()


// console.log(data());
// console.log(data());
// // console.log(data());

// count = 12

// console.log(count);







let  arr=[1,2,3,4,5,6,7]
console.log(arr);
const dat=arr.map((e)=>e*e)
console.log(dat)


let arr11=[100,1000,2,6,7,8,3,5,8,10,]
 const datat=arr11.reverse()
console.log(datat);





