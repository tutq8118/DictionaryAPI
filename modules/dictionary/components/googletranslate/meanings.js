const definitionsGG = require('./definitions');

const meaningsGG = (translateItem) => {
	const meanings = translateItem[1];
	if (!meanings || meanings.length < 1) {
		return [];
	}

	return meanings.map((meaning) => ({
		type: translateItem[0],
		definitions: definitionsGG(meaning),
	}));
};

module.exports = meaningsGG;
