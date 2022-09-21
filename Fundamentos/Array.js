const valores = [7,8.2,9.9];

valores[3] = 12.5;
delete valores[1];
console.log(valores[0], valores[2]);
console.log(valores);
console.log(valores.length);