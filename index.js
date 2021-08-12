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
          <h2 id='arrowBack'>Реализуемые товары</h2>
          <input type=''seaarch id='search'>
        </div>
        <div class='footer-wrapper'>
          <button class='applyBtn' id='applyBtn'>Применить</button>
          <span class='clearBtn' id='clearBtn'>Очистить</span>
        </div>
      </div>
  </div>`,
);

const customerMenu = document.getElementById('customerMenu');
const providerMenu = document.getElementById('providerMenu');
const headerWrapper = document.getElementById('headerWrapper');
const firstComponent = document.getElementById('first-component');
const secondComponent = document.getElementById('second-component');
const customerCounter = document.getElementById('customer-counter');
const providerCounter = document.getElementById('provider-counter');
const applyBtn = document.getElementById('applyBtn');
const clearBtn = document.getElementById('clearBtn');
const search = document.getElementById('search');
const arrowBack = document.getElementById('arrowBack');

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
  customerMenu.value = selectedValue.length ? selectedValue[0] : '';
  providerMenu.value = selectedValue.length ? selectedValue[0] : '';
};

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

arrowBack.addEventListener('click', function () {
  backToFirstComponent();
});

clearBtn.addEventListener('click', function () {
  for (let i = 0; i < options.length; i++) {
    options[i].removeAttribute('selected');
    options[i].selected = false;
  }
});

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

search.addEventListener('input', function () {
  let searchText = search.value;
  for (let i = 0; i < options.length; i++) {
    if (options[i].innerText.search(searchText) == -1) {
      options[i].classList.add('hidden');
    } else {
      options[i].classList.remove('hidden');
    }
  }
});
