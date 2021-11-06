
document.getElementById('clickMe').onclick = function() {

    function fibo (number, firstNumber,secondNumber) {
        if (number === 2){
            return secondNumber;
        } else if (number === 1){
            return firstNumber;
        } else {
            let f1 = firstNumber, f2 = secondNumber, f3;
            for (let i = 2; i < number; i++) {
                f3 = f1 + f2;
                f1 = f2;
                f2 = f3;
            }
            return f3;
        }
    }
   function fiboMinus (number, firstNumber,secondNumber) {

       if (number === 0){
            return alert('Why!?');
        } else {
            let f1 = firstNumber, f2 = secondNumber, f3;
            for (let i = 2; i < number; i++) {
                f3 = f1 - f2;
                f1 = f2;
                f2 = f3;
            }
            return f3;
        }
    }

let firstNumber = +prompt('Enter FIRST number');
        while((firstNumber.toFixed()!=firstNumber) || isNaN(firstNumber) || firstNumber == "") {
            firstNumber = +prompt('Enter FIRST number AGAIN', '');
        }
let secondNumber = +prompt('Enter SECOND number');

        while((secondNumber.toFixed()!=secondNumber) || isNaN(secondNumber || secondNumber == "")) {
            secondNumber = +prompt('Enter SECOND number AGAIN', '');
        }
let number = +prompt('Enter number:');
        while((number.toFixed()!=number) || isNaN(number) || number == "") {
            number = +prompt('Enter number AGAIN', '');
        }

if (firstNumber > 0 && secondNumber > 0){
    alert(`Value of Fibonacci number is: ${fibo(number, firstNumber, secondNumber)}`);
} else {
    alert(`Value of Fibonacci number is: ${fiboMinus(number, firstNumber, secondNumber)}`);
}
};