/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var numero1=document.getElementById("PrecioUno").value;
    var numero2=document.getElementById("PrecioDos").value;
    var numero3=document.getElementById("PrecioTres").value;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    numero3=parseInt(numero3);
    alert("La suma de los tres precios es: "+(numero1+numero2+numero3));

}
function Promedio () 
{
    var numero1=document.getElementById("PrecioUno").value;
    var numero2=document.getElementById("PrecioDos").value;
    var numero3=document.getElementById("PrecioTres").value;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    numero3=parseInt(numero3);

    var promedio=((numero1+numero2+numero3)/3);
    var precio_promedio=Math.round(promedio);
    alert("El promedio de los tres precios es: "+precio_promedio);
}
function PrecioFinal () 
{
 var numero1=document.getElementById("PrecioUno").value;
 var numero2=document.getElementById("PrecioDos").value;
 var numero3=document.getElementById("PrecioTres").value;
 numero1=parseInt(numero1);
 numero2=parseInt(numero2);
 numero3=parseInt(numero3);
 var suma=numero1+numero2+numero3;
 var iva=(suma*21)/100;
 var precio_con_iva=iva+suma;
 alert("El precio total con iva de 21% es: "+precio_con_iva);
   
}