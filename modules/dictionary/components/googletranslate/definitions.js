const definitionsGG = (meaning) => {
	if (!meaning || meaning.length < 1) {
		return [];
	}

	return [
		{
			definition: meaning[0],
			examples: meaning[1],
			synonymous: !meaning[3] ? [] : meaning[3],
		},
	];
};

module.exports = definitionsGG;
