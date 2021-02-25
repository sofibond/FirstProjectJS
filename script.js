'use strict';
let money = prompt('Ваш месячный доход?'),
income = 'delivery',
addExpenses = 'Patrol, Food, Skating',
deposit = true,
mission = 100000,
period = 11;
console.log(typeof(money));
console.log(typeof(deposit));
console.log(typeof(income));
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' долларов');
let arrExpenses = addExpenses.toLowerCase().split(" ");
console.log(arrExpenses);
let budgetDay = money / 30;
console.log(budgetDay);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');
console.log(money);
console.log(addExpenses);
console.log(deposit);
let expences1 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
let expences2 = prompt('Введите обязательную статью расходов?');
let amount2 = prompt('Во сколько это обойдется?');
let budgetMonth = amount1*1 + amount2*1;
console.log(budgetMonth);
console.log('Цель будет достигнута через ' + (Math.ceil(mission / (money*1 - budgetMonth))) + ' месяцев');
budgetDay = Math.floor(budgetMonth / 30);
if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600) {
  console.log('У вас средний уровень дохода');
} else if ((budgetDay < 600) && (budgetDay >= 0)) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  console.log('Что-то пошло не так');
}
