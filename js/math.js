// JS Math mechanizmas padeda su matematika
let num1 = -11.45249989542;

console.log(Math.PI);
console.log(Math.sqrt(9));

// apvalinam
let round = Math.round(num1);
console.log('round ===', round);
// lubos
let ceil = Math.ceil(num1);
console.log('ceil ===', ceil);
// grindys
let floor = Math.floor(num1);
console.log('floor ===', floor);
// sveikoji dalis
let trunc = Math.trunc(num1);
console.log('trunc ===', trunc);

// pakelti kazkelintuoju laipsniu
console.log('2 ** 3 ===', 2 ** 3);
console.log('Math.pow(2, 3) ===', Math.pow(2, 3));

// minimali reikme
console.log('Math.min(0, 150, 30, 20, -8, -200) ===', Math.min(0, 150, 30, 20, -8, -200));

// maximali reikme
console.log('Math.max(0, 150, 30, 20, -8, -200) ===', Math.max(0, 150, 30, 20, -8, -200));

// pseudo random skaicius nuo 0 iki 1. (1 niekada nebus)
console.log('Math.random() ===', Math.random());
console.log('Math.random() ===', Math.random());
console.log('Math.random() ===', Math.random());

// to gerate a randome rounded number between 1 to 10;
let theRandomNumber = Math.floor(Math.random() * 10) + 1;
console.log('theRandomNumber ===', theRandomNumber);

// iki skaiciau po kablelio

let kaina = 45.4517;
let apvalintaKaina = `${kaina.toFixed(2)} eur`;
console.log('kaina ===', kaina);
console.log('apvalintaKaina ===', apvalintaKaina);
console.log('kaina.toPrecision(2) ===', kaina.toPrecision(4));