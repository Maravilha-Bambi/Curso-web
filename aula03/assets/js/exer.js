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


let pess=parseInt(prompt("Digite a tua idade"));
if(pess<=18){
    document.writeln("Es menor de idade");
}
else{
    document.writeln("Es maior de idade!");
}