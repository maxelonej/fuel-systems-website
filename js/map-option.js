document.addEventListener('DOMContentLoaded', () => {
	var option1 = document.querySelector('.option-1');
	var option2 = document.querySelector('.option-2');
	var option3 = document.querySelector('.option-3');

	var mapChoiceImg1 = document.querySelector('.option-1 .map-choice-img img');
	var mapChoiceImg2 = document.querySelector('.option-2 .map-choice-img img');
	var mapChoiceImg3 = document.querySelector('.option-3 .map-choice-img img');

	var mapChoice1 = document.querySelector('.iframe-1');
	var mapChoice2 = document.querySelector('.iframe-2');
	var mapChoice3 = document.querySelector('.iframe-3');

	option1.addEventListener('click', () => {
		mapChoiceImg1.style = 'filter: var(--active-map);';
		mapChoiceImg2.style = 'filter: var(--unactive-map);';
		mapChoiceImg3.style = 'filter: var(--unactive-map);';

        mapChoice1.style = 'display: block; border: 0;';
		mapChoice2.style = 'display: none;';
		mapChoice3.style = 'display: none;';
	})

	option2.addEventListener('click', () => {
		mapChoiceImg1.style = 'filter: var(--unactive-map);';
		mapChoiceImg2.style = 'filter: var(--active-map);';
		mapChoiceImg3.style = 'filter: var(--unactive-map);';

        mapChoice1.style = 'display: none;';
		mapChoice2.style = 'display: block; border: 0;';
		mapChoice3.style = 'display: none;';
	})
	option3.addEventListener('click', () => {
		mapChoiceImg1.style = 'filter: var(--unactive-map);';
		mapChoiceImg2.style = 'filter: var(--unactive-map);';
		mapChoiceImg3.style = 'filter: var(--active-map);';

		mapChoice1.style = 'display: none;';
		mapChoice2.style = 'display: none;';
		mapChoice3.style = 'display: block; border: 0;';
	})
})
