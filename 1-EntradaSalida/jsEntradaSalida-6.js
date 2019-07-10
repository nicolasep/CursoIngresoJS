/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

   var numero1;
   var numero2; 
   numero1=document.getElementById("numeroUno").value;
   numero2=document.getElementById("numeroDos").value;
   numero1=parseInt(numero1);
   numero2=parseInt(numero2);
   //si se usa el id en lugar de numero uno en el parseInt el resultado va a ser undifined
   
   //numero1=2
   //numero2=2 si se suman al no tener comillas dobles el resultado va a ser la suma de los 2
   //si uno de los dos tiene valor y el otro no, el resultado va a ser nan 
   alert("la suma es "+(numero1+numero2));


    /*var suma;
    suma=numero1+numero2;
    alert("la suma es: "+suma);
    */
}

