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
var precio=35;
//var precio_final;
var marca=document.getElementById("Marca").value;
//var precio_sin_descuento=precio*cantidad;
var iibb;//=(precio_final*10)/100;
//var desde_iibb=120;
var descuento1=(precio*50)/100;
var descuento2=(precio*60)/100;
var descuento3=(precio*70)/100;
var descuento4=(precio*75)/100;
var descuento5=(precio*80)/100;
var descuento6=(precio*85)/100;
var descuento7=(precio*90)/100;
var descuento8=(precio*95)/100;

if(cantidad>=6){
    var precio_final=cantidad*descuento1;
    if(precio_final>120){
        iibb=(precio_final*10)/100;
        document.getElementById("precioDescuento").value=precio_final+iibb;
        alert("Usted pago "+iibb+" de IIBB");
    }else{
     document.getElementById("precioDescuento").value=precio_final;
    }
}

if(cantidad<=2){
    var precio_final2=cantidad*precio;
    if(precio_final2>120){
        iibb=(precio_final2*10)/100;
        document.getElementById("precioDescuento").value=precio_final2+iibb;
        alert("Usted pago "+iibb+" de IIBB");
    }else{
     document.getElementById("precioDescuento").value=precio_final2;
    }
}

if(marca=="ArgentinaLuz"){
    if(cantidad==5){
       var precio_final3=cantidad*descuento2;
        if(precio_final3>120){
            iibb=(precio_final3*10)/100;
            document.getElementById("precioDescuento").value=precio_final3+iibb;
            alert("Usted pago "+iibb+" de IIBB");
        }else{
         document.getElementById("precioDescuento").value=precio_final3;
        }
    }
    
    if(cantidad==4){
        var precio_final4=cantidad*descuento4;
        if(precio_final4>120){
            iibb=(precio_final4*10)/100;
            document.getElementById("precioDescuento").value=precio_final4+iibb;
            alert("Usted pago "+iibb+" de IIBB");
        }else{
         document.getElementById("precioDescuento").value=precio_final4;
        }
    }
    
    if(cantidad==3){
        var precio_final5=cantidad*descuento6;
        if(precio_final5>120){
            iibb=(precio_final5*10)/100;
            document.getElementById("precioDescuento").value=precio_final5+iibb;
            alert("Usted pago "+iibb+" de IIBB");
        }else{
         document.getElementById("precioDescuento").value=precio_final5;
        }
    }

}

if(marca=="FelipeLamparas"){
    if(cantidad==5){
        var precio_final10=cantidad*descuento3;
         if(precio_final10>120){
             iibb=(precio_final10*10)/100;
             document.getElementById("precioDescuento").value=precio_final10+iibb;
             alert("Usted pago "+iibb+" de IIBB");
         }else{
          document.getElementById("precioDescuento").value=precio_final10;
         }
    } 
    if(cantidad==4){
        var precio_final6=cantidad*descuento4;
        if(precio_final6>120){
            iibb=(precio_final6*10)/100;
            document.getElementById("precioDescuento").value=precio_final6+iibb;
            alert("Usted pago "+iibb+" de IIBB");
        }else{
         document.getElementById("precioDescuento").value=precio_final6;
        }
    }
    if(cantidad==3){
        var precio_final7=cantidad*descuento7;
        if(precio_final7>120){
            iibb=(precio_final7*10)/100;
            document.getElementById("precioDescuento").value=precio_final7+iibb;
            alert("Usted pago "+iibb+" de IIBB");
        }else{
         document.getElementById("precioDescuento").value=precio_final7;
        }
    }
}

if((marca!="ArgentinaLuz")&&(marca!="FelipeLamparas")){
    if(cantidad==5){
       var precio_final8=cantidad*descuento3;
        if(precio_final8>120){
            iibb=(precio_final8*10)/100;
            document.getElementById("precioDescuento").value=precio_final8+iibb;
            alert("Usted pago "+iibb+" de IIBB");
        }else{
         document.getElementById("precioDescuento").value=precio_final8;
        }
    }
    if(cantidad==4){
        var precio_final9=cantidad*descuento5;
        if(precio_final9>120){
            iibb=(precio_final9*10)/100;
            document.getElementById("precioDescuento").value=precio_final9+iibb;
            alert("Usted pago "+iibb+" de IIBB");
        }else{
         document.getElementById("precioDescuento").value=precio_final9;
        }
    }
    if(cantidad==3){
        var precio_final11=cantidad*descuento8;
        if(precio_final11>120){
            iibb=(precio_final11*10)/100;
            document.getElementById("precioDescuento").value=precio_final11+iibb;
            alert("Usted pago "+iibb+" de IIBB");
        }else{
         document.getElementById("precioDescuento").value=precio_final11;
        }
    }
   

}

}




