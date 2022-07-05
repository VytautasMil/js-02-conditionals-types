console.log('conditionals');

/* 
if (salyga) {
  vygdom jei salyga === true
} else {
  vygdom jei salyga === false
}

*/

let isUserAdmin = false;

if (isUserAdmin === true) {
  console.log('useris yra adminas');
} else {
  console.log('useris neras adminas');
}

// sukuriam kintamji amzius
let amzius;

// priklausomai nuo amziau ispausdinam sugauges arba nesuauges
// if (amzius > 17) {
//   console.log('suauges');
// } else {
//   console.log('nesuauges');
// }
// gaunam amziu i prompt ir paziurim kad veiktu

// jei amziu yra nuo 0 iki 17 - vaikas
// jei amziu yra nuo 18 iki 70 - suauges
// jei amziu yra nuo 70 iki 150 - senjoras

// && - AndAnd'as logine sandauga
// || - Or'as logine suma

if (amzius < 0 || amzius > 150) {
  console.log('kazkas negerai su amzium', amzius);
} else if (amzius > 0 && amzius <= 18) {
  console.log('vaikas');
} else if (amzius < 70) {
  console.log('suauges');
} else if (amzius < 150) {
  console.log('senjoras');
} else {
  console.log('kazkas negerai su amzium', amzius);
}

let age = 40;

if (age > 35) {
  // some action
  if (age < 70) {
    console.log(`${age} yra daugiau uz 35 ir maziau uz 70`);
  }
}