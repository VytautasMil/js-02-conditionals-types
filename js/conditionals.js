console.log('conditionals');

/* 
if (salyga) {
  vygdom jei true
} else {
  vygdom jei false
}

*/

let isUserAdmin = false;

if (isUserAdmin === true) {
  console.log('useris yra adminas');
} else {
  console.log('useris neras adminas');
}

// sukuriam kintamji amzius
let amzius = -45;

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
if (amzius > 0 && amzius < 18) {
  console.log('vaikas');
} else if (amzius < 70) {
  console.log('suauges');
} else if (amzius < 150) {
  console.log('senjoras');
} else {
  console.log('kazkas negerai su amzium', amzius);
}