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

const nonExamples = ($, $container) => {
	const $examples = $container.find('.degs .lbb.lb-cm');

	if ($examples.length < 1) {
		return [];
	}

	return $examples
		.map((index, example) => $(example).find('.deg').html().trim())
		.get();
};

const examples = ($, $container) => {
	const $examples = $container.find('.examp.dexamp');
	const $nonExamples = $('[data-id="examples"]');

	if ($examples.length < 1) {
		return nonExamples($, $nonExamples);
	}
	modifyExampleTemplate($, $examples);
	return $examples
		.map((index, example) => $(example).find('.eg.deg').html().trim())
		.get();
};

module.exports = { examples, nonExamples };
