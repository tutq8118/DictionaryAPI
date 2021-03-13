const { BASE_URL } = require('../env');

const phrasalVerbs = ($, $container) => {
	const $phrasalVerbs = $container.find('.phrasal_verbs .item');

	if ($phrasalVerbs.length < 1) {
		return [];
	}

	return $phrasalVerbs
		.map((index, phrasalVerb) => ({
			text: $(phrasalVerb).text(),
			link: BASE_URL + $(phrasalVerb).find('a').attr('href'),
		}))
		.get();
};

module.exports = phrasalVerbs;
