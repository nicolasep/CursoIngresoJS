function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="no";
	var pregunta;
	

while(pregunta!=respuesta){
numero=prompt("ingrese numero");
numero=parseInt(numero);
   while(isNaN(numero)==true){
	numero=prompt("incorrecto, ingrese numero");
	numero=parseInt(numero);
   }
   pregunta=prompt("quiere seguir ingresando, si o no");
	   while(pregunta!="no"&&pregunta!="si")
	   {
		 pregunta=prompt("opcion incorrecta, quiere seguir ingresando, si o no");
	   }

contador++;
acumulador=acumulador+numero;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN