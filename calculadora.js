/** Obteniendo los datos para la operacion */
function getDigits(digit){
    document.getElementById('result').value += digit;

    return digit;
}

/** Calculando la operacion */
function solve(){
    let operacion = document.getElementById('result').value;

    /**
     * La funcion eval(): Evalua una expresion que esta representada como cadena
     */
    let resultado = eval(operacion);

    document.getElementById('result').value = resultado;

    return resultado;
}

function limpiar(){
    document.getElementById('result').value = '';
}