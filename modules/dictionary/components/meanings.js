const definitions = require('./definitions');

const meanings = ($, $container) => {
	const $meanings = $container.find('.pos-body .pr.dsense');

	if ($meanings.length < 1) {
		return [];
	}

	return $meanings
		.map((index, meaning) => ({
			type: $(meaning).find('.pos.dsense_pos').text(),
			guide_word: $(meaning).find('.guideword.dsense_gw').text().trim(),
			definitions: definitions($, $(meaning)),
		}))
		.get();
};

module.exports = meanings;
