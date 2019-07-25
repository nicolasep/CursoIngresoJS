function mostrar()
{
   var precio=prompt("ingrese el precio");
   var descuento=prompt("ingrese el descuento");
   precio=parseInt(precio);
   descuento=parseInt(descuento);
   var precioFinal=precio-((precio*descuento)/100);
   document.getElementById("elPrecioFinal").value=precioFinal;


}
/*
Bienvenidos. 
Pedir por prompt el precio y el porcentaje 
de descuento, mostrar el precio final con descuento por id.
*/