'use strict';
let money = prompt('Ваш месячный доход?'),
income = 'delivery',
deposit = true,
// addExpenses = 'Patrol Food Skating',
mission = 100000,
expences1 = prompt('Введите обязательную статью расходов?'),
amount1 = prompt('Во сколько это обойдется?'),
expences2 = prompt('Введите обязательную статью расходов?'),
amount2 = prompt('Во сколько это обойдется?'),
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
arrExpenses = addExpenses.toLowerCase().split(",");

function showTypeOf() {
  console.log(typeof(money));
  console.log(typeof(deposit));
  console.log(typeof(income));
}

function getExpensesMonth() {
  return amount1*1 + amount2*1;
}

let amountSum = getExpensesMonth();

function getAccumulatedMonth() {
  return money - amountSum;
}

let accumulatedMonth = getAccumulatedMonth(),
budgetDay = Math.floor((amountSum + accumulatedMonth) / 30);


function getTargetMonth() {
  return Math.ceil(mission / accumulatedMonth);
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

showTypeOf();
console.log('Ваши возможные расходы за месяц: ' + arrExpenses);
console.log('За месяц вы тратите: ' + getExpensesMonth());
console.log('Цель будет достигнута через ' + (Math.ceil(getTargetMonth())) + ' месяцев');
console.log('Ваш дневной бюджет составляет: ' + budgetDay + ' рублей');
getStatusIncome();

