const { BASE_URL } = require('../env');

const phonetics = ($, $container) => {
	const $phonetics = $container
		.find('.dpron-i')
		.not('.irreg-infls .dpron-i')
		.not('.drunon .dpron-i');

	if ($phonetics.length < 1) {
		return [];
	}

	return $phonetics
		.map((index, phonetic) => ({
			type: $(phonetic).find('.region').text(),
			text: $(phonetic).find('.pron.dpron').text(),
			audio:
				BASE_URL +
				$(phonetic)
					.find('.daud amp-audio source[type="audio/mpeg"]')
					.attr('src'),
		}))
		.get();
};

module.exports = phonetics;
