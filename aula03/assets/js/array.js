var arr =[1,2,3,4,5];
arr[1]="Ana";
arr[2]="Felismina";
arr[3]="Janeth";
arr[4]="Mira";
arr[5]="Antónia";

console.log(arr[1] + " " + arr[2] + " " + arr [3] + " " + arr[4] + " " + arr[5]);

var arr2 =[1,2,3,4,5];
console.log(" Os números do Arrays são : " + arr2);

var elemento1=arr2.shift();
var elemento2=arr2.pop();
console.log("O primeiro e o último número entre esses : " + arr2 + " é : " +  elemento1 + " e "+ elemento2);







/*
let numero1=parseInt(prompt("Insira o primeiro número"));
let numero2=parseInt(prompt("Insira o segundo número"));
let numero3=parseInt(prompt("Insira o terceiro número"));

var arr3={numero1,numero2,numero3};
arr3.numero1;
arr3.numero2;
arr3.numero3;
let soma=(arr3.numero1+arr3.numero2+arr3.numero3);
console.log("A soma entre : " + numero1 + " , " + numero2 + " e " + numero3 + " é " + soma);
*/

console.log("               ");
console.log("               ");
console.log("               ");


var arr4=[11,34,14,15,10,16,17,20,12,11];
let media=(arr4[0]+arr4[1]+arr4[2]+arr4[3]+arr4[4]+arr4[5]+arr4[6]+arr4[7]+arr4[8]+arr4[9])/10;
console.log("A media de " + arr4  +" "  +   " é  "  +  media);


console.log("               ");
console.log("               ");


/*Exércicio 5 ???????????????????
var arr5=["ana","beu","sara","ima","mara"];
console.log(arr5[0]);
console.log(arr5[1]);
console.log(arr5[2]);
console.log(arr5[3]);
console.log(arr5[4]);



console.log("   <<<<<<<<<<<<<<<<<<<<            ");
console.log("               ");


/* Exercicio 6????????????????????
let cont1=0;
var arr6 = [2,3,4,6,78,19,29,40,74];
for (let v=0;  v<=arr6.length;v++){

if(arr6%2==0){
    cont1++;
}
}
*/


/* Exercicio 6????????????????????

let alunos= {nomes:"",notas:0};
alunos.nomes='Ana',"Juliana","Alberto","José";
alunos.notas=11,8,20,7;

console.log(alunos.notas[]);
*/


var input = document.getElementById("text");
input.value="Email";


