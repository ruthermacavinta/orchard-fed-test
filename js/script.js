const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const openModalBtn1 = document.querySelector(".btn-open1");
const openModalBtn2 = document.querySelector(".btn-open2");
const openModalBtn3 = document.querySelector(".btn-open3");
const closeModalBtn1 = document.querySelector(".btn-close1");
const closeModalBtn2 = document.querySelector(".btn-close2");
const closeModalBtn3 = document.querySelector(".btn-close3");
const overlay = document.querySelector(".overlay");

const btnClick1 = document.querySelector('#btn-1');
const btnClick2 = document.querySelector('#btn-2');
const btnClick3 = document.querySelector('#btn-3');

// close modal function
const closeModal1 = function () {
  modal1.classList.add("hidden");
  overlay.classList.add("hidden");
};
const closeModal2 = function () {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};
const closeModal3 = function () {
  modal3.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn1.addEventListener("click", closeModal1);
closeModalBtn2.addEventListener("click", closeModal2);
closeModalBtn3.addEventListener("click", closeModal3);
overlay.addEventListener("click", closeModal1);
overlay.addEventListener("click", closeModal2);
overlay.addEventListener("click", closeModal3);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
    closeModal1();
  }
  if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal2();
  }
  if (e.key === "Escape" && !modal3.classList.contains("hidden")) {
    closeModal3();
  }
});

// open modal function
const openModal1 = function () {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const openModal2 = function () {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const openModal3 = function () {
  modal3.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtn1.addEventListener("click", openModal1);
openModalBtn2.addEventListener("click", openModal2);
openModalBtn3.addEventListener("click", openModal3);

// onclick event listener
btnClick1.addEventListener('click', e => {
    console.log(`Button 1 was click!`)
})
btnClick2.addEventListener('click', e => {
    console.log(`Button 2 was click!`)
})
btnClick3.addEventListener('click', e => {
    console.log(`Button 3 was click!`)
})