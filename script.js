'use strict';

let isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n)); //&& (n.trim() !== ''));
};
let isWord = function(n) {
  return (isNaN(parseFloat(n)));
};

let money = 40000,
    start = function() {
      do {
        money = +prompt('Ваш месячный доход?');
      }
      while (!isNumber(money));
      // console.log(money);
    };
start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  expense: [],
  addExpenses: [],
  mission: 100000,
  period: 11,
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  accumulatedMonth: 0,
  sum: 0,

  asking: function(){

    let income = false;
    do {
      income = confirm('Есть ли у вас дополнительный заработок?');
    } while (!isWord);
    if(income === true){
      let itemIncome = prompt('Какой у вас дополнительный зароботок?', 'Доставка');
      let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 20000);
      appData.income[itemIncome] = cashIncome;
    }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(",");
  
    let key, value;
    for (let i = 0; i < 2; i++) {
      do{
        key = prompt('Введите обязательную статью расходов.', "Коммунальные платежи");
      } while (!isWord(key));
      key = key.toLowerCase();
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
    // appData.accumulatedMonth = money - appData.getExpensesMonth();
    // return appData.accumulatedMonth;
    appData.budgetMonth = appData.budget;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
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
  },

  getInfoDeposit: function(){
    appData.deposit = confirm('Усть ли у вас депозит в банке?');
    if(appData.deposit){
      do {
        appData.percentDeposit = prompt('Какой годовой процент?', '7');
      } while (!isNumber(appData.percentDeposit));
      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      } while (!isNumber(appData.moneyDeposit));
    }
  },
  calcSavedMoney: function(){
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
appData.getBudget();
// appData.getAccumulatedMonth();
// console.log('Ваши возможные расходы за месяц: ' + appData.addExpenses);
console.log('За месяц вы тратите: ' + appData.getExpensesMonth());
appData.getTargetMonth();
// console.log('Ваш дневной бюджет составляет: ' + appData.budgetDay + ' рублей');
appData.getStatusIncome();
// console.log(appData.budgetMonth);
for (let item in appData) {
  console.log('Наша программа включает в себя данные: ');
  console.log("appData " + item + " = " + appData[item]);
}
appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
console.log(appData.addExpenses);

let toUpper = function() {
  for (let i = 0; i < appData.addExpenses.length; i++) {
    let input = appData.addExpenses[i];
    let firstLetter = input.slice(0,1);
    let output = input.replace(firstLetter, firstLetter.toUpperCase());
    appData.addExpenses[i] = output;
  }
  console.log((appData.addExpenses).join(', '));
};
toUpper();

let buttonCalculate = document.getElementById('start');

let addButton = document.getElementsByTagName('button');

let depositCheck = document.querySelector('#deposit-check');

let additionalIncome = document.querySelectorAll('.additional_income-item');

let resultValue = document.getElementsByClassName('result-total');
console.log(resultValue);

let salaryInp = document.querySelector('.salary-amount');
let incomeItemsTitle = document.querySelector('.income-title')[1];
let incomeItemsAmount = document.querySelector('.income-amount');
let addIncomeInp = document.querySelector('.additional_income-item')[0];
let addIncomeInm = document.querySelector('.additional_income-item')[1];
let expencesTitleInp = document.querySelector('.expenses-title')[1];
let expencesAmountInp = document.querySelector('.expenses-amount');
let selaryInp = document.querySelector('.additional_expenses-item');
let depositCheckInp = document.querySelector('#deposit-check');
let depositAmountInp = document.querySelector('.deposit-amount');
let depositPercentInp = document.querySelector('.deposit-percent');
let targetAmountInp = document.querySelector('.target-amount');
let periodSelectInp = document.querySelector('.period-select');
let periodAmount = document.querySelector('period-amount');