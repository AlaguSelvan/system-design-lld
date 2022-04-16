const express = require('express');
import ParkingLot from './Models/ParkingLot'

const app = express();
app.use(json());

const parkingLot = new ParkingLot()

app.post('/createParkingLot', (req, res) => {
	const {size} = req.body
	let ans = parkingLot.createParkingLot(size);
	return res.send(ans)
})

app.post('/park', (req, res) => {
	const {registerNumber, color} = req.body
	let ans = parkingLot.parkCar(registerNumber, color)
	return res.send(ans)
})

app.post('/leaveCarByRegisterNumber', (req, res) => {
	const {registerNumber} = req.body
	let ans =  parkingLot.leaveCarByRegisterNumber(registerNumber)
	return res.send(ans)
})


app.get('/findAllSlots', (req, res) => {
	const {registerNumber} = req.body
	let ans =  parkingLot.findAllSlots()
	return res.send(ans)
})

app.get('/getSlotByRegisterNumber', (req, res) => {
	let {registerNumber} = req.query;
	let ans = parkingLot.getSlotByRegisterNumber(registerNumber)
	return ans;
})

app.get('/car', (req, res) => {
	const {color} = req.query
	let ans =  parkingLot.findCarByColor(color)
	return res.send(ans)
})

app.get('/findAlocatedSlots', (req, res) => {
	let ans =  parkingLot.findAlocatedSlots()
	return res.send(ans)
})

app.get('/findAllAvailableSlots', (req, res) => {
	let ans =  parkingLot.findAllAvailableSlots()
	return res.send(ans)
})

app.get('/findSlotByColor', (req, res) => {
	const {color} = req.query
	if(!color) throw new Error("color is required")
	let ans =  parkingLot.findSlotByColor(color)
	return res.send(ans)
})

app.listen(3000, () => {
	console.log('Listening on port 3000!!!!!!!!');
});
