let n = 0;
let rez = 0;

while (n <= 10) {
  ++n;
  rez = n * 3;
  console.log(n, "*3 =", rez);
}

let i = 0;
let res = 0;
while (i < 10) {
  ++i;
  console.log("Таблиця множення для числа", i, ":");
  let j = 0;
  while (j < 10) {
    ++j;
    res = i * j;
    console.log(i, "*", j, "=", res);
  }
}

let a = +prompt("First number");
let b = +prompt("Second number");
let x = 0;
while (a < b) {
  ++a;
  if (a % 2 == 0 && a > 0 && b > 0) {
    console.log(a);
    x += a;
  }
}
console.log(x);

let k = 1
let p = 0;
let s = 0;
let ser= 0;
while(a != 0){
    k = +prompt('')
    p+=k;
    s++;
}
console.log('Кількість: ',s-1)
console.log('Сумма: ',p)
console.log('Середнє: ',ser = p/s)