let person={
    name: "Harshit",
    age: 18,
    city: "New York"
};
console.log(person.name);
console.log(person.age);
console.log(person.city);

let numbers = [1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

let mixedArray = [1,"Hello",true,{name:"Alice"},[1,2,3]];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);

let newarray  = [1,2,3,4,5];
let squaredArray = newarray.map(num => num*num);
console.log(squaredArray);

let evenNumbers = [1,2,3,4,5];
let filteredEvenNumbers = evenNumbers.
filter(num  => num % 2 === 0);
console.log(filteredEvenNumbers);

let sum = [1,2,3,4,5];
let total = 
sum.reduce((accumulator, currentValue)
=> accumulator + currentValue, 0);
console.log(total);