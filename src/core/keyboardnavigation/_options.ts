const options: mmOptionsKeyboardnavigation = {
	enable: true,
	enhance: true
};
export default options;

/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
export function extendShorthandOptions(
	options: mmOptionsKeyboardnavigation
): mmOptionsKeyboardnavigation {

	if (typeof options == 'boolean' || typeof options == 'string') {
		options = {
			enable: options
		};
	}

	if (typeof options != 'object') {
		options = {};
	}

	return options;
};