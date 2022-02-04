const names = ['hank', 'jane', 'betty'];

// Arrow functions are anonymous
const helloPeople = names.map(name => `Hello ${name}`);
console.log(names);
console.log(helloPeople);

// You can name them by storing in a variable
const sayHello = (person) => `Oh hi ${person}`;
console.log(sayHello('Joe'));

