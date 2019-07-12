function mostrar()
{
//tomo la edad  
var edad1=document.getElementById("edad").value;
edad1=parseInt(edad1);

/*  esta forma esta bien y es mas simple
if (edad1>=18){
  alert("es mayor de edad");
}
else if (edad1>=13 && edad1<=17){
  alert ("es adolecente");
}
else {
  alert("es niño");
}*/

  //forma correcta es la siguiente con if - else anidados anidados
  if(edad<12){
    alert("niño");
  }else {
    if(edad>18){
      alert("adulto");
    }else{
      alert("adolecente");
    }
  }


}//FIN DE LA FUNCIÓN