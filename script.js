let money = 99000;
let income = 'delivery';
let addExpenses = 'Patrol, Food, Skating';
let deposit = true;
let mission = 10000000;
let period = 11;
console.log(money);
console.log(deposit);
console.log(income);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' долларов');
let arrExpenses = [addExpenses.toLowerCase().substring(0, 6), addExpenses.toLowerCase().substring(8, 12), addExpenses.toLowerCase().substring(14, 21)];
console.log(arrExpenses);
let budgetDay = money / 30;
console.log(budgetDay);