const examples = require('./examples');

const definitions = ($, $container) => {
	const $definitions = $container.find('.sense-body .def-block.ddef_block');

	if ($definitions.length < 1) {
		return [];
	}

	return $definitions
		.map((index, definition) => ({
			grammar: $(definition)
				.find('.gram.dgram')
				.first()
				.text()
				.replace(/\[|\]/g, ''),
			definition: $(definition)
				.find('.def.ddef_d.db')
				.text()
				.replace(/(\r\n|\n|\r)/gm, '')
				.trim(),
			examples: examples($, $(definition)),
		}))
		.get();
};

module.exports = definitions;
