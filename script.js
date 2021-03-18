'use strict';
const advertisement = document.querySelector('.adv'),
      booksParent = document.querySelector('.books'),
      book = document.querySelectorAll('.book'),
      newElem = document.createElement('li'),
      bodyElem = document.querySelector('body');


advertisement.remove();
booksParent.prepend(book[1]);
booksParent.append(book[2]);
book[3].before(book[4]);
//bodyElem.setAttribute('style', 'background-image: url(./image/adv.jpg)');
newElem.textContent = "Глава 8: За пределами ES6";