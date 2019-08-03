function mostrar()
{

var letra;
var numero;
var contador=0;
var acumulador;
var contadorPares=0;
var contadorImpares=0;
var contadorCeros=0;
var negativos=0;
var positivos=0;
var contadorPositivos=0;
var max;
var letraMax;
var min;
var letraMin;
var respuesta;

do
{
    letra=prompt("Ingrese una letra");
    while(isNaN(letra)==false)
    {
        letra=prompt("No es una letra correcta, Ingrese una letra");
    }
    numero=prompt("Ingrese un numero entre -100 y 100");
    numero=parseInt(numero);

    while(isNaN(numero)|| numero < -100 || numero > 100)
    {
        numero=prompt("Numero incorrecto, por favor reingrese");
        nunero=parseInt(numero);
    }
    if(contador==0)
    {
        max=numero;
        letraMax=letra;
        min=numero;
        letraMin=letra;
        contador++;
    }
    if(numero < min)
    {
        min=numero;
        letraMin=letra;
    }
    else if(numero > max)
    {
        max=numero;
        letraMax=letra;
    }
    
    if (numero==0)
    {
        contadorCeros++;
    }
    else
    {   
        if (numero%2==0)
        {      
        contadorPares++;
        }
        else
        {
        contadorImpares++;
        }
        if (numero > 1)
        {
        positivos+=numero;
        contadorPositivos++;
        }
        else
        {   
        negativos+=numero;
        }
    }
    

    respuesta=confirm("¿Desea seguir ingrezando?");

}while(respuesta);



document.write("La cantidad de números pares es: "+ contadorPares+ "<br>");
document.write("La cantidad de números impares es: "+ contadorImpares+ "<br>");
document.write("La cantidad de ceros es: "+ contadorCeros+ "<br>");
document.write("El promedio de todos los números positivos ingresados es: "+ (positivos/contadorPositivos)+ "<br>");
document.write("La suma de todos los números negativos es: "+ negativos + "<br>");
document.write("El número maximo es: "+max +" y la letra del numero máximo es: "+letraMax +  " el numero mínimo es: "
+ min +" y la letra del numero minimo es: "+ letraMin + "<br>");

}





/*Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un 
número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso 
por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7)*/