let username = 'James';
let age = 28;
let town = 'Finland';

// Student James is 22 years old and he lives in Minsk.
let sentence =
  'Student ' + username + ' is ' + age + ' years old and he lives in ' + town + '.';
// ES6 Template Literals
sentence = `Student ${username} is ${age} years old and he lives in ${town}.`;
console.log('sentence ===', sentence);

/*
cia yra pirma eilute.
cia yra antra. 
paskutinte eilute.
*/

let str = '';
str += 'cia yra pirma eilute.';
str += 'cia yra antra.';
str += 'paskutinte eilute.';

str = `
cia yra pirma eilute.
cia yra antra. 
paskutinte eilute.
`;

console.log('str ===', str);

// suzinoti kiek metu bus usernamui po 5 metu
// template literals galimos matematines operacijos
let after5years = `${username} will be ${age + 5} in 5 years`;
console.log('after5years ===', after5years);

// gauti is vartotojo amziaus pokyti ir atspausdinti kiek bus meto po to pokycio

let pokytis = prompt('po kiek metu?');
console.log(`pokytis tipas yra: ${typeof pokytis}`)
let pokytisNumber = Number(pokytis);
after5years = `${username} will be ${age + pokytisNumber} in ${pokytisNumber} years`;
console.log('after5years ===', after5years);
