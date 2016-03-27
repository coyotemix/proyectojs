console.log("Inicio programa");
var numeroUsuario = prompt("Ingrese un numero del 1 al 5: ");
var numeroAdivinar = 3;
if (parseInt(numeroUsuario) ===numeroAdivinar)
{
adivinoCorrectamenete = true;

}
else  if (parseInt(numeroUsuario) > numeroAdivinar)
{
	alert("el numero que ingreso es mayor ");
	var nuevoIntento = prompt("intenta de nuevo un numero del 1 al 5:");
	if (parseInt(nuevoIntento) === numeroAdivinar)

{
  adivinoCorrectamenete = true;
}
else
{ 
	adivinoCorrectamenete = false;

}
}
else if (parseInt(numeroUsuario)<numeroAdivinar)
{
alert("el numero que ingresastes es menor");
var nuevoIntento = prompt("intente de nuevo, ingrese numero del 1 al 5:");
if (parseInt(nuevoIntento) === numeroAdivinar)

{
	adivinoCorrectamenete= true;
}
else
{
     adivinoCorrectamenete= false;
 }
}
if (adivinoCorrectamenete)
{
	document.write("<p>adivinastes</p>");
}
else
{
	document.write("<p>no adivinastes</p>");
}
console.log("programa completo");
