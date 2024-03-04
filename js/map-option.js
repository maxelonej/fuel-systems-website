document.addEventListener("DOMContentLoaded", () => {
  let option1 = document.querySelector(".option-1");
  let option2 = document.querySelector(".option-2");
  // let option3 = document.querySelector('.option-3');

  let mapChoiceImg1 = document.querySelector(".option-1 .map-choice-img img");
  let mapChoiceImg2 = document.querySelector(".option-2 .map-choice-img img");
  // let mapChoiceImg3 = document.querySelector('.option-3 .map-choice-img img');

  let mapChoice1 = document.querySelector(".iframe-1");
  let mapChoice2 = document.querySelector(".iframe-2");
  // let mapChoice3 = document.querySelector('.iframe-3');

  option1.addEventListener("click", () => {
    mapChoiceImg1.style = "filter: var(--active-map);";
    mapChoiceImg2.style = "filter: var(--unactive-map);";
    // mapChoiceImg3.style = 'filter: let(--unactive-map);';

    mapChoice1.style = "display: block; border: 0;";
    mapChoice2.style = "display: none;";
    // mapChoice3.style = 'display: none;';
  });

  option2.addEventListener("click", () => {
    mapChoiceImg1.style = "filter: var(--unactive-map);";
    mapChoiceImg2.style = "filter: var(--active-map);";
    // mapChoiceImg3.style = 'filter: let(--unactive-map);';

    mapChoice1.style = "display: none;";
    mapChoice2.style = "display: block; border: 0;";
    // mapChoice3.style = 'display: none;';
  });
  // option3.addEventListener('click', () => {
  // 	mapChoiceImg1.style = 'filter: let(--unactive-map);';
  // 	mapChoiceImg2.style = 'filter: let(--unactive-map);';
  // 	mapChoiceImg3.style = 'filter: let(--active-map);';

  // 	mapChoice1.style = 'display: none;';
  // 	mapChoice2.style = 'display: none;';
  // 	mapChoice3.style = 'display: block; border: 0;';
  // })
});
