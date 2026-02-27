const Calculuate=(price,qty)=>{
    const p=Number(price)
    const q=Number(qty)
    return p*q;

}
console.log(Calculuate("300","10"))





// console.log("10"==10);
// console.log("10"===10);
// console.log([]==0);
// console.log([]=== 0);
// console.log(true==1);
// console.log(true===1)
// console.log(null==undefined);
// console.log(null===undefined);



const Checkvalues=(value)=>{
    const result=Boolean(value)
    if(result===true){
        return "truthy"
    }
    else{
        return "falsy"
    }

}
console.log(Checkvalues(10));
console.log(Checkvalues(""));
console.log(Checkvalues("str"));
console.log(Checkvalues(0));
console.log(Checkvalues(null));
console.log(Checkvalues(undefined));







