let contador;
const NUMBER = [];

function getNumber() {
    for (contador = 0; contador < 3; contador++) {
        NUMBER.push(prompt("Ingresa un número"));
    }
    console.log(NUMBER);
}

function compareNumber() {
    if (NUMBER[0] === NUMBER[1] && NUMBER[0] === NUMBER[2] && NUMBER[1] === NUMBER[2]) {
        document.write(`sus números ${NUMBER} : son iguales`)

    } else {
        document.write(` Orden asendente de sus números:  ${(NUMBER.sort((a, b) => a - b))}`);
        document.write(` Orden desendente de sus números:  ${(NUMBER.sort((a, b) => b - a))}`);
    }
}

getNumber();
compareNumber(); 