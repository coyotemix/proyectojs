function numeroAlAzarEntreLimites(lim1,lim2)
{
var num=Math.floor(Math.random()*(lim1-lim2))+lim2;
return num;
}
var limiteSuperior=prompt("ingrese limite superiror: ");
var limiteInferior=prompt("ingrese limite inferior: ");

if (isNaN(limiteInferior) || isNaN (limiteSuperior))
{
	throw error("numero no valido");
}
var contador = 0;
while (contador<10)
{
	var randomico = numeroAlAzarEntreLimites(parseInt(limiteInferior),parseInt(limiteSuperior));
	document.write(randomico +" ");
	contador++;
}