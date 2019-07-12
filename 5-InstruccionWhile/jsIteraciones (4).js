function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	//numero= parseInt(numero);
	var numeros;
	var bien=" Correcto";
	while (!(numero <=9 && numero >=0)){
		var numero = prompt("numero incorrecto, ingrese un número entre 0 y 10.");
        //numero=parseInt(numero);
	}
	document.getElementById("Numero").value=numero+bien;

}//FIN DE LA FUNCIÓN