const board = document.getElementById('imperative');
let stock = 5;

const title = document.createElement('h2');
title.textContent = 'Tomatoes (imperative)';

const label = document.createElement('p');
label.textContent = 'In stock: ' + stock + ' kg';

const button = document.createElement('button');
button.textContent = 'Sell 1 kg';

button.addEventListener('click', function () {
  stock = stock - 1;
  label.textContent = 'In stock: ' + stock + ' kg';
  if (stock === 0) {
    button.disabled = true;
  }
});

board.append(title, label, button);
