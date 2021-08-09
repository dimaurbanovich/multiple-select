const select = document.getElementById('selectId');
const options = document.getElementById('selectId').options;
let selectedItems = 0;

const checkSelectedItems = () => {
  selectedItems = Array.from(options).filter((option) => option.getAttribute('selected') !== null);

  console.log(selectedItems.length);
};

Array.from(options).forEach((option) => {
  // console.log(option.getAttribute('data-level'));
  if (option.getAttribute('data-level') === null) {
    option.classList.add('collapsed');
  } else {
    option.classList.add('hidden');
  }
});

select.addEventListener('click', function (e) {
  e.target.toggleAttribute('selected');
  checkSelectedItems();
});

const placeholder = 'Код ОКРБ или наименование закупаемой продукции';

select.insertAdjacentHTML(
  'beforebegin',
  `<div class='container'>
  <div class='wrapper'>
  <h2>Тендеры в роли Заказчика</h2>
  <span class='selectedItems'>Показать выбранное ()</span>
  </div>
  <input class='selectionMenu' id='customerMenu' placeholder='${placeholder}' readonly>
  <div class='wrapper'>
  <h2>Тендеры в роли Заказчика</h2>
  <span class='selectedItems'>Показать выбранное (0)</span>
  </div><input class='selectionMenu' id='providerMenu' placeholder='${placeholder}' readonly>
  </div>`,
);

const customerMenu = document.getElementById('customerMenu');
const providerMenu = document.getElementById('providerMenu');

customerMenu.addEventListener('click', function () {
  select.classList.toggle('visually-hidden');
  console.log('fwwfw');
});

providerMenu.addEventListener('click', function () {
  select.classList.toggle('visually-hidden');
  console.log('fwwfw');
});

const valueSelectionWindow = () => {
  options.forEach;
};

// select.addEventListener('change', function () {
//   console.log(selectedItems);
// });

// select.innerHTML = newOptions;

// Array.from(options).forEach(option => {
//   console.log(option.getAttribute());}
//   // if (options.get)
//   //   options.nextElementSibling.style.display = "none";}

// options.addEventListener('click', function(event){
//     event.preventDefault();
//     const subMenuList = event.target.nextElementSibling;
//     if(subMenuList.style.display=="none"){
//         subMenuList.style.display = "block";
//     }
//     else {
//         subMenuList.style.display = "none";
//     }
//     event.stopPropagation();
// });

// const select = document.getElementById('selectId');
// const options = document.getElementById('selectId').options;
// // console.log('options', options);

// const newOptions = Array.from(options).map((option) => {
//   const optionLabel = option.innerHTML;
//   // console.log(optionLabel);

//   const optionValue = option.value;
//   // console.log(optionValue);

//   const newInnerHtml = `<input type="checkbox" id="${optionValue}"> <label for=${optionValue}> ${optionLabel}</label>`;

//   option.innerHTML = newInnerHtml;

//   return option;
// });

// // console.log('newOptions', newOptions);

// // // select.innerHtml = newOptions;
// // // console.log(newOptions);

// // console.log(newOptions);

// // const div = document.createElement('div');
// // const input = document.createElement('input');

// // select.before(div);
// // div.prepend(input);
// // input.placeholder = 'Код ОКРБ или наименование закупаемой продукции';
// // div.className = 'container';

// // //

// // const selectedLines = [];

// select.addEventListener('click', function (e) {
//   selectedLines.push(select.options.selectedIndex);
//   console.log('selectedLines', selectedLines);
// });

// input.addEventListener('click', function (e) {
//   select.classList.toggle('visually-hidden');
// });

// function getSelectValues(select) {
//   var result = [];
//   var options = select && select.options;
//   var opt;

//   for (var i = 0, iLen = options.length; i < iLen; i++) {
//     opt = options[i];

//     if (opt.selected) {
//       result.push(opt.value || opt.text);
//     }
//   }
//   return result;
// }

// console.log(result)
