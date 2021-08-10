const select = document.getElementById('selectId');
const options = document.getElementById('selectId').options;

const selectedItems = [];

const checkSelectedItems = () => {
  selectedItems = Array.from(options).filter((option) => option.getAttribute('selected') !== null);
};

// Array.from(options).forEach((option) => {
//   if (option.getAttribute('data-level') === null) {
//     option.classList.add('collapsed');
//   } else {
//     option.classList.add('hidden');
//   }
// });

select.addEventListener('click', function (e) {
  e.target.toggleAttribute('selected');
  checkSelectedItems();
});

const placeholder = 'Код ОКРБ или наименование закупаемой продукции';

document.body.insertAdjacentHTML(
  'afterbegin',
  `<div class='container'>
      <div class='first-component' id='first-component'>
        <div class='wrapper'>
          <h2>Тендеры в роли Заказчика</h2>
          <span class='selectedItems'>Показать выбранное ()</span>
        </div>
        <input class='selectionMenu' id='customerMenu' placeholder='${placeholder}' readonly>
        <div class='wrapper'>
          <h2>Тендеры в роли Заказчика</h2>
          <span class='selectedItems'>Показать выбранное (0)</span>
        </div>
        <input class='selectionMenu' id='providerMenu' placeholder='${placeholder}' readonly>
      </div>
      <div class='second-component hidden' id='second-component'>
        <h2 id='arrowBack'>Реализуемые товары</h2>
        <input class='selectionMenu'>
      </div>
  </div>`,
);

const customerMenu = document.getElementById('customerMenu');
const firstComponent = document.getElementById('first-component');
const secondComponent = document.getElementById('second-component');
const arrowBack = document.getElementById('arrowBack');

customerMenu.addEventListener('click', function () {
  firstComponent.classList.add('hidden');
  select.classList.remove('hidden');
  secondComponent.classList.remove('hidden');
});

providerMenu.addEventListener('click', function () {
  firstComponent.classList.add('hidden');
  select.classList.remove('hidden');
  secondComponent.classList.remove('hidden');
});

providerMenu.addEventListener('click', function () {
  firstComponent.classList.add('hidden');
  select.classList.remove('hidden');
  secondComponent.classList.remove('hidden');
});

arrowBack.addEventListener('click', function () {
  firstComponent.classList.remove('hidden');
  select.classList.add('hidden');
  secondComponent.classList.add('hidden');
});
