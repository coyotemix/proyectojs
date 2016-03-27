function numeroAlAzarHastaLimite(limite)
{
	 var num=Math.floor(Math.random()*limite)+1;
	 return num;
}

var numAzar = numeroAlAzarHastaLimite(50);
alert("el numero al azar es: "+numAzar);
