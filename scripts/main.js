import Switch from './components/Switch';

export class App {
	constructor() {
		new Switch();
	}

	static init() {
		const index = new App();
		return index;
	}
}

(function () {
	App.init();
})();
