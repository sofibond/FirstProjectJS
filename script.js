let money = 99000;
let income = 'delivery';
let addExpenses = 'Patrol, Food, Skating';
let deposit = true;
let mission = 10000000;
let period = 11;
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