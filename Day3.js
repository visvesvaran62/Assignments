const fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("first fruit:",fruits[0]);
console.log("last fruit:",fruits[fruits.length-1]);
console.log("Total fruit:",fruits.length);


const colors = ["Red", "Green", "Blue"];
console.log(colors);


colors[1]="yellow"
console.log("updated colors",colors);


const numbers = [10, 20, 30, 40];
for(let i=0;i<numbers.length;i++){
    console.log("numbers :",numbers[i]);
}

for(let i=0;i<numbers.length;i++){
    console.log("squre num :",numbers[i]*numbers[i]);   
}


// Array of object


const users = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Ravi" }
];
console.log(users[0].name)
console.log(users[1].id);


// OBJECT ACCESSING TASKS


const student = {
  name: "Arun",
  age: 22,
  course: "MERN"
};
console.log(student.name);
console.log(student.course);

const car = {
  brand: "BMW",
  year: 2020
};
car.year=2024;
console.log(car)
car.colour="black"
console.log(car);

const employee = {
  name: "Ravi",
  address: {
    city: "Chennai",
    pincode: 600001
  }
};
console.log(employee.address.city);
console.log(employee.address.pincode);


const students = [
  { name: "Arun", marks: 80 },
  { name: "Ravi", marks: 40 },
  { name: "Kumar", marks: 90 }
];

for (let i = 0; i < students.length; i++) {
  if (students[i].marks > 50) {
    console.log(students[i].name);
  }
}









