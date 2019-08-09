function mostrar()
{
var precio=prompt("Ingrese el precio");
precio=parseInt(precio);
var descuento=prompt("ingrese descuento");
descuento=parseInt(descuento);
var preciofinal=precio-((precio*descuento)/100);
document.getElementById("elPrecioFinal").value=preciofinal;

}
/*Bienvenidos. 
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/