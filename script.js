'use strict';

let isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n));
};

let money,
    start = function() {
      do {
        money = +prompt('Ваш месячный доход?');
      }
      while (!isNumber(money));
    };
start();

let appData = {
  //income: {},
  //addIncome: [],
  expenses: {},
  addExpenses: [],
  mission: 100000,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  accumulatedMonth: 0,

  asking: function(){
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(",");
    appData.deposit = confirm('Усть ли у вас депозит в банке?');
    let key, value;
    for (let i = 0; i < 2; i++) {
      key = prompt('Введите обязательную статью расходов.', "Коммунальные платежи").toLowerCase();
      do {
        value = prompt('Во сколько это обойдется?', '5000');
      } while (!isNumber(value));
      appData.expenses[key] = +value;
    }
  },

  getExpensesMonth: function () {
    let sum = 0;

    for (let item in appData.expenses) {

        sum += parseFloat(appData.expenses[item]);
    }
    appData.expensesMonth = sum;
    return sum;
},

  getBudget: function() {
    appData.budgetMonth = appData.budget;
    appData.budgetDay = Math.floor((appData.budgetMonth - appData.expensesMonth) / 30);
    appData.accumulatedMonth = appData.budgetMonth - appData.expensesMonth;
  },

  getTargetMonth: function() {
  if (appData.mission / appData.accumulatedMonth > 0) {
    console.log('Цель будет достигнута через ' + (Math.ceil(appData.mission / appData.accumulatedMonth)) + ' месяцев');
  } else {
    console.log('Цель не будет достигнута');
  }
  },

  getStatusIncome: function() {
    if (appData.budgetDay >= 1200) {
      console.log('У вас высокий уровень дохода');
    } else if (appData.budgetDay >= 600) {
      console.log('У вас средний уровень дохода');
    } else if ((appData.budgetDay < 600) && (appData.budgetDay >= 0)) {
      console.log('К сожалению у вас уровень дохода ниже среднего');
    } else {
      console.log('Что-то пошло не так');
    }
  }
};

appData.asking();
appData.getBudget();
console.log('За месяц вы тратите: ' + appData.getExpensesMonth());
appData.getTargetMonth();
// console.log('Ваш дневной бюджет составляет: ' + appData.budgetDay + ' рублей');
appData.getStatusIncome();
// console.log(appData.budgetMonth);
for (let item in appData) {
  console.log('Наша программа включает в себя данные: ');
  console.log("appData " + item + " = " + appData[item]);
}

