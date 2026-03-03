// Reverse a string (without built-in)
const reverse=(user)=>{
    let value=""
    for(let i=user.length-1;i>=0;i--){
        value+=user[i]
    }
    return value
}
console.log(reverse("vishva"))

// Reverse a number

const number=(rev)=>{
    let numvalue=[]
    for(i=rev.length-1;i>=0;i--){
        numvalue+=rev[i]
    }
return numvalue
}
console.log(number([1,2,3,4,5]));

// Check palindrome (string & number)
const palindrome=(str)=>{
    const val=String(str).toLowerCase();
    let reversed=''
    for(let i=val.length-1;i>=0;i--){
        reversed+=str[i]
    }
return reversed === val
}
console.log(palindrome(1,2,3,4,5));
console.log(palindrome("madam"));

// Find factorial
const fact=(num)=>{
    let value=1
    for(let i=1;i<=num;i++){
        value*=i

    }
return value
}
console.log(fact(5));

// Check prime number

// 
const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

console.log(isPrime(7));  
console.log(isPrime(10)); 

// fibinossis
const fibonacci = (n) => {
  const series = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    series.push(a);
    [a, b] = [b, a + b];
  }

  return series;
};
// pattern

const star = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = ""; 

    for (let j = 1; j <= n; j++) {
      row += "x ";
    }
    return console.log(row);
   }


};

star(5);

// Rectangle
const reactangle=(n)=>{
  for(let i=0;i<=n;i++){
    let row=""
    for(let j=0;j<i;j++){
      row+=" *"
    }
    console.log(row);
  }
}
reactangle(5)

// left triangle

// const right = (n) => {
//   for (let i = 1; i <= n; i++) {
//     let row = "";

  
//     for (let j = 0; j < n - i; j++) {
//       row += "  ";
//     }

//     for (let k = 0; k < i; k++) {
//       row += "x ";
//     }

//     console.log(row);
//   }
// };

// right(5);

const pyramid = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
  for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += "x ";
    }

    console.log(row);
  }
};

pyramid(5);