const select = document.getElementById('selectId');
const options = document.getElementById('selectId').options;

const placeholder = 'Код ОКРБ или наименование закупаемой продукции';

document.body.insertAdjacentHTML(
  'afterbegin',
  `<div class='container'>
      <div class='first-component' id='first-component'>
        <div class='wrapper'>
          <h2>Тендеры в роли Заказчика</h2>
          <span class='selectedItems' id='customer-counter'></span>
        </div>
        <input class='selectionMenu' id='customerMenu' placeholder='${placeholder}' readonly>
        <div class='wrapper'>
          <h2>Тендеры в роли Поставщика</h2>
          <span class='selectedItems' id='provider-counter'></span>
        </div>
        <input class='selectionMenu' id='providerMenu' placeholder='${placeholder}' readonly>
      </div>
      <div class='second-component hidden' id='second-component'>
        <div class='header-wrapper' id='headerWrapper'>
          <h2 >Реализуемые товары</h2>
          <input id='search'>
        </div>
        <div class='footer-wrapper'>
          <button class='applyBtn'>Применить</button>
          <span class='clearBtn'>Очистить</span>
        </div>
      </div>
  </div>`,
);

const customerMenu = document.getElementById('customerMenu');
const headerWrapper = document.getElementById('headerWrapper');
const firstComponent = document.getElementById('first-component');
const secondComponent = document.getElementById('second-component');
const customerCounter = document.getElementById('customer-counter');
const providerCounter = document.getElementById('provider-counter');
const applyBtn = document.querySelector('.applyBtn');
const clearBtn = document.querySelector('.clearBtn');
const search = document.querySelector('#search');

headerWrapper.after(select);

let selectedItems = [];
let selectedNewItems = [];

select.addEventListener('click', function (e) {
  e.target.toggleAttribute('selected');

  selectedNewItems = Array.from(options).filter(
    (option) => option.getAttribute('selected') !== null,
  );

  getSelectedValue(selectedItems);
});

const getSelectedValue = (items) => {
  let selectedValue = Array.from(items).map((option) => option.innerHTML);
  if (selectedValue[0] !== undefined) {
    customerMenu.value = `${selectedValue[0]}`;
  } else {
    customerMenu.value = ``;
  }
};
// Array.from(options).forEach((option) => {
//   if (option.getAttribute('data-level') === null) {
//     option.classList.add('collapsed');
//   } else {
//     option.classList.add('hidden');
//   }
// });

// select.addEventListener('click', function (e) {
//   e.target.toggleAttribute('selected');
//   checkSelectedItems();
//   // console.log(e.target);
//   // let dataLevel = e.target.getAttribute('data-level');
//   // Array.from(options).forEach((option) => {
//   //   let optAttribute = option.getAttribute();
//   //   if (dataLevel >= optAttribute || dataLevel === null) {
//   //     console.log('ddgrgr');
//   //   }
//   // });
// });

const backToFirstComponent = () => {
  firstComponent.classList.remove('hidden');
  select.classList.add('hidden');
  secondComponent.classList.add('hidden');
};

const goToSecondComponent = () => {
  firstComponent.classList.add('hidden');
  select.classList.remove('hidden');
  secondComponent.classList.remove('hidden');
};

customerMenu.addEventListener('click', function () {
  goToSecondComponent();
});

providerMenu.addEventListener('click', function () {
  goToSecondComponent();
});

providerMenu.addEventListener('click', function () {
  goToSecondComponent();
});

customerCounter.addEventListener('click', function () {
  goToSecondComponent();
});

providerCounter.addEventListener('click', function () {
  goToSecondComponent();
});

clearBtn.addEventListener('click', function () {});

applyBtn.addEventListener('click', function () {
  selectedNewItems = Array.from(options).filter(
    (option) => option.getAttribute('selected') !== null,
  );
  selectedItems = selectedNewItems;
  if (selectedItems.length !== 0) {
    customerCounter.innerHTML = `Показать выбранное (${selectedItems.length})`;
    providerCounter.innerHTML = `Показать выбранное (${selectedItems.length})`;
  } else {
    customerCounter.innerHTML = ``;
    providerCounter.innerHTML = ``;
  }
  getSelectedValue(selectedItems);
  backToFirstComponent();
});

search.addEventListener('change', function () {
  let text = search.innerHTML;
  Array.from(options).forEach((option) => {
    if (option.textContent == text) {
    }
  });
});
