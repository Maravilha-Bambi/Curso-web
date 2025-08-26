let a =12;
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