let popupImg = document.querySelector('.popup');

function modal(hr) {
  document.querySelector('#pic1').src=hr;
  popupImg.classList.add('active');
}

function popupOpen() {
  popupImg.classList.add('active')
}

function modalClose() {
  document.querySelector('.popup-close').addEventListener('click', popupClose);
}

function popupClose() {
  popupImg.classList.remove('active')
}

