function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
switch (mesDelAño){
    
    case "Diciembre":
    case "Enero":
    case "Marzo":
    case "Mayo":           
    case "Julio":
    case "Agosto":
    case "Octubre":

         mensaje="este mes tiene 31 días.";
         break;
     
    case "Febrero": 
         mensaje="este mes tiene 28 días.";
         break;
     
      
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre": 
         mensaje="este mes tiene 30 días.";
         break;      
}
alert(mensaje);	
	
/*al seleccionar un mes informar. 
si "este mes tiene 28 días." 
si "este mes tiene 30 días." 
si "este mes tiene 31 días."*/


}//FIN DE LA FUNCIÓN