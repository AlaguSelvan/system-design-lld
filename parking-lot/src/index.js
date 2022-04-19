const express = require('express');
const BodyParser = require('body-parser');
const ParkingLot = require('./Models/ParkingLot');

const app = express();

app.use(BodyParser.json());

const parkingLot = new ParkingLot()

app.post('/createParkingLot', (req, res) => {
	const {size} = req.body
	let ans = parkingLot.createParkingLot(size);
	res.send({success: true, message: ans})
})

app.post('/park', (req, res) => {
	const {registerNumber, color} = req.body
	let ans = parkingLot.parkCar(registerNumber, color)
	res.send({success: true, message: ans})
})

app.post('/leaveCar', (req, res) => {
	const {slotId} = req.body
	let result =  parkingLot.leaveCar(slotId)
	res.send({success: true, result})
})

app.post('/leaveCarByRegisterNumber', (req, res) => {
	const {registerNumber} = req.body
	let result =  parkingLot.leaveCarByRegisterNumber(registerNumber)
	res.send({success: true, result})
})


app.get('/findAllSlots', (req, res) => {
	let result =  parkingLot.findAllSlots()
	res.send({success: true, result})
})

app.get('/getSlotByRegisterNumber', (req, res) => {
	let {registerNumber} = req.query;
	let result = parkingLot.getSlotByRegisterNumber(registerNumber)
	res.send({success: true, result})
})

app.get('/car', (req, res) => {
	const {color} = req.query
	let result =  parkingLot.findCarByColor(color)
	res.send({success: true, result})
})

app.get('/findAlocatedSlots', (req, res) => {
	let result =  parkingLot.findAlocatedSlots()
	res.send({success: true, result})
})

app.get('/findAllAvailableSlots', (req, res) => {
	let result =  parkingLot.findAllAvailableSlots()
	res.send({success: true, result})
})

app.get('/findSlotByColor', (req, res) => {
	const {color} = req.query
	if(!color) throw new Error("color is required")
	let result =  parkingLot.findSlotByColor(color)
	res.send({success: true, result})
})

app.get('/getParkingStatus', (req, res) => {
	let result =  parkingLot.getParkingStatus()
	res.send({success: true, result})
})

app.listen(4000, () => {
	console.log('Listening on port 4000!!!!!!!!');
});

module.exports = app;