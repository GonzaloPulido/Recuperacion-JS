// Variables
const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
var posicion = 0
var resultado = ""
//
// Programa y controles de entrada
try {
    var dni = prompt("Introduce el numero de tu DNI: ")
    if(dni.length == 8 && !isNaN(dni)){
        if (dni < 0 || dni > 99999999){
            alert("El numero de DNI no es valido")
        }else{
            // Logica del programa
            posicion = dni % 23
            resultado = dni+letras[posicion]
            alert(`Tu DNI completo es ${resultado}`)
        }
    }else{alert("Formato incorrecto, el DNI tiene 8 caracteres")}
        
        
  }catch (err) {
    alert("Error, la entrada no es valida")
}


// Para realizar este ejercicio he usado un try/catch para controlar errores 
// y varios if para filtrar la entrada y que no entre ninguna entrada no deseada
// Con los operadores he hecho el programa que calcule la posicion de la letra
// en la lista y asi dar el DNI completo



