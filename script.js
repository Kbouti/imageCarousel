// Using prettier setup https://www.youtube.com/watch?v=DqfQ4DPnRqI
// First steps to build project environment:

// 1. Initiate NPM to create JSON file:
// npm init -y

// 2. Install prettier:
// npm i --save-dev --save-exact prettier

// 3. create .prettierignore file and add node_modules

// 4. If desired, create a .prettierrc file to indicate preferences. I'll leave it in the stock configuration
// 5. If needed, configure with esLint

// Found a good carousel tutorial: https://www.youtube.com/watch?v=UnWd2END-IY

resetRadio();

setInterval(slideForward, 5000);

let slides = document.querySelectorAll("div.slide");

function unhideSelected(selected) {
  for (const slide of slides) {
    if (slide.id === selected) {
      slide.classList.remove(`hidden`);
    } else {
      if (!slide.classList.contains(`hidden`)) {
        slide.classList.add(`hidden`);
      }
    }
  }
  return;
}

function getCheckedRadio() {
  const checkedRadio = document.querySelector(
    `input[name=carouselSelector]:checked`
  ).value;
  return checkedRadio;
}

function convertRadioToSlide(radio) {
  let indexNumber = radio.slice(-1);
  let slide = `slide${indexNumber}`;
  return slide;
}

let radio = document.querySelectorAll(`input[name=carouselSelector]`);

for (let button of radio) {
  button.addEventListener(`click`, function () {
    let checkedRadio = getCheckedRadio();
    let slide = convertRadioToSlide(checkedRadio);
    unhideSelected(slide);
  });
}

function slideForward() {
  let checkedRadio = getCheckedRadio();
  let index = checkedRadio.slice(-1);
  let indexInteger = +index;
  indexInteger++;
  indexInteger = checkIndexInteger(indexInteger);
  let newSlide = `slide${indexInteger}`;
  unhideSelected(newSlide);
  let radio = document.getElementById(`radio${indexInteger}`);
  radio.checked = true;
}

function slideBackward() {
  let checkedRadio = getCheckedRadio();
  let index = checkedRadio.slice(-1);
  let indexInteger = +index;
  indexInteger--;
  indexInteger = checkIndexInteger(indexInteger);
  let newSlide = `slide${indexInteger}`;
  unhideSelected(newSlide);
  let radio = document.getElementById(`radio${indexInteger}`);
  radio.checked = true;
}

let rightArrowButton = document.getElementsByClassName("arrowButton right");
let leftArrowButton = document.getElementsByClassName("arrowButton left");

rightArrowButton[0].addEventListener(`click`, function () {
  slideForward();
});

leftArrowButton[0].addEventListener(`click`, function () {
  slideBackward();
});

function checkIndexInteger(index) {
  if (index > 5) {
    index = 1;
  } else if (index < 1) {
    index = 5;
  }
  return index;
}

function resetRadio(){
    let radio = document.getElementById(`radio1`);
    radio.checked = true;
}
