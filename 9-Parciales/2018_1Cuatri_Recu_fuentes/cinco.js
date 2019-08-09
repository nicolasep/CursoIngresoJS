function mostrar()
{
var dia=prompt("Ingrese un dia");
var resultado;

switch(dia)
{
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        resultado="A trabajar";
    break;
    case "sabado":
    case "domingo":
        resultado="Buen finde";
    break;
}
alert(resultado);
}
/*Bienvenidos. 
(SWITCH)pedir el ingreso de un día de la semana, 
si es fin de semana mostrar " buen finde", 
si es día hábil “ a trabajar”, 
si no es un día valido, también informarlo, 
usar una sola ventana alert.*/