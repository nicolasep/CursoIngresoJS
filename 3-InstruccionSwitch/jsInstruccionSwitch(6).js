function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
laHora=parseInt(laHora);

   switch(laHora){
        case 1: {
            alert("Es de noche.");
            break;
        }
        case 2: {
            alert("Es de noche.");
            break;
        }
        case 3: {
            alert("Es de noche.");
            break;
        }
        case 4: {
            alert("Es de noche.");
            break;
        }
        case 5: {
            alert("Es de noche.");
            break;
        }
        case 6: {
            alert("Es de noche.");
            break;
        }
        case 7: {
           alert("Es de mañana.");
           break;
        }
        case 8: {
           alert("Es de mañana.");
           break;
        }
        case 9: {
           alert("Es de mañana.");
           break;
        }
        case 10: {
           alert("Es de mañana.");
           break;
        }
        case 11: {
           alert("Es de mañana.");
           break;
        }
        case 12: {
           alert("Es de tarde.");
           break;
        }
        case 13: {
           alert("Es de tarde.");
           break;
        }
        case 14: {
           alert("Es de tarde.");
           break;
        }
        case 15: {
           alert("Es de tarde.");
           break;
        }
        case 16: {
           alert("Es de tarde.");
           break;
        }
        case 17: {
           alert("Es de tarde.");
           break;
        }
        case 18: {
           alert("Es de tarde.");
           break;
        }
        case 19: {
           alert("Es de tarde.");
           break;
        }
        case 20: {
           alert("Es de noche.");
           break;
        }
        case 21: {
           alert("Es de noche.");
           break;
        }
        case 22: {
           alert("Es de noche.");
           break;
        }
        case 23: {
           alert("Es de noche.");
           break;
        }
        case 24: {
           alert("Es de noche.");
           break;
        }
        default: {
           alert("La hora no existe.");
           break;
        }
       

   }




}//FIN DE LA FUNCIÓN
/*Al ingresar una hora, informar: 
si está entre las 7 y las 11 : "Es de mañana.". 
si está entre las 12 y las 19 : "Es de tarde.". 
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.". 
si NO está entre las 0 y las 24 : "la hora no existe.".*/