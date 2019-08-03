function mostrar()
{
var nota;
var sexo;
var contador=0;
var acumulador=0;
var contadorVarones=0;
var notaBaja;
var sexoNotaBaja;
for(contador=0;contador<5;contador++)
{
    nota=prompt("Ingrese nota entre 0 y 10");
    while(isNaN(nota) || nota < 0 || nota > 10)
    {
        nota=prompt("Numero incorrecto, Ingrese nota entre 0 y 10");
    }
    nota=parseInt(nota);
    sexo=prompt("Ingrese sexo f o m");
    while(sexo !="f" && sexo !="m")
    {
        sexo=prompt("Sexo incorrecto, ingrese sexo f o m");
    }
    if(contador==0)
    {
        notaBaja = nota;
        sexoNotaBaja = sexo
    }
    else
    {
        if (nota < notaBaja)
        {
            notaBaja = nota;
            sexoNotaBaja = sexo;
        }
        
    }
    if(nota >=6 && sexo == "m")
    {
        contadorVarones++;
    }
    
    acumulador += nota;
    

}
alert(acumulador/5);
alert("La nota mas baja es "+ notaBaja + " y el sexo es "+ sexoNotaBaja);
alert("La cantidad de varones que su nota fue mayor o igual a 6 es " +contadorVarones);
}
/*Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.

control
nota mal 11 bin 9 sexo m
nota 4 sexo mal z bien f 
nota 3 sexo m
nota 6 sexo m
nota 2 sexo f
*/