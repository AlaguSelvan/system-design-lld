/**
 * @description a car object with two attributes registerNumber and color
 * @class Car
 */


class Car {
	constructor(registerNumber, color) {
		this.registerNumber = registerNumber;
		this.color = color;
	}

	/**
	 * 
	 * @param {*} carA 
	 * @param {*} carB 
	 * @description returns true if two Car Objects are equal, else false.
	 * @returns Boolean
	 */

	isCarEqual(carA, carB) {
		return ((carA.registerNumber.toLowerCase() === carB.registerNumber.toLowerCase()) && carA.color.toLowerCase() === carB.color.toLowerCase())
	}
}

module.exports = Car;