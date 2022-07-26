function imprimeTexto(texto){
    console.log(texto);
}

imprimeTexto("Testando função");
imprimeTexto("Testando função outra vez");

let numero1;
function soma(numero1, numero2){
    return numero1 + numero2;
   }
numero1 = 3;
imprimeTexto(soma(2, 5));

function texto (nome, idade){
return `Meu nome é ${nome} e tenho ${idade} anos`;

}

imprimeTexto(texto("Daniel", 36));

imprimeTexto(numero1);