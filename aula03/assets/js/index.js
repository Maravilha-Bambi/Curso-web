var a = "Ana";

console.log(a);
document.write(a);
for(var b=0 ; b<10 ; b++ ){
document.writeln(b + " " + a)    
}

let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}

let idade1 = 16;

if (idade1 >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

let nota = 97;

if (nota >= 90) {
  console.log("Aprovado com excelência!");
} else if (nota >= 70) {
  console.log("Aprovado.");
} else {
  console.log("Reprovado.");
}


let idade2 =100 ;
if (idade2 <=16  && idade2>=10){
    console.log(" As pessoas vao para a primeira sala");
}

else if(idade2<=27 && idade2<=18 ){
     console.log(" As pessoas vao para a segunda sala");
}

else if( idade2>=0  && idade2<=9){
     console.log(" As pessoas vao para a terceira sala");
}
else {
    console.log("Nenhuma sala encontrada");
}

 let b = prompt("Digite um valor");
 a=b%6;
 if (b%6 == 0){
    console.log("O "+ a + "é divisivel por 6");
 }
 else{
console.log("O "+ a + " não é divisivel por 6")
 }
 




let dia = 3;

switch (dia) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  default:
    console.log("Dia inválido");
}

