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

let slides = document.querySelectorAll("div.slide");
console.log(slides.length);

function findSelectedSlide() {
  // This returns the id of the slide that isn't hidden. It assumes only one slide can be visible, but does not check further once it finds a visible slide
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("hidden")) {
      console.log(`slide ${slides[i].id} is hidden`);
    } else {
      let selectedId = slides[i].id;
      console.log(`The selected slide is ${selectedId}`);
      return selectedId;
    }
  }
}

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
  console.log(checkedRadio);
  return checkedRadio;
}

function convertRadioToSlide(radio) {
  let indexNumber = radio.slice(-1);
  console.log(indexNumber);

  let slide = `slide${indexNumber}`;
  console.log(slide);
  return slide;
}

let radio = document.querySelectorAll(`input[name=carouselSelector]`);

for (let button of radio){
    button.addEventListener(`click`, function () {
        console.log(`radio event triggered`);
        let checkedRadio = getCheckedRadio();
        let slide = convertRadioToSlide(checkedRadio);
        unhideSelected(slide);
      });
}



function slideForward() {
    let checkedRadio = getCheckedRadio();
console.log(checkedRadio);

let index = checkedRadio.slice(-1);
console.log(index);

let indexInteger = +index;
indexInteger++;
let newSlide = `slide${indexInteger}`;
console.log(newSlide);

unhideSelected(newSlide);
let radio = document.getElementById(`radio${indexInteger}`);
radio.checked = true;

}
function slideBackward() {}






let rightArrowButton = document.getElementsByClassName("arrowButton right");
let leftArrowButton = document.getElementsByClassName("arrowButton left");

rightArrowButton[0].addEventListener(`click`, function(){
    slideForward();
})

leftArrowButton[0].addEventListener(`click`, function(){
    slideBackward();
})