/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo=document.getElementById("Largo").value;
var ancho=document.getElementById("Ancho").value;
var perimetro;
largo=parseInt(largo);
ancho=parseInt(ancho);
perimetro=(largo*2)+(ancho*2);
alert("la cantidad de alambre a comprar para el terreno es "+(perimetro*3));
}
function Circulo () 
{
var radio=document.getElementById("Radio").value;
var perimetro_circulo=(radio*2)*3.14;
alert("el total de alambre a comprar para el terreno circular es "+(perimetro_circulo*3));
}
function Materiales () 
{
var largo=document.getElementById("Largo").value;
var ancho=document.getElementById("Ancho").value;
largo=parseInt(largo);
ancho=parseInt(ancho);
var cemento=(largo*ancho)*2;
var cal=(largo*ancho)*3;
alert("para hacer el contrapiso se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");


}