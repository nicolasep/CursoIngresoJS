function mostrar()
{

var numero1=prompt(" Ingrese un numero");
var numero2=prompt("Ingrese un segundo numero");
var resultado;

if(numero1==numero2)
{
resultado=numero1+numero2;
}
else
{   
        numero1=parseInt(numero1);
        numero2=parseInt(numero2);
        if(numero1 > numero2)
        {
            resultado=numero1/numero2;
        }
        else
        {
            resultado=numero1+numero2;
        }
        

}
if(resultado<50)
{
    alert("El resultado es "+ resultado + " Y es menor a 50");
}
else
{
    alert(resultado);
}

}
/*(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50"*/