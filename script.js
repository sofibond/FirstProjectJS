'use strict';

let buttonCalculate = document.getElementById('start');

let addButtonFirst = document.getElementsByTagName('button')[0];

let addButtonSecond = document.getElementsByTagName('button')[1];

let depositCheck = document.querySelector('#deposit-check');

let additionalIncomeItem = document.querySelectorAll('.additional_income-item');

let budgetMonthValue = document.getElementsByClassName('result-total')[0];

let resultValueBudgetDay = document.getElementsByClassName('result-total')[1];

let resultValueExpencesMonth = document.getElementsByClassName('result-total')[2];

let resultValueAdditionalIncome = document.getElementsByClassName('result-total')[3];

let resultValueAdditionalExpences = document.getElementsByClassName('result-total')[4];

let resultValueIncomePeriod = document.getElementsByClassName('result-total')[5];

let resultValueTargetMonth = document.getElementsByClassName('result-total')[6];


let salaryInp = document.querySelector('.salary-amount');
let incomeItemsTitle = document.querySelector('.income-title')[1];
let incomeItems = document.querySelectorAll('.income-items');
let addIncomeInp = document.querySelector('.additional_income-item')[0];
let addIncomeInm = document.querySelector('.additional_income-item')[1];
let expencesTitleInp = document.querySelector('.expenses-title')[1];
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let depositCheckInp = document.querySelector('#deposit-check');
let depositAmountInp = document.querySelector('.deposit-amount');
let depositPercentInp = document.querySelector('.deposit-percent');
let targetAmountInp = document.querySelector('.target-amount');
let periodSelectInp = document.querySelector('.period-select');
let periodAmount = document.querySelector('.period-amount');

let isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n)); //&& (n.trim() !== ''));
},
isWord = function(n) {
  return (isNaN(parseFloat(n)));
};

let appData = {
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  expense: [],
  addExpenses: [],
  mission: 100000,
  period: 11,
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  accumulatedMonth: 0,
  sum: 0,
  start: function() {

      appData.getExpenses();
      appData.getIncome();
      appData.getBudget();
      appData.getExpensesMonth();
      appData.getAddExpenses();
      appData.getAddIncome();
      appData.getTargetMonth();
      periodSelectInp.addEventListener('change', appData.getPeriod);
      appData.showResult();
  },

  addExpensesBlock: function() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, addButtonSecond);
    expensesItems = document.querySelectorAll('.expenses-items');

    if(expensesItems.length === 3) {
      addButtonSecond.style.display = 'none';
    }
  },

  addIncomeBlock: function() {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, addButtonFirst);
    incomeItems = document.querySelectorAll('.income-items');

    if(incomeItems.length === 3) {
      addButtonFirst.style.display = 'none';
    } 
  },

  showResult: function(){
    budgetMonthValue.value = appData.budgetMonth;
    resultValueBudgetDay.value = appData.budgetDay;
    resultValueExpencesMonth.value = appData.expensesMonth;
    resultValueAdditionalExpences.value = appData.addExpenses.join(', ');
    resultValueAdditionalIncome.value = appData.addIncome.join(', ');
    resultValueTargetMonth.value = Math.ceil(appData.getTargetMonth());
    resultValueIncomePeriod.value = appData.calcSavedMoney();
  },

  getExpenses: function() {
    expensesItems.forEach(function(item){
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if(itemExpenses !== '' && cashExpenses !== ''){
      appData.expenses[itemExpenses] = cashExpenses;
    }
    });
  },

  getIncome: function(){
    incomeItems.forEach(function(item){
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if(itemIncome !== '' && cashIncome !== '') {
        appData.income[itemIncome] = cashIncome;
      }
    });

    for (let key in appData.income) {
      appData.incomeMonth += parseFloat(appData.income[key]);
    }
  },

  getAddExpenses: function() {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
      item = item.trim();
      if (item !== ''){
        appData.addExpenses.push(item);
      }
    });
  },

  getAddIncome: function(){
    additionalIncomeItem.forEach(function(item){
      let itemValue = item.value.trim();
      if (itemValue !== ''){
        appData.addIncome.push(itemValue);
      }
    });
  },

  getExpensesMonth: function() {
    let sum = 0;

    for (let item in appData.expenses) {

        sum += parseFloat(appData.expenses[item]);
    }
    appData.expensesMonth = sum;
    return sum;
  },

  getBudget: function() {
    appData.budget = +salaryInp.value;
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.getExpensesMonth();
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    appData.accumulatedMonth = appData.budgetMonth;
  },

  getTargetMonth: function() {
    return targetAmountInp.value / appData.budgetMonth;
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

  getPeriod: function() {
      periodAmount.textContent = periodSelectInp.value;
      appData.showResult();
      console.log(periodAmount.textContent);
  },

  getInfoDeposit: function(){
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    if(appData.deposit){
      do {
        appData.percentDeposit = prompt('Какой годовой процент?', '7');
      } while (!isNumber(appData.percentDeposit));
      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      } while (!isNumber(appData.moneyDeposit));
    }
  },

  calcSavedMoney: function() {
    return appData.budgetMonth * periodSelectInp.value;
  }
};

let ifValue = function() {
  if (salaryInp.value === '') {
        alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
} else {
  appData.start();
}
};
buttonCalculate.addEventListener('click', ifValue);
addButtonSecond.addEventListener('click', appData.addExpensesBlock);
addButtonFirst.addEventListener('click', appData.addIncomeBlock);




