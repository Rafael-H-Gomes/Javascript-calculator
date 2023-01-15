const display = document.querySelector('.calculator-display .display-text')

function AutoScalingText() {
  let scale = 1;
  
  const node = display;
  const parentNode = node.parentNode;

  const avaliableWidth = parentNode.offsetWidth;
  const actualWidth = node.offsetWidth;
  const actualScale = avaliableWidth / actualWidth;

  if(scale === actualScale) {
    return;
  }
  if (actualScale < 1) {
    scale = actualScale;
  } else if (scale < 1) {
    scale = 1;
  }

  node.style.transform = `scale(${scale}, ${scale})`;
}

let displayDigits = ''

const updateDisplay = function (key) {
  displayDigits += key
  display.textContent = displayDigits
  AutoScalingText();
}

const dot = function () {
  if (displayDigits == '') {
    displayDigits = '0'
    displayDigits += '.'
    display.textContent = displayDigits
  } else {
    displayDigits += '.'
    display.textContent = displayDigits
  }
}

const clearDisplay = function () {
  display.textContent = '0'
  displayDigits = ''
  AutoScalingText();
}

const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
}

const percent = function () {
  currentValue = parseFloat(displayDigits)
  const newValue = currentValue / 100
  displayDigits = newValue
  display.textContent = displayDigits
}

const toggleSign = function () {
  const newValue = parseFloat(displayDigits) * -1
  displayDigits = newValue
  display.textContent = displayDigits
}

const clearLastChar = function () {
  displayDigits = displayDigits.substring(0, displayDigits.length - 1)
  if (displayDigits == '') {
    displayDigits = '0'
  }
  display.textContent = displayDigits
}

const operators = function (sign) {
  if (displayDigits === '') {
    prevValue = parseInt('0')
  } else {
    prevValue = parseFloat(displayDigits)
    displayDigits = ''
  }
  operator = sign
}

const equal = function () {
  nextValue = parseInt(displayDigits)
  if (displayDigits == '') {
    nextValue = parseInt('0')
    console.log(nextValue)
  }
  const result = CalculatorOperations[operator](prevValue, nextValue)
  display.textContent = result
  displayDigits = result
  AutoScalingText();
}
