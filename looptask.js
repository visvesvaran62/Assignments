// day-1 loop task

let arr1=[1,2,3,4,5]
for(let i=0;i<arr1.length;i++){
    console.log("the numbers are:",arr1[i]);   
}
// 
let num=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<num.length;i++){
    if(num[i]% 2===0){
     console.log("even number :",num[i]);
    }
}
for(let i=1;i<=5;i++){

}



const outer = ()=>{

  let count = 0;

  return ()=>{
    count++

    return count

  }


}


const data = outer()


// console.log(data());
// console.log(data());
// // console.log(data());

count = 12

console.log(count);