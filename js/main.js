'use strict';
/*VARIABLES*/ 
const formElement = document.querySelector('.js-new-form');
const dataElement = document.querySelector('.js-list');
const input_search_desc = document.querySelector('.js_in_search_desc');
const menu = document.querySelector('.js-menu-nav');
const button = document.querySelector('.js-btn-add');
const buttonCancel = document.querySelector('.js-cancel');
const buttonSearch = document.querySelector('.js-button-search');
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
  'Risueño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kitten2Race = 'British Shorthair';
/*GATO 2*/ 

/*GATO 3*/ 
const kitten3Image = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kitten3Name = 'Cielo';
const kitten3NameUpperCase = kitten3Name.toUpperCase();
const kitten3Desc =
  'Risueño, juguetón, le guta estar callado y que nadie le moleste. Es una maravilla acariciarle!';
const kitten3Race = 'British Shorthair';
/*GATO 3*/ 

//formElement.classList.remove("collapsed");
const kitten1Element = renderKitten(kitten1Image, kitten1Desc, kitten1Name, kitten1Race);
const kitten2Element = renderKitten(kitten2Image, kitten2Desc, kitten2Name, kitten2Race);
const kitten3Element = renderKitten(kitten3Image, kitten3Desc, kitten3Name, kitten3Race);
dataElement.innerHTML = kitten1Element + kitten2Element + kitten3Element;

//Esto es el filtro de busqueda, cuando vale '', luego en la función lo sustituyo por el valor del input (gato).

//Estos son los dato variables, lo que va a ir dentor de nuestra función. Utilizamos datalElement (es el UL, el padre de las LI, los gatos) con innerHTML para pintar en la página la información (un gato). Despues con += le añadimos la función que hemos llamado antes (renderKitten) y en ella sustituimos los parametros específicos de dicja función (líneas de las 17 a la 40). 


//-----------------------FUNCIONES----------------------------//
//Esto quita el buscador
function showNewCatForm(ev) {
  ev.preventDefault();
  formElement.classList.remove('collapsed');
}
//Esto añade el buscador
function hideNewCatForm(ev) {
  ev.preventDefault();
  formElement.classList.add('collapsed');
}

//Esto es la función manejadora
function handleClickNewCatForm(event) {
  event.preventDefault();
  if (formElement.classList.contains('collapsed')) {
    formElement.classList.remove("collapsed");
  } else {
    formElement.classList.add("collapsed");
  }
}

//Hemos creado una función para añadir gatitos, lo hacemos cuando clickamos en añadir. Para eso hemos tenido que crear un addEventListener (linea 133)
function addNewKitten(event) {
  event.preventDefault() 
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';

  } else {

  }
}

//Hemos creado una función para cancelar, lo hacemos cuando clickamos en cancelar. Para eso hemos tenido que crear un addEventListener (linea 137)

const cancelNewKitten = (event) => {
  event.preventDefault();
  formElement.classList.add('collapsed'); 
};

//Para crear la función general de los gatos cogemos el ul (los li son los gatitos) y creamos el esqueleto con todos los elementos que lo contienen. Utilizamos las variables de forma neutra (sin contenido $(contenido)) para después cambiarlas con los datos que queramos (lineas de 50-58).

function renderKitten(url, desc, name, race) {
  const kittenElement =  `<li class="card"> <article> <img class="card_img" src="${url}" alt="gatito"/><h3 class="card_title"> ${name}</h3><h4 class="card_race">${race}</h4><p class="card_description"> ${desc}</p></article></li>`;

  return kittenElement;
}

const filterKitten = (event) => {
  event.preventDefault();
  dataElement.innerHTML = '';
  const descrSearchText = input_search_desc.value;

  if (kitten1Desc.includes(descrSearchText)) {
      dataElement.innerHTML += renderKitten(kitten1Image, kitten1Desc, kitten1Name, kitten1Race);
  }
  if (kitten2Desc.includes(descrSearchText)) {
    dataElement.innerHTML += renderKitten(kitten2Image, kitten2Desc, kitten2Name, kitten2Race);
  }
  if (kitten3Desc.includes(descrSearchText)) {
    dataElement.innerHTML += renderKitten(kitten3Image, kitten3Desc, kitten3Name, kitten3Race);
  }
};

function renderRace (event){
  event.preventDefault();
};

//-----------------------FUNCIONES----------------------------//

//-----------------------EVENTOS----------------------------//

/*menu.addEventListener('click', (event) => {
  event.preventDefault() 
  
  if (formElement.classList.contains('collapsed')) {
    formElement.classList.remove("collapsed");
  } else {
    formElement.classList.add("collapsed");
  }
  
});*/

//Eventos que hacemos al clickar. 

button.addEventListener('click', addNewKitten);

buttonCancel.addEventListener('click', cancelNewKitten);

buttonSearch.addEventListener('click', filterKitten);

menu.addEventListener('click', handleClickNewCatForm);

//-----------------------EVENTOS----------------------------//





