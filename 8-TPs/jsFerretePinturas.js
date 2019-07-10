/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
var fahre=document.getElementById("Temperatura").value;
fahre=parseInt(fahre);
var a_centigrados=((fahre-32)*5)/9;
alert(fahre+" Fahrenheit son "+a_centigrados+" Grados Centigrados");

}

function CentigradosFahrenheit () 
{
var centigrados=document.getElementById("Temperatura").value;
centigrados=parseInt(centigrados);
var a_fahre=((centigrados*9)/5)+32;
alert(centigrados+" Centigrados son "+a_fahre+" Grados Fahrenheit");

}
