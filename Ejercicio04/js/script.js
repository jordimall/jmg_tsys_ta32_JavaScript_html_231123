var valores = [true, 5, false, "hola", "adios", 2];

let arrayString = valores.filter(valor => typeof valor == "string");

let result1 = "";
arrayString.forEach(element => {
    if (element.length > result1.length) {
        result1 = element;
    }
});

console.log(result1);

let arrayBoolean = valores.filter(valor => typeof valor == "boolean");
arrayBoolean.forEach(element => {
    console.log(element);
});

let arrayNumber = valores.filter(valor => typeof valor == "number");

let [num1, num2] = [...arrayNumber];
console.log(num1 + " + " + num2 + " = " + (num1 + num2));
console.log(num1 + " - " + num2 + " = " + (num1 - num2));
console.log(num1 + " * " + num2 + " = " + num1 * num2);
console.log(num1 + " / " + num2 + " = " + num1 / num2);
console.log(num1 + " % " + num2 + " = " + (num1 % num2));
