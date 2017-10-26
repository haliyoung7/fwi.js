export class Helpers {

	constructor() {

	}

	static splitColor(color) {
		const opacity = parseInt('0x' + color.slice(1,3))/255;

		const rgb = '#' + color.slice(3,9);

		return ({'rgb' : rgb, 'opacity' : opacity});
	}
}