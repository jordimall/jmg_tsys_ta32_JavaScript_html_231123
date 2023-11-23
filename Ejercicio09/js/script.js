let cadenaText = prompt("Escriba la cadena que quieres examinar");

let regexMayusculas = /^[A-Z]*$/;
let regexMinusculas = /^[a-z]*$/;
let regexCombinada = /^[a-zA-Z]*$/;

const comprobarCadena = (text) => {

    if(regexMayusculas.test(cadenaText)) alert("La cadena solo contiene mayusculas");
    else if(regexMinusculas.test(cadenaText)) alert("La cadena solo contiene minusculas");
    else if(regexCombinada.test(cadenaText)) alert("La cadena cuntiene mayusculas y minusculas");
    else alert("La cadena no contiene ni mayusculas ni minusculas, o ademas contiene signos epseciales o números");
}

comprobarCadena(cadenaText)