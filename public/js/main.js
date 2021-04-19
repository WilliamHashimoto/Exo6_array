//1
let monTab = ['pomme', 'fraise', 'melon', 'citron'];
monTab.pop();
console.log(monTab);
monTab.shift();
console.log(monTab);
monTab.push("pasteque");
console.log(monTab);
monTab.unshift("orange");
console.log(monTab);
let x = monTab[1].toUpperCase();
monTab.splice(1,1,x);
console.log(monTab);
monTab.reverse();
console.log(monTab);

//2
let chiffres = [4, 5, 2, 1, 3];
chiffres.sort();
console.log(chiffres);
chiffres = chiffres.join("-");
console.log(chiffres);
chiffres = chiffres.split("-");
console.log(chiffres);

//3
let y = []
y.push(1,2,3,4,5,6,7,8,9,10);
console.log(y);
console.log(y.length);
console.log(y.indexOf(1));
console.log(y.indexOf(2));
console.log(y.indexOf(3));
console.log(y.indexOf(4));
console.log(y.indexOf(5));
console.log(y.indexOf(6));
console.log(y.indexOf(7));
console.log(y.indexOf(8));
console.log(y.indexOf(9));
console.log(y.indexOf(10));

y.splice(3,1);