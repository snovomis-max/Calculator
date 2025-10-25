function calculate(operator) {
  const num1 = document.querySelector('#num1').value;
  const num2 = document.querySelector('#num2').value;
  let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
        break;
        case '-':
            result = num1 - num2;
        break;
        case '*':
            result = num1 * num2;
        break;
        case '/':
            result = num1 / num2;
        break;
    }
    document.querySelector('#result').textContent = result;
}