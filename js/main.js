'use strict';
/*VARIABLES*/ 
const formElement = document.querySelector('.js-new-form');
const dataElement = document.querySelector('.js-list');
const input_search_desc = document.querySelector('.js_in_search_desc');
const menu = document.querySelector('.js-menu-nav');
const button = document.querySelector('.js-btn-add');
const buttonCancel = document.querySelector('.js-cancel');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');

/*VARIABLES*/ 

/*GATO 1*/ 
const kitten1Image = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kitten1Name = 'Anastacio';
const kitten1NameUpperCase = kitten1Name.toUpperCase();
const kitten1Desc =
  'Risueño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kitten1Race = 'British Shorthair';
/*GATO 1*/ 

/*GATO 2*/ 
const kitten2Image = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kitten2Name = 'Fiona';
const kitten2NameUpperCase = kitten2Name.toUpperCase();
const kitten2Desc =
  'Risye, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kitten2Race = 'British Shorthair';
/*GATO 2*/ 

/*GATO 3*/ 
const kitten3Image = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kitten3Name = 'Cielo';
const kitten3NameUpperCase = kitten3Name.toUpperCase();
const kitten3Desc =
  'Risueño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kitten3Race = 'British Shorthair';
/*GATO 3*/ 

const kitten1Element = `<li class="card"> <article> <img class="card_img" src="${kitten1Image}" alt="gatito"/><h3 class="card_title"> ${kitten1NameUpperCase}</h3><h4 class="card_race">${kitten1Race}</h4><p class="card_description"> ${kitten1Desc}</p></article></li>`;
const kitten2Element = `<li class="card"> <article> <img class="card_img" src="${kitten2Image}" alt="gatito"/><h3 class="card_title"> ${kitten2NameUpperCase}</h3><h4 class="card_race">${kitten2Race}</h4><p class="card_description"> ${kitten2Desc}</p></article></li>`;
const kitten3Element = `<li class="card"> <article> <img class="card_img" src="${kitten3Image}" alt="gatito"/><h3 class="card_title"> ${kitten3NameUpperCase}</h3><h4 class="card_race">${kitten3Race}</h4><p class="card_description"> ${kitten3Desc}</p></article></li>`;



//formElement.classList.remove("collapsed");

//dataElement.innerHTML = kitten1Element + kitten2Element + kitten3Element;

input_search_desc.value = '';
const descrSearchText = input_search_desc.value;

if( kitten1Desc.includes(descrSearchText) ) {
  dataElement.innerHTML += kitten1Element;
  }
  
 if( kitten2Desc.includes(descrSearchText) ) {
  dataElement.innerHTML += kitten2Element;
}
  
if( kitten3Desc.includes(descrSearchText) ) {
  dataElement.innerHTML += kitten3Element;
}

//-----------------------EVENTOS----------------------------//

/*menu.addEventListener('click', (event) => {
  event.preventDefault() 
  
  if (formElement.classList.contains('collapsed')) {
    formElement.classList.remove("collapsed");
  } else {
    formElement.classList.add("collapsed");
  }
  
});*/

button.addEventListener('click', (event) => {
  event.preventDefault() 
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';

  } else {

  }
});

buttonCancel.addEventListener('click', (event) => {
  event.preventDefault();
  formElement.classList.add('collapsed'); 
});

menu.addEventListener('click', handleClickNewCatForm);

//-----------------------EVENTOS----------------------------//

//-----------------------FUNCIONES----------------------------//

function showNewCatForm(ev) {
  ev.preventDefault();
  formElement.classList.remove('collapsed');
}

function hideNewCatForm(ev) {
  ev.preventDefault();
  formElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (formElement.classList.contains('collapsed')) {
    formElement.classList.remove("collapsed");
  } else {
    formElement.classList.add("collapsed");
  }
}

function renderKitten(url, desc, name, race) {
  //completa el código
}

let url: ;
let desc: ;
let name: ;
let race: ;


