const num1 = document.querySelector('#num1')
const btn = document.querySelector('.btn')
const num2 = document.querySelector('#num2')
const result = document.querySelector('.result')
const clean = document.querySelector('.clean')
const operator = document.querySelectorAll('[data-operand]')


function compute() {


  operator.forEach(operand => {
    operand.addEventListener('click', () => {
      operand.classList.add('active')
      btn.onclick = () => {
        operand.classList.remove('active')
        getOperand(operand)
      }
    })
  })

}

function getOperand(operat) {

  let firstNum = parseInt(num1.value, 10)
  let secondNum = parseInt(num2.value, 10)
  let dataset = operat.dataset.operand

  switch (dataset) {

    case '+':
      result.value = firstNum + secondNum
      break

    case '-':
      result.value = firstNum - secondNum
      break

    case '*':
      result.value = firstNum * secondNum
      break
    case '/':
      result.value = firstNum / secondNum
      break
  }

  if (secondNum === 0) {
    result.value = 'На ноль делить нельзя!'
  }

  if (secondNum === '' || firstNum === '' || dataset === '') {
    alert("Введите число или выберите оператор")
  }

}

function clear() {

  clean.addEventListener('click', () => {
    num1.value = ''
    num2.value = ''
    result.value = ''
    operator.forEach(item => item.classList.remove('active'))
    
  })

}


compute()
clear()