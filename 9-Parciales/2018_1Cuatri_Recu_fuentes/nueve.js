function mostrar()
{
var contador=0;
var nombre;
var peso;
var temperaturasPares=0;
var nombreAnimalPesado;
var temperaturaAnimalPesado;
var contadorAnimalesMenosCero=0;
var pesoMaximoAnimalesBajoCero;
var pesoMinimoAnimalesBajoCero;
var temperatura;
var pesoMaximo;
var pesoPromedio=0;
var respuesta;

do
{
        nombre=prompt("Ingrese nombre del animal");
        while(isNaN(nombre)==false)
        {
            nombre=prompt("Dato incorrecto, ingrese nombre");
        }
        peso=prompt("Ingrese peso entre 1 y 1000");
        peso=parseInt(peso);
        while(isNaN(peso) || peso < 1 || peso > 1000)
        {
            peso=prompt("Peso incorrecto, ingrese peso");
            peso=parseInt(peso);
        }
        pesoPromedio+=peso;
        temperatura=prompt("Ingrese temperatura del habitat ente -30 y 30");
        temperatura=parseInt(temperatura);
        while(isNaN(temperatura) || temperatura < -30 || temperatura > 30)
        {
            temperatura=prompt("Temperatura del habitat incorrecta, ingrese temperatura entre -30 y 30");
            temperatura=parseInt(temperatura);
        }
        if(contador==0)
        {
            nombreAnimalPesado=nombre;
            temperaturaAnimalPesado=peso;
            pesoMaximoAnimalesBajoCero=peso;
            pesoMinimoAnimalesBajoCero=peso;
            nombreAnimalPesado=nombre;
            temperaturaAnimalPesado=temperatura;
            pesoMaximo=peso;

        }
        else
            if(peso > pesoMaximo)
            {
                pesoMaximo=peso;
                nombreAnimalPesado=nombre;
                temperaturaAnimalPesado=temperatura;
            }
            
        if(temperatura < 0)
        {
            contadorAnimalesMenosCero++;
                if(peso > pesoMaximoAnimalesBajoCero)
                {
                    pesoMaximoAnimalesBajoCero=peso;
                }
                else if (peso < pesoMinimoAnimalesBajoCero)
                {
                    pesoMinimoAnimalesBajoCero=peso;
                }
        }
        
        if(temperatura % 2==0)
        {
            temperaturasPares++;
        }
        
        contador++;
respuesta=confirm("¿Desea seguir ingresando?")
}while(respuesta);

document.write("La cantidad de temperaturas pares es " + temperaturasPares + "<br>");
document.write("El nombre y la temperatura del animal mas pesado es "+ nombreAnimalPesado + " " 
+ temperaturaAnimalPesado + "<br>");
document.write("La cantidad de animales que viven a menos de cero grados es "+ contadorAnimalesMenosCero + "<br>");
document.write("El promedio del peso de todos los animales es "+(pesoPromedio/contador) + "<br>");
document.write("El peso maximo y mino de todos los animales cuyas temperaturas son por debajo de los cero grados es " + 
pesoMaximoAnimalesBajoCero +" "+ pesoMinimoAnimalesBajoCero + "<br>");

}
/*Bienvenidos. 
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser 
entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el 
ingreso por document.write: 
a) La cantidad de temperaturas pares. -
b) El nombre y temperatura del animal más pesado -
c) La cantidad de animales que viven a menos de 0 grados. -
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero. -


Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )*/