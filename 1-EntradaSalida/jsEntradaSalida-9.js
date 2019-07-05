/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    numero1=document.getElementById("sueldo").value;

   var num1=parseInt(numero1);
   
   var num2=(num1*1.1);
   document.getElementById("resultado").value=num2;
    

}
