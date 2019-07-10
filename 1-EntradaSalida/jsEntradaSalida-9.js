/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    numero1=document.getElementById("sueldo").value;

   numero1=parseInt(numero1);
   
   //var numero2=(numero1*1.1);
   var numero2=(numero1+(numero1*10)/100);
   document.getElementById("resultado").value=numero2;
    

}
