/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

    var cantidad=document.getElementById("Cantidad").value;
    cantidad=parseInt(cantidad);
    var marca=document.getElementById("Marca").value;
    var precio=35;
    var precioBruto=precio*cantidad;
    var descuento;
    var precioFinal;
    var iibb;
    
    if(cantidad>=6){
        //descuento 50%
        descuento=50;
    }
    else
        {
        if(cantidad==5){
            if(marca=="ArgentinaLuz"){
                //descuento 40 argen
                descuento=40;
                
            }
            else
            {
                //descuento 5 de otra marca 30
                descuento=30;
            }
        }
        else
        {
             if(cantidad==4){
                if(marca=="ArgentinaLuz"||marca=="FelipeLamparas"){
                        //descuento
                        descuento=25;
                }
                else
                {
                        //descuento 4 de otras
                        descuento=20;
             }
                }
                else
                {
                    if(cantidad==3){
                        if(marca=="ArgentinaLuz"){
                            //descuento 3 lam argen
                            descuento=15;
                        }
                        else
                        {
                            if(marca=="FelipeLamparas"){
                                //aca descuento 3 lamparas felipe
                                descuento=10;
                            }
                            else
                            {
                                    //descuento si es 3 lam de otras marcas
                                    descuento=5;
                                }                       
                        }  
                    }
                    else
                    {
                        //lamparas menor o igual a 2
                        descuento=0;                   
                    }
                }
            }
        }    
         precioFinal=precioBruto-((precioBruto*descuento)/100);
         iibb=(precioFinal*10)/100;
         if(precioFinal>=120){
            document.getElementById("precioDescuento").value=precioFinal;
            alert("usted pago "+iibb+" de IIBB");
        }
        else
        {
            document.getElementById("precioDescuento").value=precioFinal;
        }
}




