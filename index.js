const select = document.querySelector('select');
const op = select.options;
console.log(op);

const div = document.createElement('div');
const input = document.createElement('input');

select.before(div);
div.prepend(input);
input.placeholder = 'Код ОКРБ или наименование закупаемой продукции';
div.className = 'container';

//

const selectedLines = [];

select.addEventListener('click', function (e) {
  selectedLines.push(select.options.selectedIndex);
  console.log('selectedLines', selectedLines);
});

input.addEventListener('click', function (e) {
  select.classList.toggle('visually-hidden');
});
