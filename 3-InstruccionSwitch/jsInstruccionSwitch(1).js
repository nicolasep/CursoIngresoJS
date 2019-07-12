function mostrar()
{
//tomo la edad  
var mes_del_año = document.getElementById('mes').value;

switch(mes_del_año){
   
    case "Enero": {
         alert("que comiences bien el año!!!.");
         break;
    }
    case "Marzo": {
        alert("a clases!!!.");
        break;
    }
    case "Julio": {
        alert("se vienen las vacaciones!!!.");
        break;
    }
    case "Diciembre": {
        alert("Felices fiesta!!!.");
        break;
    }
}
/*al seleccionar un mes informar. 
si es Enero: "que comiences bien el año!!!." 
si es Marzo: "a clases!!!." 
si es Julio: "se vienen las vacaciones!!!." 
si es Diciembre: "Felices fiesta!!!."*/


}//FIN DE LA FUNCIÓN