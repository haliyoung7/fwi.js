/**
 * This is the helpers class.  It will grow over time.  It contains methods
 * that are designed to help aid certain repetitive tasks.
 */
export class Helpers {

	constructor() {

	}

	/**
	 * This helper method is designed to split a color into it's opacity.
	 * This is needed because most color libraries don't store their alpha information
	 * in the first two digits of the hex code!
	 * @param {String} color 8 digit hex color that our software uses
	 * @returns {Object}
	 */
	static splitColor(color) {
		const opacity = parseInt('0x' + color.slice(1,3))/255;

		const rgb = '#' + color.slice(3,9);

		return ({'rgb' : rgb, 'opacity' : opacity});
	}
}