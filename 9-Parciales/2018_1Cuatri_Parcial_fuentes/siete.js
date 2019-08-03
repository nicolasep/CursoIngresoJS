function mostrar()
{
    /*
var alumno1=prompt("ingrese nota de primer alumno");
alumno1=parseInt(alumno1);
var salumno1=prompt("ingrese sexo de primer alumno 'f' o 'm' ");
var alumno2=prompt("ingrese nota de segundo alumno");
alumno2=parseInt(alumno2);
var salumno2=prompt("ingrese sexo de segundo alumno 'f' o 'm' ");
var alumno3=prompt("ingrese nota de tercer alumno");
alumno3=parseInt(alumno3);
var salumno3=prompt("ingrese sexo de tercer alumno 'f' o 'm' ");
var alumno4=prompt("ingrese nota de cuarto alumno");
alumno4=parseInt(alumno4);
var salumno4=prompt("ingrese sexo de cuarto alumno 'f' o 'm' ");
var alumno5=prompt("ingrese nota de quinto alumno");
alumno5=parseInt(alumno5);
var salumno5=prompt("ingrese sexo de quinto alumno 'f' o 'm' ");
var promedio=alumno1+alumno2+alumno3+alumno4;
*/
/*
var contador=0;


    while(contador<=5)
    {
        var nota=prompt("ingrese nota");
            nota=parseInt(nota);
        while(contador<5){

            var sexo=prompt("ingrese f o m");

        }
        

        while(nota>=6 && nota<=10){

        }
    }
*/

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
        //nota=parseInt(nota);
			
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