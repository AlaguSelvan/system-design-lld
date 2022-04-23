class Seat {

	constructor(readonly _id: number, readonly rowNo: number, readonly seatNo: number) {
		this._id = _id;
		this.rowNo = rowNo;
		this.seatNo = seatNo;
	}

}

export default Seat;