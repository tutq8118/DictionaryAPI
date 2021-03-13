const { BASE_URL } = require('../env');

const idioms = ($, $container) => {
	const $idioms = $container.find('.idioms .item');

	if ($idioms.length < 1) {
		return [];
	}

	return $idioms
		.map((index, idiom) => ({
			text: $(idiom).text(),
			url: BASE_URL + $(idiom).find('a').attr('href'),
		}))
		.get();
};

module.exports = idioms;
