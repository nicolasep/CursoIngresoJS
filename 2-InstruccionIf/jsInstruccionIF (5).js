function mostrar()
{
//tomo la edad  
var edad1=document.getElementById("edad").value;
edad1=parseInt(edad1);
if(edad1<13 || edad1>17){
    alert("no es adolecente");
}


}//FIN DE LA FUNCIÓN