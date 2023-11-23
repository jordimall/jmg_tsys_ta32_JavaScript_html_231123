let num = prompt("Escribe un número entero");

const esEntero = numero => {
    // La función Number.isInteger() verifica si una variable es un número entero
    return Number.isInteger(Number(numero));
};

const esPar = num => {
    if (num % 2 == 0) alert("El número es par");
    else alert("El número es impar");
};

if (esEntero(num)) esPar(num);
else alert("Debes introducir un número entero");
