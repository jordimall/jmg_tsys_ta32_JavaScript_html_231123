let text = prompt("Escribe la cadena que quieres comprobar");

const esPalindromo = cadena => {
    // Convertir la cadena a minúsculas y eliminar los caracteres no alfabéticos
    cadena = cadena.toLowerCase().replace(/[^a-z]/g, "");

    // Crear una copia de la cadena que está al revés
    let cadenaAlReves = cadena.split("").reverse().join("");

    // Comprobar si la cadena y su reverso son iguales
    return cadena === cadenaAlReves;
};

if (esPalindromo(text)) alert("La cadena es un palíndromo.");
else alert("La cadena no es un palíndromo.");
