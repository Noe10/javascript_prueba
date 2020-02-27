var oracion = "la oreja de van es el mejor grupo de pop de los ultimos tiempos";

var palabra = oracion.split(" ");

palabra.reverse();
function contarLetras(letras) {
    var objeto = {}; 
    for(var i in letras){
        objeto[letras[i]] = ( objeto[letras[i]] || 0 ) + 1; // Incrementamos el valor si el elemento ya existe
    }
    return objeto;
}
console.log(contarLetras(palabra));
