function mostrar()
{
   


var contador=0;
var nota;
var sexo;
var sexoNotaBaja;
var notaBaja;
var promedio;
var contadorVarones=0;
var acumulador=0;

	while(contador<5){
        nota=prompt("ingrese nota");
        nota=parseInt(nota);
			
            while(isNaN(nota)==true || nota>10 || nota<1)
            {
                nota=prompt("Numero incorrecto ,ingrese nota en 1 y 10");
                
            }
        nota=parseInt(nota);
        sexo=prompt("ingrese sexo f o m");
            
            while(sexo!="m" && sexo!="f")
            {
                sexo=prompt("no existe, ingrese sexo f o m");
            }
			
            if(nota<notaBaja)
            {
				notaBaja=nota;
   				sexoNotaBaja=sexo;
				
            }
            if(nota>=6 && sexo=="m")
            {
                contadorVarones++;
            }
       
		acumulador=acumulador+nota;
		notaBaja=nota;
        contador++;
	}
    promedio=acumulador/5;
    alert("el promedio de las notas es "+promedio);
    alert("la nota mas baja es " + notaBaja + " y el sexo es " + sexoNotaBaja);
    alert("la cantidad de varones con nota mayor o igual a 6 son "+contadorVarones);
     


}
/*
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/