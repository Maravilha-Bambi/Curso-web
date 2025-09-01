/*let a =12;
console.log(a);
for (var b=0; b<10; b++){
    console.log(b)
}
for(var b=0 ; b<10 ; b++ ){
//document.writeln(b + " " + a)    
}

var c=false; d=0;
while (c==false){
   console.log(c+ "    bom dia"); 
d++;
if(d==10){
    console.log("true");
    c=true;
}
   
}


var e=false ; f=0;
do{
    console.log(e+ "    bom dia"); 
f++;
if(f==10){
    console.log("true");
    e=true;
}
}while (e==false);


function mara(a, b){
 return a+b;
}

document.writeln(mara(5,7));
*/

let lista = [12,11,15,7];



let pessoa = {nome:"",idade:0,altura:0,peso:0};
pessoa.nome="Maravilha";
pessoa.idade=20;
pessoa.altura=1.56;
pessoa.peso=56;
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.altura);
console.log(pessoa.peso);

console.log("Ola  sou a " + pessoa.nome + " estou com "+ pessoa.idade + " meço "+ pessoa.altura + " de altura e " + pessoa.peso + " de peso ");

let frutas=["manga","pera","laranja"];

for(var a=0;a<frutas.length;a++){
console.log(frutas[a]);
}



let frutas2=["Banana","Uva","Loengo"];

for(var b=0;b<frutas2.length;b++){
   
console.log(b+1+ "-"+frutas2[b]);
}

for (const mercado of frutas) {
    console.log(mercado)
}
/*

let pess=parseInt(prompt("Digite a tua idade"));
if(pess<=18){
    document.writeln("Es menor de idade");
}
else{
    document.writeln("Es maior de idade!");
}*/

/*
let nota=parseInt(prompt("Digite a sua nota"));
if(nota>=10){
    console.log("Aprovadovo");
} 
else{
    console.log("Reprovado");
}
    */

/*
let numero=parseInt(prompt("Digite um numero"));
if(numero % 2 == 0 ){
    console.log("O número é par");
}else
{
    console.log("O número é impar");
}
    */
 

/*
let num=parseInt(prompt("Digite um número da semana"));
switch (num){
    case 1:
    console.log("Segundaa feira");
    break;
    case 2:
    console.log("Terça feira");
    break;
    case 3:
    console.log("Quarta feira");
    break;
    case 4:
    console.log("Quinta feira");
    break;
    case 5:
    console.log("Sexta feira");
    break;
    case 6:
    console.log("Sabádo ");
    break;
    case 7:
    console.log("Domingo ");
    break;
    default:
        console.log("Não tem um dia de semana");
    
}*/

/*
for (var t=0;t<=10;t+=+){
    console.log(t);
}*/
/*
var t=0;
do {
    console.log(t);
t++
}while(t<=10);
*/

/*
var t=0;
while(t<=9){
    t++;
     console.log(t);
}*/

/*
let n=parseInt(prompt("Insira o número desejado"));
for(var j=0;j<=9;j++){
    console.log(n+"*"+j+" = "+j*n);
}*/

/*
let n=parseInt(prompt("Insira o número desejado"));
for(var j=1;j<=n;j++){
    console.log(n + " + " + j + " = " + (j+n));
}*/

/*

let n=parseInt(prompt("Insira o número desejado"));
var cont=0;
for(let m=0;m<=n;m++){
    if(n%m ==0){
       cont++;
    }
}

if(cont==2){
    console.log("O número é primo");
}else{
     console.log("O número não primo");
}
*/


var rec=document.getElementById("mara");
console.log(rec);

rec.innerHTML="<p>";
rec.innerText="Ola mundo";
rec.textContent="Ola!!"


var input=document.getElementById("txt");

var input2=document.getElementById("txt2");

var botao=document.getElementById("btn");

function soma(){
  var somar=parseInt(input.value )  +  parseInt(input2.value);

  console.log(somar);
    console.log(pessoa.nome+pessoa.idade);
}


//Outra forma de criar eventos.
botao.addEventListener('click',
function mm(){
    alert("O botão foi clicado");
}

)