export default class CustomSelect {
	trigger = false;
	dropdown = false;
	customOptions = false;
	optionIndex = 0;

	constructor(element) {
		this.element = element;
		this.select = this.element.getElementsByTagName('select')[0];
		this.optGroups = this.select.getElementsByTagName('optgroup');
		this.options = this.select.getElementsByTagName('option');
		this.selectedOption = this.getSelectedOptionText();
		this.selectId = this.select.getAttribute('id');
		this.arrowIcon = this.element.getElementsByTagName('svg');
		this.label = document.querySelector('[for="' + this.selectId + '"]');

		this.initCustomSelect();
		this.initCustomSelectEvents();
	}

	initCustomSelect() {
		this.element.insertAdjacentHTML(
			'beforeend',
			this.initButtonSelect() + this.initListSelect()
		);

		this.dropdown = this.element.getElementsByClassName(
			'js-select__dropdown'
		)[0];
		this.trigger = this.element.getElementsByClassName(
			'js-select__button'
		)[0];
		this.customOptions = this.dropdown.getElementsByClassName(
			'js-select__item'
		);

		// hide default select
		this.select.classList.add('is-hidden');
		if (this.arrowIcon.length > 0) {
			this.arrowIcon[0].style.display = 'none';
		}

		// place dropdown
		this.placeDropdown();
	}

	initCustomSelectEvents() {
		// option selection in dropdown
		this.initSelection();

		this.trigger.addEventListener('click', () => {
			this.toggleCustomSelect(false);
		});

		if (this.label) {
			this.label.addEventListener('click', () => {
				this.moveFocus(this.trigger);
			});
		}

		this.dropdown.addEventListener('keydown', (event) => {
			if (
				(event.keyCode && event.keyCode == 38) ||
				(event.key && event.key.toLowerCase() == 'arrowup')
			) {
				this.keyboardCustomSelect('prev', event);
			} else if (
				(event.keyCode && event.keyCode == 40) ||
				(event.key && event.key.toLowerCase() == 'arrowdown')
			) {
				this.keyboardCustomSelect('next', event);
			}
		});

		// native <select> element has been updated -> update custom select as well
		this.element.addEventListener('select-updated', (event) => {
			this.resetCustomSelect();
		});
	}

	toggleCustomSelect(bool) {
		let ariaExpanded;

		if (bool) {
			ariaExpanded = bool;
		} else {
			ariaExpanded =
				this.trigger.getAttribute('aria-expanded') === 'true'
					? 'false'
					: 'true';
		}
		this.trigger.setAttribute('aria-expanded', ariaExpanded);

		if (ariaExpanded === 'true') {
			const selectedOption = this.getSelectedOption();
			this.moveFocus(selectedOption); // fallback if transition is not supported
			this.dropdown.addEventListener('transitionend', (cb) => {
				this.moveFocus(selectedOption);
				this.dropdown.removeEventListener('transitionend', cb);
			});
			this.placeDropdown(); // place dropdown based on available space
		}
	}

	placeDropdown() {
		this.dropdown.classList.remove('select__dropdown--right');
		this.dropdown.classList.remove('select__dropdown--up');
		const triggerBoundingRect = this.trigger.getBoundingClientRect();

		if (
			document.documentElement.clientWidth - 5 <
			triggerBoundingRect.left + this.dropdown.offsetWidth
		) {
			this.dropdown.classList.add('select__dropdown--right');
		} else {
			this.dropdown.classList.remove('select__dropdown--right');
		}

		const moveUp =
			window.innerHeight - triggerBoundingRect.bottom - 5 <
			triggerBoundingRect.top;

		if (moveUp) {
			this.dropdown.classList.add('select__dropdown--up');
		} else {
			this.dropdown.classList.remove('select__dropdown--up');
		}

		const maxHeight = moveUp
			? triggerBoundingRect.top - 20
			: window.innerHeight - triggerBoundingRect.bottom - 20;
		this.dropdown.setAttribute(
			'style',
			'max-height: ' +
				maxHeight +
				'px; width: ' +
				triggerBoundingRect.width +
				'px;'
		);
	}

	keyboardCustomSelect(direction, event) {
		event.preventDefault();
		const customOptions = Array.from(this.customOptions);
		let index = customOptions.indexOf(document.activeElement);
		index = direction == 'next' ? index + 1 : index - 1;

		if (index < 0) {
			index = customOptions.length - 1;
		}

		if (index >= customOptions.length) {
			index = 0;
		}

		this.moveFocus(customOptions[index]);
	}

	moveFocus(element) {
		if (!element) {
			element = document.getElementsByTagName('body')[0];
		}
		element.focus();
		if (document.activeElement !== element) {
			element.setAttribute('tabindex', '-1');
			element.focus();
		}
	}

	initSelection() {
		// option selection
		this.dropdown.addEventListener('click', (event) => {
			const option = event.target.closest('.js-select__item');
			if (!option) return;
			this.selectOption(option);
		});
	}

	selectOption(option) {
		if (
			option.hasAttribute('aria-selected') &&
			option.getAttribute('aria-selected') == 'true'
		) {
			// selecting the same option
			this.trigger.setAttribute('aria-expanded', 'false'); // hide dropdown
		} else {
			const selectedOption = this.dropdown.querySelector(
				'[aria-selected="true"]'
			);
			if (selectedOption) {
				selectedOption.setAttribute('aria-selected', 'false');
			}
			option.setAttribute('aria-selected', 'true');
			this.trigger.getElementsByClassName(
				'js-select__label'
			)[0].textContent = option.textContent;
			this.trigger.setAttribute('aria-expanded', 'false');
			// new option has been selected -> update native <select> element _ arai-label of trigger <button>
			this.updateNativeSelect(option.getAttribute('data-index'));
			this.updateTriggerAria();
		}
		// move focus back to trigger
		this.trigger.focus();
	}

	updateNativeSelect(index) {
		this.select.selectedIndex = index;
		this.select.dispatchEvent(new CustomEvent('change', { bubbles: true }));
	}

	updateTriggerAria() {
		this.trigger.setAttribute(
			'aria-label',
			this.options[this.select.selectedIndex].innerHTML +
				', ' +
				this.label.textContent
		);
	}

	getSelectedOptionText() {
		let label = '';
		if ('selectedIndex' in this.select) {
			label = this.options[this.select.selectedIndex].text;
		} else {
			label = this.select.querySelector('option[selected]').text;
		}
		return label;
	}

	initButtonSelect() {
		const customClasses = this.element.getAttribute('data-trigger-class')
			? ' ' + this.element.getAttribute('data-trigger-class')
			: '';
		const label =
			this.options[this.select.selectedIndex].innerHTML +
			', ' +
			this.label.textContent;
		let button =
			'<button type="button" class="js-select__button select__button' +
			customClasses +
			'" aria-label="' +
			label +
			'" aria-expanded="false" aria-controls="' +
			this.selectId +
			'-dropdown"><span aria-hidden="true" class="js-select__label select__label">' +
			this.selectedOption +
			'</span>';
		if (this.arrowIcon.length > 0 && this.arrowIcon[0].outerHTML) {
			const clone = this.arrowIcon[0].cloneNode(true);
			clone.classList.remove('select__icon');
			button = button + clone.outerHTML;
		}

		return button + '</button>';
	}

	initListSelect() {
		let list =
			'<div class="js-select__dropdown select__dropdown" aria-describedby="' +
			this.selectId +
			'-description" id="' +
			this.selectId +
			'-dropdown">';
		list = list + this.getSelectLabelSR();

		if (this.optGroups.length > 0) {
			for (let i = 0; i < this.optGroups.length; i++) {
				const optGroupList = this.optGroups[i].getElementsByTagName(
					'option'
				);
				const optGroupLabel =
					'<li><span class="select__item select__item--optgroup">' +
					this.optGroups[i].getAttribute('label') +
					'</span></li>';
				list =
					list +
					'<ul class="select__list" role="listbox">' +
					optGroupLabel +
					this.getOptionsList(optGroupList) +
					'</ul>';
			}
		} else {
			list =
				list +
				'<ul class="select__list" role="listbox">' +
				this.getOptionsList(this.options) +
				'</ul>';
		}
		return list;
	}

	getSelectLabelSR() {
		if (this.label) {
			return (
				'<p class="sr-only" id="' +
				this.selectId +
				'-description">' +
				this.label.textContent +
				'</p>'
			);
		} else {
			return '';
		}
	}

	resetCustomSelect() {
		const selectedOption = this.dropdown.querySelector(
			'[aria-selected="true"]'
		);

		if (selectedOption) {
			selectedOption.setAttribute('aria-selected', 'false');
		}

		const option = this.dropdown.querySelector(
			'.js-select__item[data-index="' + this.select.selectedIndex + '"]'
		);
		option.setAttribute('aria-selected', 'true');
		this.trigger.getElementsByClassName('js-select__label')[0].textContent =
			option.textContent;
		this.trigger.setAttribute('aria-expanded', 'false');
		this.updateTriggerAria();
	}

	getOptionsList(options) {
		let list = '';
		for (let index = 0; index < options.length; index++) {
			const selected = options[index].hasAttribute('selected')
				? ' aria-selected="true"'
				: ' aria-selected="false"';

			list =
				list +
				'<li><button type="button" class="reset js-select__item select__item select__item--option" role="option" data-value="' +
				options[index].value +
				'" ' +
				selected +
				' data-index="' +
				this.optionIndex +
				'">' +
				options[index].text +
				'</button></li>';
			this.optionIndex = this.optionIndex + 1;
		}
		return list;
	}

	getSelectedOption() {
		const option = this.dropdown.querySelector('[aria-selected="true"]');

		if (option) {
			return option;
		} else {
			this.dropdown.getElementsByClassName('js-select__item')[0];
		}
	}

	moveFocusToSelectTrigger() {
		if (!document.activeElement.closest('.js-select')) {
			return;
		}
		this.trigger.focus();
	}

	checkCustomSelectClick(target) {
		if (!this.element.contains(target)) {
			this.toggleCustomSelect('false');
		}
	}
}
