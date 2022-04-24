class Seat {

	constructor(readonly _id: string, readonly rowNo: number, readonly seatNo: number) {
		this._id = _id;
		this.rowNo = rowNo;
		this.seatNo = seatNo;
	}

}

export default Seat;