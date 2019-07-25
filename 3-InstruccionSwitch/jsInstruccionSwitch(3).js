function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
switch (mesDelAño){
     
     case "Febrero": {
         mensaje=" Este mes no tiene más de 29 días.";
         break;
     }
     default: {
         mensaje="Este mes tiene 30 o más días";
         break;
     }

alert(mensaje);
}
	
	/*al seleccionar un mes informar. 
si es Febrero: " Este mes no tiene más de 29 días." 
si NO es Febrero: "Este mes tiene 30 o más días"*/


}//FIN DE LA FUNCIÓN