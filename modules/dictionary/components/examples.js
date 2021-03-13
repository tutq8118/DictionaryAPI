const modifyExampleTemplate = ($, $container) => {
	$container.find('.b.db').each((i, item) => {
		item.tagName = 'strong';
		$(item).removeAttr('class');
		return item;
	});
	$container.find('.query').each((i, item) => {
		item.tagName = 'span';
		$(item).removeAttr('class href title');
		return item;
	});
};

const examples = ($, $container) => {
	const $examples = $container.find('.examp.dexamp');

	if ($examples.length < 1) {
		return [];
	}
	modifyExampleTemplate($, $examples);
	return $examples
		.map((index, example) => $(example).find('.eg.deg').html().trim())
		.get();
};

module.exports = examples;
