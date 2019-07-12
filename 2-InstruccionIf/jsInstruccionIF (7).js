function mostrar()
{
//tomo la edad  
var edad1=document.getElementById("edad").value;
edad1=parseInt(edad1);
var estadoc=document.getElementById("estadoCivil").value;

if (edad1<18){
    if (estadoc!="Soltero"){
      alert( "Es muy pequeño para NO ser soltero.");
    }
}


}//FIN DE LA FUNCIÓN