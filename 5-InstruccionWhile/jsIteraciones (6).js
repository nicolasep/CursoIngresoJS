function mostrar()
{
///*
	var contador=0;
	var acumulador=0;
	var numero=0;
while(contador<5){
	
	acumulador=prompt("ingrese numero");
	acumulador=parseInt(acumulador);
	
	

	while(isNaN(acumulador)==true){

		acumulador=prompt("ERROR, ingrese numero");
	    acumulador=parseInt(acumulador);
	}
	contador++;
	numero=numero+acumulador;

}
//while(isNaN(acumulador)==true|| acumulador<0||acumulador>10)
/*
if(numero<0){
	//negativo
}
else
{
	if(numero>0)
	{
		//positivo
	}
	else
	{

	}
}
*/

document.getElementById('suma').value=numero;
document.getElementById('promedio').value=numero/contador;
/*
//maximo y minimo
contador=contador+1;
if(contador==1)
{
max=numero;
min=numero;
}
else
{
	if(numero<min)
	{
		min=numero;
	}
	if(numero>max)
	{
		max=numero;
	}
}
*/

}//FIN DE LA FUNCIÓN


/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/