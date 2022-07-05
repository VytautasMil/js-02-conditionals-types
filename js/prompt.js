console.log('prompt.js is loaded');

// apskritimo plotas

let r = 10;
let pi = 3.14;
//pi*(r*r)

let plotas = pi * (r * r);

let resultString = 'Jei spindulys yra ' + r + ' tai apskritimo plotas yra ' + plotas + '.';
console.log('resultString ===', resultString);

// ivedam kita spinduli

// r = prompt('koks jusu apskritimo spindulys?');
pi = 3.14;
plotas = pi * (r * r);
resultString = `Jei spindulys yra ${r} tai apskritimo plotas yra ${plotas}.`;

console.log('resultString ===', resultString);