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

bodyElem.setAttribute('style', 'background-image: url(./image/adv.jpg)');

let bookTitle = book[4].querySelector('a');
bookTitle.textContent = 'Книга 3. this и Прототипы Объектов';

let secondBookElem = book[0].getElementsByTagName('li');
secondBookElem[3].after(secondBookElem[6]);
secondBookElem[4].after(secondBookElem[8]);
let fifthBookElem = book[5].getElementsByTagName('li');
fifthBookElem[1].after(fifthBookElem[9]);
fifthBookElem[9].after(fifthBookElem[3]);
fifthBookElem[4].after(fifthBookElem[9]);
fifthBookElem[8].after(fifthBookElem[6]);

newElem.textContent = "Глава 8: За пределами ES6";
let sixthBookElem = book[2].getElementsByTagName('li');
sixthBookElem[8].after(newElem);