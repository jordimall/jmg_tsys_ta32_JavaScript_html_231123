let numeroDNI = prompt("Escribe los numeros del DNI y te dire la letra");

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
    // La expresión regular /^\d{8}$/ verifica si la entrada es un número de exactamente 8 dígitos
    let regex = /^\d{8}$/;
    return regex.test(numeroDNI);
};

const calcularLetraDNI = numeroDNI => {
    let indice = numeroDNI % 23;
    return letras[indice];
};

if (esNumeroDNIValido(numeroDNI)) {
    let letraDNI = calcularLetraDNI(numeroDNI);
    alert("La letra del DNI es " + letraDNI);
} else {
    alert(
        "El número de DNI introducido no es válido. Debe ser un número de 8 dígitos.",
    );
}
