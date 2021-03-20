const { examples } = require('./examples');

const grammar = ($definition) =>
	$definition.find('.gram.dgram').first().text().replace(/\[|\]/g, '');

const getDefinition = ($definition) =>
	$definition
		.find('.def.ddef_d.db')
		.text()
		.replace(/[\s\n|\t]+/g, ' ');

const definitions = ($, $container) => {
	const $definitions = $container.find('.sense-body .def-block.ddef_block');

	if ($definitions.length < 1) {
		return [];
	}

	return $definitions
		.map((index, definition) => ({
			grammar: grammar($(definition)),
			definition: getDefinition($(definition)),
			examples: examples($, $(definition)),
		}))
		.get();
};

module.exports = definitions;
