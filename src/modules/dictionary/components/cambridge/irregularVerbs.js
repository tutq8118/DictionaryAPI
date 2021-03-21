const irregularVerbs = ($, $container) => {
	const $irregularVerbs = $container.find('.irreg-infls .inf-group');

	if ($irregularVerbs.length < 1) {
		return [];
	}

	return $irregularVerbs
		.map((index, verb) => ({
			prefix: $(verb).find('.lab.dlab').text(),
			text: $(verb).find('.inf.dinf').text(),
		}))
		.get();
};

module.exports = irregularVerbs;
