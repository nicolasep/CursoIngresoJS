function mostrar()
{

var hora=document.getElementById("laHora").value;
//hora=parseInt(hora);
var resultado;
switch(hora){
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
        resultado="es de mañana";
        break;
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
    case "18":
    case "19":
        resultado="es de de tade";
        break;
    case "20":
    case "21":
    case "22":
    case "23":
    case "24":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
        resultado="es de noche";
        if(hora>=20 && hora<=24){
           resultado+=" a dormir";
        }
        break;
    
    default:
    resultado="la hora no es valida";
        break;
        
}

 alert(resultado);

//var contador;

/*var contador;
for (contador=0;contador <5;contador++)
{
    
    console.info("in" , contador);
}
console.info("out", contador);*/
}

/*
Bienvenidos (SWITCH +IF). 
Se ingresa una hora. 
Si está entre las 6 y las 11 mostrar:"es de mañana", 
si es desde las 12 a las 19: "es de tarde", 
de lo contrario informar que es de noche. 
Informar si la hora no es válida. 
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir". 

Aclaración: hacer un switch y dentro toda la lógica.*/