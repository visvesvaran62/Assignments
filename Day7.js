// ✅ Task 1 – Destructuring + Default Params + Template Literal
const createProfile=(user)=>{
    const {name,age,role= "user"}=user
    return (`my name ${name}  im working in role of ${role}`)
}
const person={name:"vishva",age:20}
console.log(createProfile(person))

// Task 2 – Spread + Rest + Arrow + Reduce

const calculateTotal=(discount,...price)=>{
    let total=price.reduce((sum,price)=>sum+price,0)
    let finalAmount=total-(total*discount/100);
    return finalAmount
}
console.log(calculateTotal(10,100,200,300))

//  Task 3 – Enhanced Object + Computed Property
 const newuser=(key,value)=>({
    [key]:value,
    display(){
        return`${key}:${this[key]}`
    }
 })
newuser()
const createUser=newuser('user',"admin")
console.log(createUser);
console.log(createUser.display());

//  Task 4 – Array Methods + Optional Chaining + Nullish

const students = [
  { name: "A", marks: 80 },
  { name: "B" },
  { name: "C", marks: 60 }
];

const result = students.map(
  ({ name, marks }) => `${name} scored ${marks ?? 0}`
);

console.log(result);

