import Seat from "./Seat";
import Theatre from "./Theatre";

class TheatreScreen {

	constructor(readonly _id: string, readonly name: string, readonly seats: Array<Seat>, readonly theatre: Theatre) {
		this._id = _id;
		this.name = name;
		this.seats = seats;
		this.theatre = theatre;
	}

	public addSeat(seat: Seat) {
		this.seats.push(seat);
	}

}

export default TheatreScreen;