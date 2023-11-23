let dniCompleto = prompt("Escribe los numeros del DNI y te dire la letra");
let numeroDNI = dniCompleto.match(/\d+/g);
let letraDNIUser = dniCompleto.match(/[a-zA-Z]+/g).toString().toUpperCase();
var letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
];

const esNumeroDNIValido = numeroDNI => {
    if (numeroDNI > 0 && numeroDNI < 99999999) return true;
    else return false;
};

const calcularLetraDNI = numeroDNI => {
    let indice = numeroDNI % 23;
    return letras[indice];
};

if (esNumeroDNIValido(numeroDNI)) {
    let letraDNI = calcularLetraDNI(numeroDNI);
    if(letraDNI == letraDNIUser) alert("El número y la letra son corectos");
    else alert("La letra no es correcta");
    
} else {
    alert(
        "El número de DNI introducido no es válido. Debe ser un número de 8 dígitos.",
    );
}
