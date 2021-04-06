import Switch from './components/Switch';
import CustomSelect from './components/CustomSelect';

export class App {
	constructor() {
		document.documentElement.classList.add('js');
		new Switch();
		this.handleCustomSelect();
		this.getTranslate();
	}

	handleCustomSelect() {
		const customSelect = document.getElementsByClassName('js-select');
		if (customSelect.length > 0) {
			const selectArray = [];
			for (let i = 0; i < customSelect.length; i++) {
				this.customSelect = new CustomSelect(customSelect[i]);
				selectArray.push(this.customSelect);
			}

			// listen for key events
			window.addEventListener('keyup', (event) => {
				if (
					(event.keyCode && event.keyCode == 27) ||
					(event.key && event.key.toLowerCase() == 'escape')
				) {
					console.log('oke');
					// close custom select on 'Esc'
					selectArray.forEach((element) => {
						element.moveFocusToSelectTrigger(); // if focus is within dropdown, move it to dropdown trigger
						element.toggleCustomSelect('false'); // close dropdown
					});
				}
			});
			// close custom select when clicking outside it
			window.addEventListener('click', (event) => {
				selectArray.forEach((element) => {
					element.checkCustomSelectClick(event.target);
				});
			});
		}
	}

	getTranslate() {
		const constructAPIEndpoint = (word, language, version = 'v1') => {
			return `https://dictionary-api-five.vercel.app/api/${version}/entries/${language}/${word}`;
		};

		const form = document.querySelector('.lookup-form');

		form.addEventListener('submit', function (e) {
			e.preventDefault();

			const word = document.querySelector('.search-input__input').value;
			const language = document.querySelector('[name="lang"]').value;

			return window.location.assign(constructAPIEndpoint(word, language));
		});
	}

	static init() {
		const index = new App();
		return index;
	}
}

(function () {
	App.init();
})();
