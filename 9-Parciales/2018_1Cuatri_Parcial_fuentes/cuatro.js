function mostrar()
{

var numero1=prompt("Ingrese un numero");
var numero2=prompt("Ingrese otro numero");
var conca=numero1+numero2;
numero1=parseInt(numero1);
numero2=parseInt(numero2);
var resultado;

if((numero1==numero2)&&((numero1==numero2)<10)){
   resultado=conca;
    
}else{
        if(numero1>numero2){
            //aca los resto
            resultado=numero1-numero2;
        }else{
            //aca los sumo
            resultado=numero1+numero2;
        }
}
if(resultado>=10)
{
    //aca muestro si supera
       resultado="la suma es "+resultado+" y supero el 10";
}

alert(resultado);
}

/*Enunciado:
Bienvenidos (IF). 
Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10".*/