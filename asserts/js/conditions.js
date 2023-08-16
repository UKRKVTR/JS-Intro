let n = 0
let rez = 0

while (n <=10){
++n
rez = n * 3
console.log(n, '*3 =', res)
}

for (let i = 1; i <= 10; i++) {
  console.log('Таблиця множення для числа', i,':')

  for (let j = 1; j <= 10; j++) {
      const res = i * j;
      console.log(i, '*', j, '=', res);
  }
  
}

let a = +prompt('First number'); 
let b = +prompt('Second number');  
let x = 0; 
while(a < b){ 
  ++a 
  if(a % 2 == 0 && a > 0 && b > 0){ 
    console.log(a) 
      x+=a 
  } 
 
}  
  console.log(x)