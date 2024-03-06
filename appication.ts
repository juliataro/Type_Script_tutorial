// // Variable Declaration

// // 1. Explicitly declare
// let num2: number = 11;
// // 2. Infer type declaration
// let num1 = 10;
// let email = "julia.taro@gmail.com";

////////////////////////////////////////////////////////////////

// // Basic types

// let isShopOpen: boolean = false;
// let isGoing = true;
// console.log(isGoing);

// // Array
// let myArray = [1, 2, 3, 4, 5, 6];
// console.log(myArray);

// // Object
// let obj: { key: string; value: number } = {
//   key: "name",
//   value: 12,
// };
// console.log(obj);

////////////////////////////////////////////////////////////////

// // Functions
// function add(x: number, y: number) {
//   return x + y;
// }
// let result: number = add(10, 20);
// console.log("The total is", result);

// // Create a interface of the object
// let person = { name: "John", age: 21, email: "midagi.taro@gmail.com" };
// // Interface of an object
// console.log("This is person: ", person.name);
// console.log(person.age);
// console.log(person.email);

////////////////////////////////////////////////////////////////

// // Create interface
// interface Person {
//   name: string;
//   age: number;
// }

// // functions for the interface
// let greet = (person: Person) => {
//   return `Hello ${person.name}, nice to meet you!`;
// };

// let user: Person = { name: "John", age: 21 };

// let user2: Person = { name: "Emily", age: 23 };

// console.log(greet(user));
// console.log(greet(user2));

////////////////////////////////////////////////////////////////

// Classes

// class Animal {
//   constructor(public name: string, public age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   makeSound(): string {
//     return `This is the generic sound of ${this.name}`;
//   }
// }

// // extended a class
// class Dog extends Animal {
//   makeSound(): string {
//     return `This is my dog ${this.name} and age is ${this.age} and he makes a sound Woof! Woof!`;
//   }
// }
// // extended a class
// class Cat extends Animal {
//   makeSound(): string {
//     return `This is my cat ${this.name} he makes a sound Meow! Meow!`;
//   }
// }

// // Define an interface
// let myDog = new Dog("Rex", 2);
// console.log(myDog.makeSound());

// let myCat = new Cat("Luna", 3);
// console.log(myCat.makeSound());

////////////////////////////////////////////////////////////////
// console.log("Hello TypeScript!");
// // Numeric Enums: start from 0, every time is's increasing by 1
// enum DayOfWeek {
//   Monday, // 0
//   Tuesday, // 1
//   Wednesday, // 2
//   Thursday, // 3
//   Friday, // 4
//   Saturday, //
//   Sunday, // 6
// }

// console.log(DayOfWeek.Monday);
// console.log(DayOfWeek.Tuesday);
// console.log("Wednesday is", DayOfWeek.Wednesday + 1, "-d day of the week");
// // 2. String Enum:

// enum FileType {
//   PDF = "PDF",
//   DOC = "DOC",
//   DOCX = "DOCX",
//   PPT = "PPT",
//   PPTX = "PPTX",
// }

// console.log(FileType.PDF);

////////////////////////////////////////////////////////////////

// Generics: for reusable components of classes - there is no need to define types of args

// function identity<T>(arg: T): T {
//   return arg;
// }

// let output: string = identity<string>("Hello !");
// let output2: number = identity(12);

// console.log(output);
// console.log(output2);

// // Modules:

// function add(x: number, y: number): number {
//   return x + y;
// }
// console.log(add(10, 20));
