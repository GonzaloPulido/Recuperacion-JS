// Entrada
var entrada = prompt("Introduce un numero para calcular el factorial: ")
var resultado = 1


// Logica con bucle for
for (let i = entrada; i > 1 ; i--){
    resultado = resultado * i
}

// Salida 
alert(`El factorial de ${entrada} es ${resultado}`)



// Para realizar este ejercicio he usado un bucle for, para hacerlo de manera mas sencilla