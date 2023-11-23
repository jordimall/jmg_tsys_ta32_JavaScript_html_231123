let numFactorial = prompt("Introduce un numero para calcular su factorial");

const caclcularFactorial = numFactorial => {
    let result = numFactorial;
    for (let index = numFactorial - 1; index > 0; index--) {
        result *= index;
    }
    alert(
        "El resultado de calcular el factorial de " +
            numFactorial +
            " es: " +
            result,
    );
};

const esEntero = (numero) =>{
    // La función Number.isInteger() verifica si una variable es un número entero
    return Number.isInteger(Number(numero));
}

if(esEntero(numFactorial)) caclcularFactorial(numFactorial);
else alert("Debes introducir un numero entero");