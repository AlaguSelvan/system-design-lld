const ParkingLot = require('../ParkingLot');
 

describe('It creates a parking lot', () => {
	const parkingLot = new ParkingLot();
	it('should create a parking lot', () => {
		const result = parkingLot.createParkingLot(4);
		expect(result).toBe(4);
	})
	it('should park a car', () => {
		const result = parkingLot.parkCar('KA-01-HH-1234', 'White');
		expect(result).toBe(0);
	})
	it('should leave a car by slot id', () => {
		const result = parkingLot.leaveCar(0);
		expect(result).toBe(0);
	})
	it('should leave a car by registerNumber', () => {
		let regNo = 'KA-01-HH-1235'
		parkingLot.parkCar(regNo, 'White');
		const result = parkingLot.leaveCarByRegisterNumber(regNo);
		expect(result).toBe(regNo);
	})
	it('should ensure the list is correct', () => {
		parkingLot.parkCar('KA-01-HH-1235', 'White');
		parkingLot.parkCar('KA-01-HH-12322', 'Red');
		parkingLot.parkCar('KA-01-AH-12332', 'Black');
		parkingLot.parkCar('KA-01-AH-12332', 'Black');
		const result = parkingLot.findAllSlots();
		expect(result.length).toBe(4);
	})
})

describe('It should throw exception for parking lot', () => {
	const parkingLot = new ParkingLot();
	it('should create a parking lot', () => {
		try {
			parkingLot.createParkingLot(-1);
		} catch (e) {
			expect(e.message).toBe("Minimum one slot is required to create a parking lot");
		}
	})
	it('should throw error when parking lot is full', () => {
		try {
			parkingLot.createParkingLot(4)
			parkingLot.parkCar('KA-01-HH-1235', 'White');
			parkingLot.parkCar('KA-01-HH-12322', 'Red');
			parkingLot.parkCar('KA-01-AH-12332', 'Black');
			parkingLot.parkCar('KA-01-AH-12132', 'Black');
			parkingLot.parkCar('KA-01-AH-123321', 'Black');
			expect(true).toBe(false);
		} catch (e) {
			expect(e.message).toBe("Parking lot is full");
		}
	})
	it('should throw error when invalid input for slotid', () => {
		try {
			parkingLot.leaveCar(-1);
			expect(true).toBe(false);
		} catch (e) {
			expect(e.message).toBe("Slot not found");
		}
	})
	it('should throw error slot is already free', () => {
		try {
			parkingLot.leaveCar(0);
		} catch (e) {
			expect(e.message).toBe("Slot is already free");
		}
	})
	it('should throw error when car regno not found', () => {
		try {
			parkingLot.createParkingLot(3)
			const regNo = 'KA-01-HH-1235'
			parkingLot.parkCar(regNo + "4", 'White');
			parkingLot.leaveCarByRegisterNumber(regNo + "1");
			expect(true).toBe(false);
		} catch (e) {
			expect(e.message).toBe("Car not found");
		}
	})
})