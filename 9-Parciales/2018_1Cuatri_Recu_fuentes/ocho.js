function mostrar()
{
var letra;
var numero;
var contador=0;
var numerosPares=0;
var numeroImpares=0;
var cantidadDeCeros=0;
var sumaNegativos;
var sumaPositivos;
var numeroMaximo;
var letraNumeroMaxmo;
var numeroMinimo;
var letraNumeroMinimo;

do
{
    letra=prompt("Ingrese una letra");
    while(isNaN(letra)==false)
    {
        letra=prompt("Letra invalida, ingrese una letra");
    }

    numero=prompt("Ingrese un numero entre -100 y 100");
    numero=parseInt(numero);
    while(isNaN(numero) || numero < -100 || numero > 100)
    {
        numero=prompt("Numero incorrecto, ingrese un numero entre -100 y 100");
        numero=parseInt(numero);
    }
    
       if(numero==0)
       {
            cantidadDeCeros++;
       }
            else if (numero%2==0)
            {
                numerosPares++;
            }
            else
            {
                numeroImpares++;
            }
        if(contador==0)
        {
            numeroMaximo=numero;
            numeroMinimo=numero;
            letraNumeroMaxmo=letra;
            letraNumeroMinimo=letra;

        }
        else
        {
            if(numero > 0)
            {
                sumaPositivos += numero;
            }
            else
            {
                sumaNegativos += numero;
            }
            if(numero > numeroMaximo)
            {
                numeroMaximo=numero;
                letraNumeroMaxmo=letra;
            }
            else
            {
                numeroMinimo=numero;
                letraNumeroMinimo=letra;
            }
        }

contador++;
respuesta=confirm("¿Desea seguir ingresando?");

}while(respuesta);

document.write("La cantidad de numero pares es "+ numerosPares + "<br>");
document.write("La cantidad de numero impares es "+ numeroImpares + "<br>");
document.write("La cantidad de ceros es "+ cantidadDeCeros + "<br>");
document.write("El promedio de todos los numero positivos es " (sumaPositivos/contador) + "<br>");
document.write("La suma de todos los numeros negativos es "+ sumaNegativos + "<br>");
document.write("El numero mayor es "+ numeroMaximo + " y la letra es "+ letraNumeroMaxmo + 
" y el numero minimo es "+ numeroMinimo + " y la letra es " + letraNumeroMinimo + "<br>");


}
/*Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un 
número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar 
el ingreso por document.write: 
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
( k , 7)
*/