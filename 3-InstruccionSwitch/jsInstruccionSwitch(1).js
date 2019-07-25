function mostrar()
{
//tomo la edad  
var mes= document.getElementById('mes').value;
var mensaje;
switch(mes){
   
    case "Enero": 
         mensaje="que comiences bien el año!!!.";
         break;
    
    case "Marzo": 
         mensaje="a clases!!!.";
         break;
    
    case "Julio": 
         mensaje="se vienen las vacaciones!!!.";
         break;
    
    case "Diciembre": 
         mensaje="Felices fiesta!!!.";
         break;
    
}
alert(mensaje);

/*al seleccionar un mes informar. 
si es Enero: "que comiences bien el año!!!." 
si es Marzo: "a clases!!!." 
si es Julio: "se vienen las vacaciones!!!." 
si es Diciembre: "Felices fiesta!!!."*/


}//FIN DE LA FUNCIÓN