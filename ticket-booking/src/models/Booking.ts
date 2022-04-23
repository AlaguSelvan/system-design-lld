import BookingStatus from "./BookingStatus.enum";
import Show from "./Show";

class Booking {
	private _id: number;
	private show = new Show(); 
	private seatsBooked = new Array<Seat>();
	private user: string;
	private bookingStatus: BookingStatus;

	constructor(id: number, show: Show, seatsBooked: Array<Seat>, user: string, bookingStatus: BookingStatus) {
		this._id = id;
		this.show = show;
		this.seatsBooked = seatsBooked;
		this.user = user;
		this.bookingStatus = bookingStatus;
	}
}