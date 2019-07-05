/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    
    
    var numero1;
    var numero2;
    
    numero1=document.getElementById("numeroUno").value;
    numero2=document.getElementById("numeroDos").value;
   var num1=parseInt(numero1);
   var num2=parseInt(numero2)

    alert("la suma es "+(num1+num2));


    
    
}

