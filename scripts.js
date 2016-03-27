function numAlAzar(lim1,lim2)
{
	var num= Math.floor(Math.random()*(lim1-lim2))+ lim2;
		return num;
}
var lim1 = parseInt(prompt("ingrese limite superior: "));
if (isNaN(lim1))
{
	throw Error("no es el numero valido");
}
var lim2 = parseInt(prompt("ingrese limite inferior:"));
if (isNaN(lim2))
{
	throw Error("no es el numero valido");
}
var numero = numAlAzar(lim1,lim2);
alert("el numero al azar es: "+numero);