const Car = require('./Car');

/**
 * @description a base class for Parking lot
 * 
 */


class ParkingLot {

	constructor() {
		this.maxParkingSlots = 0;
		this.slots = new Array();
	}

	createParkingLot(input) {
		if(input <= 0) throw new Error("Minimum one slot is required to create a parking lot");
		for(let i = 0; i < input; i++) {
			this.slots.push(null)
				this.maxParkingSlots += 1;
		}
		return this.maxParkingSlots;
	}

	/**
	 * 
	 * @param {String} registerNumber 
	 * @param {String} color
	 * @description allocate slot for the car
	 * @returns {Number} id of slot
	 */
	parkCar(registerNumber, color) {
		if(!registerNumber || !color) throw new Error("Verify the inputs");
		if(this.isParkingLotFull()) throw new Error("Parking lot is full");
		for(let i = 0; i < this.slots.length; i++) {
			if(this.slots[i] === null) {
				this.slots[i] = new Car(registerNumber, color)
				return i;
			}
		}
	}

	/**
	 * 
	 * @param {Number} index 
	 * @description Leaver car by slotId
	 * @returns {Number} id of slot
	 */
	leaveCar(index) {
		if(index < 0 || index > this.maxParkingSlots) throw new Error("Slot not found");
		if(this.slots[index]) throw new Error("Slot is already free");
		this.slots[index] = null;
		return index;
	}

	/**
	 * 
	 * @param {Number} registerNumber 
	 * @description Leave car by registerNumber
	 * @returns {Number} id of slot
	 */
	leaveCarByRegisterNumber(registerNumber) {
		if(this.maxParkingSlots < 0) throw new Error("Parking lot is empty");
		for(let i = 0; i < this.slots; i++) {
			if(this.slots[i].registerNumber === registerNumber) {
				this.slots[i] = null;
				return i;
			}
		}
		
	}

	/**
	 * 
	 * @description Get Parking lot status
	 * @returns {Array} Parking lot list
	 */
	getParkingStatus() {
		if(this.maxParkingSlots < 0) throw new Error("Parking lot is empty");
		return this.slots;
	}

	/**
	 * 
	 * @param {String} color color of the car;
	 * @description find car registerNumber list by color
	 * @returns {Array} register Number slot
	 */

	findCarByColor(color) {
		if(this.maxParkingSlots < 0) throw new Error("Parking lot is empty");
		let sameColoredCars = new Array();
		for(let i = 0; i < this.slots.length; i++) {
			if(this.slots[i].color === color) {
				sameColoredCars.push(this.slots[i].registerNumber)
			}
		}
		if(sameColoredCars.length === 0) throw new Error("No cars found for the color");
		return sameColoredCars;
	}


	/**
	 * 
	 * @param {String} color color of the car;
	 * @description find slot list by color
	 * @returns {Array} Slot
	 */

	findSlotByColor(color) {
		if(this.maxParkingSlots < 0) throw new Error("Parking lot is empty");
		let slotList = new Array();
		for(let i = 0; i < this.slots.length; i++) {
			if(this.slots[i].color === color) {
				slotList.push(i)
			}
		}
		if(slotList.length === 0) throw new Error("No slots found for the color");
		return slotList;
	}

	/**
	 * 
	 * @param {string} registerNumber 
	 * @description get slot number by car register number
	 * @returns id of slot
	 */
	getSlotByRegisterNumber(registerNumber) {
		if(this.maxParkingSlots < 0) throw new Error("Parking lot is empty");
		for(let i = 0; i < this.slots.length; i++) {
			if(this.slots[i].registerNumber === registerNumber) {
				return i;
			}
		}
		throw new Error("slot not found")
	}

	/**
	 * @description Get all slots
	 * @returns {Array} Slots
	 */
	findAllSlots() {
		if(this.maxParkingSlots < 0) throw new Error("Parking lot is empty");
		return this.slots;
	}

	/**
	 * @description Get all allocated slots
	 * @returns {Array} Slots
	 */
	findAlocatedSlots() {
		if(this.maxParkingSlots < 0) throw new Error("Parking lot is empty");
		let allocatedSlots = new Array();
		for(let i = 0; i < this.slots; i++) {
			if(this.slots[i] !== null) allocatedSlots.push(i)
		}
		return this.allocatedSlots;
	}

	
	/**
	 * @description Get all free slots
	 * @returns {Array} Slots
	 */
	findAvailableSlots() {
		if(this.maxParkingSlots < 0) throw new Error("Parking lot is empty");
		let free = new Array();
		for(let i = 0; i < this.slots; i++) {
			if(this.slots[i] === null) free.push(i)
		}
		return this.free;
	}

	isParkingLotFull() {
		return this.slots.indexOf(null) > -1
	}
}

export default ParkingLot