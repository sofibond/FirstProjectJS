'use strict';

let isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n));
};

let money = 40000,
income = 'delivery',
deposit = true,
period = 11,
mission = 100000,
addExpenses,
expenses = [];

function showTypeof(item) {
  console.log(typeof(item));
}

let start = function() {
  do {
    money = +prompt('Ваш месячный доход?');
  }
  while (!isNumber(money));
  // console.log(money);
};
start();

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
addExpenses = addExpenses.toLowerCase().split(",");

let getExpensesMonth = function() {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
      expenses[i] = prompt('Введите обязательную статью расходов');
      do {
        sum += +prompt('Во сколько это обойдется?');
      } while (!isNumber(sum));
  }
  // console.log(sum);
  return sum;
};

let expensesAmount = getExpensesMonth();

function getAccumulatedMonth() {
  return money - expensesAmount;
}

let accumulatedMonth = getAccumulatedMonth(),
budgetDay = Math.floor(money / 30);


function getTargetMonth() {
  if (mission / accumulatedMonth > 0) {
    console.log('Цель будет достигнута через ' + (Math.ceil(mission / accumulatedMonth)) + ' месяцев');
  } else {
    console.log('Цель не будет достигнута');
  }
}

function getStatusIncome() {
  if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
  } else if (budgetDay >= 600) {
    console.log('У вас средний уровень дохода');
  } else if ((budgetDay < 600) && (budgetDay >= 0)) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
  } else {
    console.log('Что-то пошло не так');
  }
}

showTypeof(money);
showTypeof(deposit);
showTypeof(income);

// start();
// getExpensesMonth();
console.log('Ваши возможные расходы за месяц: ' + addExpenses);
console.log('За месяц вы тратите: ' + expensesAmount);
getTargetMonth();
console.log('Ваш дневной бюджет составляет: ' + budgetDay + ' рублей');
getStatusIncome();

