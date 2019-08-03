function mostrar()

/*Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, el peso 
el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar 
al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.

Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )*/
{
var marca;
var peso;
var temperatura;
var acumulador=0;
var contador=0;
var contadorPares=0;
var contadorTem=0;
var pesoMax;
var marcaPesoMax;
var pesoMin;

do
{
    marca=prompt("Ingrese la marca.");
    peso=prompt("Ingrese peso entre 1 y 100.");
    peso=parseInt(peso);
    while(isNaN(peso)|| peso <1 || peso >100)
    {
        peso=prompt("Numero incorrecto, ingrese peso entre 1 y 100.");
        peso=parseInt(peso);
    }

    if(contador==0)
    {
        pesoMax=peso;
        marcaPesoMax=marca;
        pesoMin=peso;

    }
    if(peso > pesoMax)
    {
        pesoMax=peso;
        marcaPesoMax=marca;
    }
    else if(peso < pesoMin)
    {
        pesoMin=peso;
    }

    temperatura=prompt("Ingrese temperatura entre -30 y 30.");
    temperatura=parseInt(temperatura);
    while(isNaN(temperatura)|| temperatura < -30 || temperatura > 30)
    {
        temperatura=prompt("Numero incorrecto, ingrese temperatura entre -30 y 30.");
        temperatura=parseInt(temperatura); 
    }

    if(temperatura%2==0)
    {
        contadorPares++;
    }
    if(temperatura<0)
    {
        contadorTem++;
    }
    contador++;
    acumulador +=peso;
    respuesta = confirm("desea seguir ingrezando productos");
}
while(respuesta);

document.write(" La cantidad de temeraturas pares son "+contadorPares+ "<br>");
document.write("La marca del producto mas pesado es " +marcaPesoMax+ "<br>");
document.write("La cantidad de productos que se conservan a menos de 0 grados es " +contadorTem+ "<br>");
document.write("El promedio del peso de todos los productos es " +(acumulador/contador)+ "<br>");
document.write("El peso máximo es " + pesoMax +  " Y el peso mínimo es " +pesoMin+ "<br>");

}
