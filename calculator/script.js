let num = '';
let result = 0;
let operator = false;

// press number buttons
const getNumber = (btnId) => {
    num += document.getElementById(btnId).innerHTML;
    document.getElementById('display').innerHTML = num;
};
// press operators
const operate = operatorType => {
    switch (operator) {
        case 0:
            result += Number(num);
            break;
        case 1:
            result -= Number(num);
            break;
        case 2:
            result *= Number(num);
            break;
        case 3:
            result /= Number(num);
            break;
        default:
            if (result === 0) {
                result = Number(num);
            } else {
                result = result;
            }
    }
    operator = operatorType;
    document.getElementById('display').innerHTML = result;
    num = '';
}

// Press number buttons
document.getElementById('btn1').onclick = function() {getNumber('btn1')}
document.getElementById('btn2').onclick = function() {getNumber('btn2')}
document.getElementById('btn3').onclick = function() {getNumber('btn3')}
document.getElementById('btn4').onclick = function() {getNumber('btn4')}
document.getElementById('btn5').onclick = function() {getNumber('btn5')}
document.getElementById('btn6').onclick = function() {getNumber('btn6')}
document.getElementById('btn7').onclick = function() {getNumber('btn7')}
document.getElementById('btn8').onclick = function() {getNumber('btn8')}
document.getElementById('btn9').onclick = function() {getNumber('btn9')}
document.getElementById('btn0').onclick = function() {getNumber('btn0')}
document.getElementById('btnDot').onclick = function() {getNumber('btnDot')}

// Press maths buttons
document.getElementById('btnAdd').onclick = function() {operate(0)}
document.getElementById('btnDis').onclick = function() {operate(1)}
document.getElementById('btnMul').onclick = function() {operate(2)}
document.getElementById('btnDiv').onclick = function() {operate(3)}

// Get result
document.getElementById('btnRes').onclick = function() {
    operate(10);
}
// Press clear button
document.getElementById('btnCl').onclick = function() {
    num = '';
    result = 0;
    operator = 10;
    document.getElementById('display').innerHTML = 0;
}
