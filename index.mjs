import { StudentDetails, CarDetails } from "./sample.mjs";
const studentDetails = new StudentDetails("Ram", 21);
const carDetails = new CarDetails("Audi", 4000000);

console.log(studentDetails);
console.log(studentDetails.name);
console.log(studentDetails.age);

console.log(carDetails);
console.log(carDetails.brand);
console.log(carDetails.price);
