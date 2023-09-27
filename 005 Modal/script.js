"use strict";

const modal = document.querySelector(".modal");
console.log(modal);
const overlay = document.querySelector(".overlay");
const btlCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

  });

  btlCloseModal.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add   ('hidden');

  });
  overlay.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

  });
  
}
