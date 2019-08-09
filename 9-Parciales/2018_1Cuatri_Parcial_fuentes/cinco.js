function mostrar()
{

var planeta=prompt("ingrese un platena");
/* solo con switch

switch (planeta){
    case "tierra":
        alert("aca vivimos");
        break;
    
    case "jupiter":
    case "urano":
    case "neptuno":
    case "pluton":
    case "saturno":
    case "marte":
        alert("aca hace mas frio");
        break;

    case "venus":
    case "mercurio":
        alert("aca hace mas calor");
        break;
    
    default:
        alert("no es un planeta valido");
        break;
    
}
alert(resultado);
*/

 //solo con if
var resultado;

if(planeta=="tierra"){
   resultado="aca vivimos";
}else{
    if(planeta=="venus"||planeta=="mercurio"){
        resultado="aca hace mas calor";
    }
    else{
        if((planeta=="urano")||(planeta=="neptuno")||(planeta=="pluton")||(planeta=="saturno")||(planeta=="marte")||(planeta=="jupiter")){
            resultado="aca hace mas frio";
        }
        else{
            resultado="no es un planeta valido";
        }  
    }
}
alert(resultado);




}


/*Bienvenidos (SWITCH). 
pedir el ingreso de un planeta del sistema solar 
Si es la tierra mostrar "acá vivimos". 
Si está más cerca del sol, "acá hace más calor". 
Si está más lejos del sol, "acá hace más frio". 
Si no es un planeta valido informarlo. 
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).*/